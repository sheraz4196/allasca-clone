
import { Button } from '@/components/ui/button';
import ImageCarousel from './ImageCarousel';

const ResidentialConstruction = () => {
  const images = [
    {
      src: "/lovable-uploads/c1e20eb7-c31f-46f1-8f47-5c31394a6a22.webp",
      alt: "Modern luxury home with pool and landscaping"
    },
    {
      src: "/lovable-uploads/19576d91-f263-4896-b39a-4fe578089e9e.webp",
      alt: "Contemporary custom home exterior design"
    },
    {
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?fm=webp&fit=crop&w=800&q=75",
      alt: "Beautiful modern house exterior"
    },
    {
      src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?fm=webp&fit=crop&w=800&q=75",
      alt: "Luxury custom built home exterior"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-purple-700 mb-4">
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
