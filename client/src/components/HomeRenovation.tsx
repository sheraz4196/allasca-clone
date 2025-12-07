import ImageCarousel from "./ImageCarousel";

const HomeRenovation = () => {
  const images = [
    {
      src: "/lovable-uploads/house_5.webp",
      alt: "Modern kitchen with island and pendant lighting",
    },
    {
      src: "/lovable-uploads/house_7.webp",
      alt: "Modern bedroom design",
    },
    {
      src: "/lovable-uploads/house_8.webp",
      alt: "Contemporary kitchen with island",
    },
    {
      src: "/lovable-uploads/house_6.webp",
      alt: "Open concept living space with kitchen and living room",
    },
  ];

  return (
    <section className="py-16 bg-casa-beige">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-casa-purple mb-4">
            Home Renovation & Layout Alterations
          </h2>
          <p className="text-base text-casa-gray max-w-2xl mx-auto">
            Transform spaces with expert renovation services.
          </p>
        </div>

        <div className="animate-on-scroll">
          <ImageCarousel images={images} variant="section" />
        </div>
      </div>
    </section>
  );
};

export default HomeRenovation;
