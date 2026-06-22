"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasVideo, setHasVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;

    const onCanPlay = () => setHasVideo(true);
    const onError = () => setHasVideo(false);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onVolumeChange = () => setIsMuted(video.muted);

    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("error", onError);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("volumechange", onVolumeChange);

    return () => {
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("error", onError);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("volumechange", onVolumeChange);
    };
  }, []);

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

  // Felles knapp-stil — satt 100% inline, uavhengig av Tailwind
  const btnStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    height: "40px",
    minWidth: "40px",
    padding: "0 12px",
    borderRadius: "999px",
    backgroundColor: "rgba(20, 30, 40, 0.85)",
    color: "#ffffff",
    border: "1px solid rgba(255,255,255,0.3)",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: 500,
    fontFamily: "inherit",
  };

  return (
    <section className="px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 xl:px-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-6 max-w-3xl text-[36px] font-light leading-tight tracking-tight text-[#1A3A4A] sm:text-[48px] lg:text-[60px]">
          Eksperter på bad og flislegging i Oslo
        </h1>

        <p className="mb-8 max-w-xl text-[16px] leading-relaxed text-[#2A5A70] sm:text-[18px]">
          Fra flislegging og rørleggerarbeid til innredning og overflater — vi
          leverer komplette baderomsprosjekter med høy kvalitet og forutsigbar
          fremdrift.
        </p>

        <div className="mb-10 flex flex-wrap gap-3">
          <Link
            href="/kontakt"
            className="rounded-full bg-[#4DAEC8] px-7 py-3.5 text-[15px] font-semibold text-white transition hover:bg-[#3A9AB5]"
          >
            Book gratis befaring
          </Link>
          <Link
            href="/tjenester/totaloppussing-av-bad"
            className="rounded-full border border-[#B8E4F0] px-7 py-3.5 text-[15px] font-medium text-[#1A3A4A] transition hover:bg-[#DCF2F9]"
          >
            Se alle våre tjenester
          </Link>
        </div>

        {/* Video wrapper */}
        <div
          ref={wrapRef}
          style={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
            borderRadius: "16px",
            backgroundColor: "#C8EAF5",
            aspectRatio: "16/7",
            boxShadow: "0 20px 60px rgba(77,174,200,0.15)",
          }}
        >
          <video
            ref={videoRef}
            playsInline
            loop
            autoPlay
            controls={false}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source src="/varigebad.mp4" type="video/mp4" />
            <source src="/varigebad.MOV" type="video/quicktime" />
          </video>

          {/* Placeholder */}
          {!hasVideo && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                background:
                  "linear-gradient(135deg, #C8EAF5 0%, #9AD5E8 50%, #4DAEC8 100%)",
              }}
            >
              <span
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Presentasjonsvideo
              </span>
            </div>
          )}

          {/* KONTROLLBAR — helt inline-stilt, garantert synlig, ligger over alt annet */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 999,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px",
              pointerEvents: "auto",
            }}
          >
            {/* Venstre: play/pause + lyd */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause" : "Spill av"}
                style={btnStyle}
              >
                {isPlaying ? (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? "Skru på lyd" : "Skru av lyd"}
                style={btnStyle}
              >
                {isMuted ? (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                  </svg>
                )}
                <span>{isMuted ? "Lyd av" : "Lyd på"}</span>
              </button>
            </div>

            {/* Høyre: fullskjerm */}
            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label="Fullskjerm"
              style={btnStyle}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
              </svg>
              <span>Fullskjerm</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
