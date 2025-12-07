import ImageCarousel from "./ImageCarousel";

const ResidentialConstruction = () => {
  const images = [
    {
      src: "/lovable-uploads/house_2.webp",
      alt: "Modern luxury home with pool and landscaping",
    },
    {
      src: "/lovable-uploads/house_1.webp",
      alt: "Contemporary custom home exterior design",
    },
    {
      src: "/lovable-uploads/house_3.webp",
      alt: "Beautiful modern house exterior",
    },
    {
      src: "/lovable-uploads/house_4.webp",
      alt: "Luxury custom built home exterior",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-purple-700 mb-4">
            Custom & Luxury Home Design & Build
          </h2>
          <p className="text-base text-casa-gray max-w-2xl mx-auto">
            Permits to construction - complete custom home solutions.
          </p>
        </div>

        <div className="animate-on-scroll">
          <ImageCarousel images={images} variant="section" />
        </div>
      </div>
    </section>
  );
};

export default ResidentialConstruction;
