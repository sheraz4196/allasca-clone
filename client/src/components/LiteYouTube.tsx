import React, { useState } from "react";

type LiteYouTubeProps = {
  videoId: string;
  title: string;
  aspectRatio?: string; // e.g. "16/9" or "9/16"
  className?: string; // optional extra classes for wrapper
  wrapperClassName?: string; // backward-compat alias
};

export default function LiteYouTube({ videoId, title, aspectRatio = "16/9", className, wrapperClassName }: LiteYouTubeProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const combinedWrapperClass = [
    "rounded-xl overflow-hidden shadow-lg mx-auto bg-black",
    wrapperClassName ?? className
  ].filter(Boolean).join(" ");

  return (
    <div className={combinedWrapperClass} style={{ aspectRatio }}>
      {!isLoaded ? (
        <button
          type="button"
          aria-label={`Play video: ${title}`}
          className="relative w-full h-full group"
          onClick={() => setIsLoaded(true)}
          style={{ cursor: "pointer" }}
        >
          {/* Lightweight placeholder without external requests */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center text-white">
              <div className="w-16 h-16 rounded-full bg-white/80 text-black flex items-center justify-center shadow-lg group-hover:bg-white transition-colors">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="mt-3 text-sm opacity-80">Play Video</span>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black" />
        </button>
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
          title={title}
          frameBorder={0}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      )}
    </div>
  );
}