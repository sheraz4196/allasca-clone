import { Button } from "@/components/ui/button";
import ImageCarousel from "./ImageCarousel";

const BasementDevelopment = () => {
  const images = [
    {
      src: "/lovable-uploads/house_9.webp",
      alt: "Modern finished basement with kitchen and living area",
    },
    {
      src: "/lovable-uploads/house_10.webp",
      alt: "Modern basement entertainment room",
    },
    {
      src: "/lovable-uploads/house_11.webp",
      alt: "Contemporary basement suite design",
    },
    {
      src: "/lovable-uploads/house_12.webp",
      alt: "Modern basement family room",
    },
    {
      src: "/lovable-uploads/house_13.webp",
      alt: "Finished basement with bar area",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-casa-purple mb-4">
            Basement Development & Walkouts
          </h2>
          <p className="text-base text-casa-gray max-w-2xl mx-auto">
            Basement renovation, walkout installation, staircase construction.
          </p>
        </div>

        <div className="animate-on-scroll">
          <ImageCarousel images={images} variant="section" />
        </div>
      </div>
    </section>
  );
};

export default BasementDevelopment;
