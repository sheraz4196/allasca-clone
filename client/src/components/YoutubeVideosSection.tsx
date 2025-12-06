export default function YoutubeVideosSection() {
  return (
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
          <div
            className="rounded-xl overflow-hidden shadow-lg"
            style={{ aspectRatio: "9/16" }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/_7vH6T9BgPo"
              title="AllCasa Custom Home Construction Video 1"
              frameBorder="0"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div
            className="rounded-xl overflow-hidden shadow-lg"
            style={{ aspectRatio: "9/16" }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/E1ki2QqNx-U"
              title="AllCasa Custom Home Construction Video 2"
              frameBorder="0"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div
            className="rounded-xl overflow-hidden shadow-lg"
            style={{ aspectRatio: "9/16" }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/wyP3P58oVns"
              title="AllCasa Custom Home Construction Video 3"
              frameBorder="0"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div
            className="rounded-xl overflow-hidden shadow-lg"
            style={{ aspectRatio: "9/16" }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/D6ygF0N1XDk"
              title="AllCasa Custom Home Construction Video 4"
              frameBorder="0"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
