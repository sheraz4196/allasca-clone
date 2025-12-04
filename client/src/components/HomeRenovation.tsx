
import { Button } from '@/components/ui/button';
import ImageCarousel from './ImageCarousel';

const HomeRenovation = () => {
  const images = [
    {
      src: "/lovable-uploads/d8bb675f-ada2-4305-8c3b-3fa91e3162ce.png",
      alt: "Modern kitchen with island and pendant lighting"
    },
    {
      src: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?fm=webp&fit=crop&w=800&q=75",
      alt: "Modern bedroom design"
    },
    {
      src: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?fm=webp&fit=crop&w=800&q=75",
      alt: "Contemporary kitchen with island"
    },
    {
      src: "/lovable-uploads/b1e75ca2-fbfd-4753-a133-df65dc76361f.png",
      alt: "Open concept living space with kitchen and living room"
    }
  ];

  return (
    <section className="py-16 bg-casa-beige">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-casa-purple mb-4">
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
