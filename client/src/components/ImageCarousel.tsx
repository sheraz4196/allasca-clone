import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  variant?: "default" | "section" | "compact";
}

const ImageCarousel = ({ images, variant = "default" }: ImageCarouselProps) => {
  const isSection = variant === "section";
  const isCompact = variant === "compact";

  const getSizes = () => {
    if (isCompact) return "(max-width: 768px) 100vw, 55vw";
    if (isSection) return "(max-width: 768px) 100vw, 33vw";
    return "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw";
  };

  if (isCompact) {
    return (
      <div className="w-full">
        <Carousel
          className="w-full"
          opts={{
            align: "center",
            loop: true,
            dragFree: false,
          }}
        >
          <CarouselContent className="ml-0">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-[70%] lg:basis-[55%] pl-3"
              >
                <div className="group">
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg bg-gray-100 min-h-[200px] sm:min-h-[240px] lg:min-h-[280px]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={600}
                      sizes={getSizes()}
                      srcSet={`
                        ${image.src}?w=320 320w,
                        ${image.src}?w=640 640w,
                        ${image.src}?w=1024 1024w
                      `}
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                      fetchPriority={index === 0 ? "high" : "auto"}
                      draggable={false}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center items-center mt-4 space-x-2">
            <CarouselPrevious className="relative translate-y-0 h-8 w-8 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm rounded-full" />
            <CarouselNext className="relative translate-y-0 h-8 w-8 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm rounded-full" />
          </div>
        </Carousel>
      </div>
    );
  }

  return (
    <div
      className={`w-full ${isSection ? "max-w-none" : "max-w-7xl mx-auto"} ${
        isSection ? "" : "px-4"
      }`}
    >
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
        }}
      >
        <CarouselContent className={isSection ? "-ml-3" : "-ml-2 md:-ml-4"}>
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className={
                isSection
                  ? "pl-3 basis-full md:basis-1/3"
                  : "pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              }
            >
              <div className="h-full">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg bg-gray-100">
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={600}
                    sizes={getSizes()}
                    srcSet={`
                      ${image.src}?w=320 320w,
                      ${image.src}?w=640 640w,
                      ${image.src}?w=1024 1024w
                    `}
                    loading={index < 2 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={index < 2 ? "high" : "auto"}
                    draggable={false}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div
          className={`flex justify-center items-center ${
            isSection ? "mt-4" : "mt-6"
          } gap-4`}
        >
          <CarouselPrevious className="relative translate-y-0 h-10 w-10 bg-white border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300" />
          <CarouselNext className="relative translate-y-0 h-10 w-10 bg-white border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
