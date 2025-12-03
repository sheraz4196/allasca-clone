import { Button } from '@/components/ui/button';
import ImageCarousel from './ImageCarousel';

const BasementDevelopment = () => {
  const images = [
    {
      src: "/lovable-uploads/afd741c1-aeb3-4149-aa2f-9ae7593d8727.png",
      alt: "Modern finished basement with kitchen and living area"
    },
    {
      src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?fm=webp&fit=crop&w=800&q=75",
      alt: "Modern basement entertainment room"
    },
    {
      src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?fm=webp&fit=crop&w=800&q=75",
      alt: "Contemporary basement suite design"
    },
    {
      src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?fm=webp&fit=crop&w=800&q=75",
      alt: "Modern basement family room"
    },
    {
      src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?fm=webp&fit=crop&w=800&q=75",
      alt: "Finished basement with bar area"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-casa-purple mb-4">
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
