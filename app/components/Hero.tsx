"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasVideo, setHasVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const onCanPlay = () => setHasVideo(true);
    const onError = () => setHasVideo(false);
    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("error", onError);
    return () => {
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("error", onError);
    };
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
    setIsPlaying((prev) => !prev);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted((prev) => !prev);
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

        <div
          className="group relative w-full overflow-hidden rounded-2xl bg-[#C8EAF5] shadow-[0_20px_60px_rgba(77,174,200,0.15)]"
          style={{ aspectRatio: "16/7" }}
        >
          {/* muted settes via useEffect, ikke som prop — ellers fungerer ikke toggleMute */}
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            playsInline
            loop
            autoPlay
          >
            <source src="/varigebad.mp4" type="video/mp4" />
            <source src="/varigebad.MOV" type="video/quicktime" />
          </video>

          {!hasVideo && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#C8EAF5] via-[#9AD5E8] to-[#4DAEC8]">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="white"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-[14px] font-medium text-white/80">
                Presentasjonsvideo
              </span>
            </div>
          )}

          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[12px] font-semibold text-[#1A3A4A] backdrop-blur-sm">
            ▶ Se prosjektene våre
          </span>

          <div className="absolute inset-0 flex items-center justify-center bg-[#1A3A4A]/10 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Spill av video"}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-[#4DAEC8] shadow-xl transition-transform duration-200 hover:scale-105 hover:bg-white"
            >
              {isPlaying ? (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ marginLeft: 3 }}
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gradient-to-t from-[#1A3A4A]/50 to-transparent px-4 py-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <button
              onClick={togglePlay}
              className="flex items-center gap-1.5 rounded-full border border-white/30 bg-white/20 px-3 py-1.5 text-[12px] font-medium text-white backdrop-blur-sm transition hover:bg-white/35"
            >
              {isPlaying ? (
                <>
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                  Pause
                </>
              ) : (
                <>
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Spill av
                </>
              )}
            </button>
            <button
              onClick={toggleMute}
              className="flex items-center gap-1.5 rounded-full border border-white/30 bg-white/20 px-3 py-1.5 text-[12px] font-medium text-white backdrop-blur-sm transition hover:bg-white/35"
            >
              {isMuted ? (
                <>
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                  </svg>
                  Lyd på
                </>
              ) : (
                <>
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                  </svg>
                  Lyd av
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
