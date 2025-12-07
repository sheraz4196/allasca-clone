import ImageCarousel from "./ImageCarousel";

const GardenSuites = () => {
  const images = [
    {
      src: "/lovable-uploads/house_14.webp",
      alt: "Beautiful backyard with green lawn, wooden fence and glass pool barrier",
    },
    {
      src: "/lovable-uploads/house_15.webp",
      alt: "Modern garden suite entrance with concrete steps and handrail",
    },
    {
      src: "/lovable-uploads/house_16.webp",
      alt: "Contemporary garden suite with pool and outdoor living space",
    },
    {
      src: "/lovable-uploads/house_17.webp",
      alt: "Custom garden suite with interlocked pathway and landscaping",
    },
    {
      src: "/lovable-uploads/house_18.webp",
      alt: "Elegant home with interlocked driveway and front entrance",
    },
  ];

  return (
    <section className="py-16 bg-casa-beige" id="garden-suites">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-casa-purple mb-4">
            Garden Suites & Backyard Living Spaces
          </h2>
          <p className="text-base text-casa-gray max-w-2xl mx-auto">
            Custom garden suites and backyard living spaces.
          </p>
        </div>

        <div className="animate-on-scroll">
          <ImageCarousel images={images} variant="section" />
        </div>
      </div>
    </section>
  );
};

export default GardenSuites;
