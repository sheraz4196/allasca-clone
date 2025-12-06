import { useEffect, useState } from "react";

interface VideoData {
  id: string;
  title: string;
  thumbnailUrl: string;
}

const videoData: VideoData[] = [
  {
    id: "_7vH6T9BgPo",
    title: "AllCasa Custom Home Construction Video 1",
    thumbnailUrl: "https://i.ytimg.com/vi/_7vH6T9BgPo/hqdefault.jpg",
  },
  {
    id: "E1ki2QqNx-U",
    title: "AllCasa Custom Home Construction Video 2",
    thumbnailUrl: "https://i.ytimg.com/vi/E1ki2QqNx-U/hqdefault.jpg",
  },
  {
    id: "wyP3P58oVns",
    title: "AllCasa Custom Home Construction Video 3",
    thumbnailUrl: "https://i.ytimg.com/vi/wyP3P58oVns/hqdefault.jpg",
  },
  {
    id: "D6ygF0N1XDk",
    title: "AllCasa Custom Home Construction Video 4",
    thumbnailUrl: "https://i.ytimg.com/vi/D6ygF0N1XDk/hqdefault.jpg",
  },
];

// Lazy-loaded video component
const LazyVideo = ({ video, index }: { video: VideoData; index: number }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "100px",
        threshold: 0.1,
      }
    );

    const videoElement = document.getElementById(`video-${index}`);
    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => observer.disconnect();
  }, [index]);

  const handleThumbnailLoad = () => {
    setIsLoaded(true);
  };

  const handleThumbnailError = () => {
    setHasError(true);
    setIsLoaded(true); // Still mark as loaded to show placeholder
  };

  return (
    <div
      id={`video-${index}`}
      className="rounded-xl overflow-hidden shadow-lg relative group"
      style={{ aspectRatio: "9/16" }}
    >
      {/* Thumbnail placeholder */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {!hasError ? (
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading={index < 2 ? "eager" : "lazy"}
            decoding="async"
            onLoad={handleThumbnailLoad}
            onError={handleThumbnailError}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-casa-purple/10 to-casa-navy/10 flex items-center justify-center">
            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-full bg-casa-purple/20 flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-8 h-8 text-casa-purple"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-casa-navy font-medium">{video.title}</p>
            </div>
          </div>
        )}

        {/* Play button overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center transform group-hover:scale-110 transition-transform">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Loading skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />
      )}

      {/* Actual iframe (only loaded when in view and clicked) */}
      {isInView && (
        <div
          className={`absolute inset-0 transition-all duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ display: isLoaded ? "block" : "none" }}
        >
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.id}?enablejsapi=1&rel=0&modestbranding=1`}
            title={video.title}
            frameBorder="0"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            // Additional performance attributes
            sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          />
        </div>
      )}
    </div>
  );
};

// Main component
export default function YoutubeVideosSection() {
  const [preconnectInitialized, setPreconnectInitialized] = useState(false);

  useEffect(() => {
    // Preconnect to YouTube domains for faster loading
    const preconnectLinks = [
      { rel: "preconnect", href: "https://www.youtube.com" },
      { rel: "preconnect", href: "https://i.ytimg.com" },
    ];

    preconnectLinks.forEach((link) => {
      const exists = document.querySelector(`link[href="${link.href}"]`);
      if (!exists) {
        const linkEl = document.createElement("link");
        linkEl.rel = link.rel;
        linkEl.href = link.href;
        if (link.rel === "preconnect") {
          linkEl.crossOrigin = "";
        }
        document.head.appendChild(linkEl);
      }
    });

    setPreconnectInitialized(true);

    // Preload critical thumbnails (first 2 videos)
    videoData.slice(0, 2).forEach((video) => {
      const img = new Image();
      img.src = video.thumbnailUrl;
    });

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <>
      {/* Add preload hints in head */}
      {preconnectInitialized && (
        <>
          <link
            rel="preload"
            href={videoData[0].thumbnailUrl}
            as="image"
            media="(min-width: 1024px)"
          />
          <link
            rel="preload"
            href={videoData[1].thumbnailUrl}
            as="image"
            media="(min-width: 1024px)"
          />
        </>
      )}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-casa-navy mb-4">
              See Our Work in Action
            </h2>
            <p className="text-lg text-gray-600">
              Watch a quick overview of our custom home construction and
              renovation services
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {videoData.map((video, index) => (
              <LazyVideo key={video.id} video={video} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
