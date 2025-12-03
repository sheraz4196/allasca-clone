
import { Button } from '@/components/ui/button';
import ImageCarousel from './ImageCarousel';

const GardenSuites = () => {
  const images = [
    {
      src: "/lovable-uploads/5259f38c-837f-4729-b3ad-649e590f3c73.png",
      alt: "Beautiful backyard with green lawn, wooden fence and glass pool barrier"
    },
    {
      src: "/lovable-uploads/d43d08d9-3429-4948-b3bd-1dbe6bb4cb13.png",
      alt: "Modern garden suite entrance with concrete steps and handrail"
    },
    {
      src: "/lovable-uploads/6eeab214-cf36-4d78-9fe8-27938ceda71c.png",
      alt: "Contemporary garden suite with pool and outdoor living space"
    },
    {
      src: "/lovable-uploads/5a1bb314-41ef-4133-abdf-e5d8f60d0583.png",
      alt: "Custom garden suite with interlocked pathway and landscaping"
    },
    {
      src: "/lovable-uploads/8be807a4-71d2-46e8-9a8f-9eb9e256e924.png",
      alt: "Elegant home with interlocked driveway and front entrance"
    }
  ];

  return (
    <section className="py-16 bg-casa-beige">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-casa-purple mb-4">
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
