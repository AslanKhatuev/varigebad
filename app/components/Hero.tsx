"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";

function formatTime(seconds: number) {
  if (!isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasVideo, setHasVideo] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isScrubbing, setIsScrubbing] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;

    const onCanPlay = () => setHasVideo(true);
    const onError = () => setHasVideo(false);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onVolumeChange = () => setIsMuted(video.muted);
    const onLoadedMetadata = () => setDuration(video.duration);
    const onTimeUpdate = () => {
      if (!isScrubbing) setCurrentTime(video.currentTime);
    };

    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("error", onError);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("volumechange", onVolumeChange);
    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("error", onError);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("volumechange", onVolumeChange);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [isScrubbing]);

  useEffect(() => {
    const onFsChange = () => {
      const fsEl =
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).msFullscreenElement;
      setIsFullscreen(!!fsEl);
    };
    document.addEventListener("fullscreenchange", onFsChange);
    document.addEventListener("webkitfullscreenchange", onFsChange);
    document.addEventListener("MSFullscreenChange", onFsChange);
    return () => {
      document.removeEventListener("fullscreenchange", onFsChange);
      document.removeEventListener("webkitfullscreenchange", onFsChange);
      document.removeEventListener("MSFullscreenChange", onFsChange);
    };
  }, []);

  // Auto-hide-logikk: kontrollene vises ved bevegelse/touch, og forsvinner etter
  // 2.5s inaktivitet — men kun mens videoen faktisk spiller. Når pauset, holdes de synlige.
  const scheduleHide = useCallback(() => {
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = setTimeout(() => {
      if (isPlaying && !isScrubbing) setShowControls(false);
    }, 2500);
  }, [isPlaying, isScrubbing]);

  const handleActivity = useCallback(() => {
    setShowControls(true);
    scheduleHide();
  }, [scheduleHide]);

  useEffect(() => {
    // Når videoen pauses, vis kontrollene og avbryt skjul-timeren
    if (!isPlaying) {
      setShowControls(true);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    } else {
      scheduleHide();
    }
    return () => {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, [isPlaying, scheduleHide]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video
        .play()
        .catch((err) => console.error("Kunne ikke spille video:", err));
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    if (!video.muted && video.volume === 0) {
      video.volume = 1;
    }
    setIsMuted(video.muted);
  };

  const toggleFullscreen = () => {
    const el = wrapRef.current as any;
    if (!el) return;

    const isFs =
      document.fullscreenElement ||
      (document as any).webkitFullscreenElement ||
      (document as any).msFullscreenElement;

    if (!isFs) {
      if (el.requestFullscreen) el.requestFullscreen();
      else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
      else if (el.msRequestFullscreen) el.msRequestFullscreen();
      else if (
        videoRef.current &&
        (videoRef.current as any).webkitEnterFullscreen
      ) {
        (videoRef.current as any).webkitEnterFullscreen();
      } else {
        console.warn("Fullskjerm er ikke støttet i denne nettleseren.");
      }
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
      else if ((document as any).webkitExitFullscreen)
        (document as any).webkitExitFullscreen();
      else if ((document as any).msExitFullscreen)
        (document as any).msExitFullscreen();
    }
  };

  const seekFromClientX = (clientX: number) => {
    const bar = progressRef.current;
    const video = videoRef.current;
    if (!bar || !video || !duration) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    const newTime = ratio * duration;
    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    seekFromClientX(e.clientX);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsScrubbing(true);
    setShowControls(true);
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    seekFromClientX(e.clientX);

    const onMove = (ev: PointerEvent) => seekFromClientX(ev.clientX);
    const onUp = () => {
      setIsScrubbing(false);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <section
      aria-label="Introduksjon: Eksperter på bad og flislegging i Oslo"
      className="px-4 pb-10 pt-10 sm:px-6 sm:pb-16 sm:pt-14 md:pb-20 md:pt-16 lg:px-8 xl:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-4 max-w-3xl text-[28px] font-light leading-tight tracking-tight text-[#1A3A4A] sm:mb-5 sm:text-[40px] md:text-[48px] lg:text-[60px]">
          Eksperter på bad og flislegging i Oslo
        </h1>

        <p className="mb-6 max-w-xl text-[15px] leading-relaxed text-[#2A5A70] sm:mb-8 sm:text-[16px] md:text-[18px]">
          Fra flislegging og rørleggerarbeid til innredning og overflater — vi
          leverer komplette baderomsprosjekter med høy kvalitet og forutsigbar
          fremdrift.
        </p>

        <div className="mb-8 flex flex-wrap gap-3 sm:mb-10">
          <Link
            href="/kontakt"
            className="rounded-full bg-[#4DAEC8] px-6 py-3 text-[14px] font-semibold text-white transition hover:bg-[#3A9AB5] sm:px-7 sm:py-3.5 sm:text-[15px]"
          >
            Book gratis befaring
          </Link>
          <Link
            href="/tjenester/totaloppussing-av-bad"
            className="rounded-full border border-[#B8E4F0] px-6 py-3 text-[14px] font-medium text-[#1A3A4A] transition hover:bg-[#DCF2F9] sm:px-7 sm:py-3.5 sm:text-[15px]"
          >
            Se alle våre tjenester
          </Link>
        </div>

        <div
          ref={wrapRef}
          role="group"
          aria-label="Presentasjonsvideo av Varige Bads prosjekter"
          onMouseMove={handleActivity}
          onMouseEnter={handleActivity}
          onTouchStart={handleActivity}
          className={
            isFullscreen
              ? "relative flex h-screen w-screen items-center justify-center bg-black"
              : "relative w-full overflow-hidden rounded-2xl bg-black shadow-[0_20px_60px_rgba(77,174,200,0.15)]"
          }
        >
          <video
            ref={videoRef}
            playsInline
            loop
            autoPlay
            controls={false}
            onClick={togglePlay}
            aria-label="Video som viser Varige Bads baderomsprosjekter i Oslo"
            className={
              isFullscreen
                ? "max-h-full max-w-full cursor-pointer object-contain"
                : "block w-full cursor-pointer"
            }
          >
            <source src="/varigebad.mp4" type="video/mp4" />
            <source src="/varigebad.MOV" type="video/quicktime" />
            Din nettleser støtter ikke videoavspilling.
          </video>

          {!hasVideo && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#C8EAF5] via-[#9AD5E8] to-[#4DAEC8]">
              <span className="text-[13px] font-medium text-white/85 sm:text-[14px]">
                Presentasjonsvideo
              </span>
            </div>
          )}

          {/* Kontrollbar — fades inn/ut basert på showControls */}
          <div
            className={`absolute inset-x-0 bottom-0 z-50 bg-gradient-to-t from-black/75 via-black/35 to-transparent transition-opacity duration-300 ${
              showControls ? "opacity-100" : "pointer-events-none opacity-0"
            } ${
              isFullscreen
                ? "px-4 pb-4 pt-10 sm:px-6 sm:pb-6"
                : "px-3 pb-3 pt-8 sm:px-4 sm:pb-4"
            }`}
          >
            <div
              ref={progressRef}
              onClick={handleProgressClick}
              onPointerDown={handlePointerDown}
              role="slider"
              aria-label="Videofremdrift"
              aria-valuemin={0}
              aria-valuemax={duration}
              aria-valuenow={currentTime}
              tabIndex={0}
              className="group relative mb-2 h-3 w-full cursor-pointer touch-none sm:mb-3"
            >
              <div className="absolute left-0 top-1/2 h-1.5 w-full -translate-y-1/2 rounded-full bg-white/25" />
              <div
                className="absolute left-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-[#4DAEC8]"
                style={{ width: `${progressPercent}%` }}
              />
              <div
                className="absolute top-1/2 h-3 w-3 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white shadow transition-transform group-hover:scale-110 sm:h-3.5 sm:w-3.5"
                style={{ left: `${progressPercent}%` }}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause video" : "Spill av video"}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-black/70 sm:h-10 sm:w-10"
                  style={{ backgroundColor: "rgba(20, 30, 40, 0.85)" }}
                >
                  {isPlaying ? (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="sm:h-4 sm:w-4"
                    >
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  ) : (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="sm:h-4 sm:w-4"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>

                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Skru på lyd" : "Skru av lyd"}
                  className="flex h-8 shrink-0 items-center gap-1.5 rounded-full border border-white/30 px-2.5 text-[11px] font-medium text-white transition hover:bg-black/70 sm:h-10 sm:px-3.5 sm:text-[13px]"
                  style={{ backgroundColor: "rgba(20, 30, 40, 0.85)" }}
                >
                  {isMuted ? (
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="sm:h-[15px] sm:w-[15px]"
                    >
                      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                    </svg>
                  ) : (
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="sm:h-[15px] sm:w-[15px]"
                    >
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                    </svg>
                  )}
                  <span className="hidden sm:inline">
                    {isMuted ? "Lyd av" : "Lyd på"}
                  </span>
                </button>

                <span className="select-none whitespace-nowrap text-[11px] font-medium tabular-nums text-white/90 sm:text-[13px]">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <button
                type="button"
                onClick={toggleFullscreen}
                aria-label={
                  isFullscreen ? "Lukk fullskjerm" : "Åpne video i fullskjerm"
                }
                className="flex h-8 shrink-0 items-center gap-1.5 rounded-full border border-white/30 px-2.5 text-[11px] font-medium text-white transition hover:bg-black/70 sm:h-10 sm:px-3.5 sm:text-[13px]"
                style={{ backgroundColor: "rgba(20, 30, 40, 0.85)" }}
              >
                {isFullscreen ? (
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="sm:h-[15px] sm:w-[15px]"
                  >
                    <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
                  </svg>
                ) : (
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="sm:h-[15px] sm:w-[15px]"
                  >
                    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                  </svg>
                )}
                <span className="hidden sm:inline">
                  {isFullscreen ? "Lukk" : "Fullskjerm"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
