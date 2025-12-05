import { memo } from 'react';
import { Card } from '@/components/ui/card';
import ResponsiveImage from '@/components/ResponsiveImage';

const portfolioItems = [
  {
    category: "renovation",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    title: "Toronto Home Renovation",
    description: "Complete interior overhaul of a century home in Rosedale with custom details"
  },
  {
    category: "renovation",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    title: "Modern Garden Suites",
    description: "Contemporary garden suite design with modern finishes and outdoor integration"
  },
  {
    category: "renovation",
    image: "https://images.unsplash.com/photo-1505692794400-0ed0c5c08bc5",
    title: "Luxury Bathroom renovation",
    description: "Complete living space renovation with custom built-ins and modern finishes"
  },
  {
    category: "renovation",
    image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?fm=webp&fit=crop&w=800&q=75",
    title: "Luxury Bathroom Renovation",
    description: "Master bedroom renovation with walk-in closet and luxury finishes"
  },
  {
    category: "renovation",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?fm=webp&fit=crop&w=800&q=75",
    title: "Modern Living Room Design",
    description: "Contemporary living room with sleek furniture and ambient lighting"
  },
  {
    category: "renovation",
    image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?fm=webp&fit=crop&w=800&q=75",
    title: "Modern Hardwood Flooring",
    description: "Premium hardwood floor installation with contemporary patterns"
  },
  {
    category: "renovation",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?fm=webp&fit=crop&w=800&q=75",
    title: "Vintage Bathroom Design",
    description: "Luxury bathroom with modern fixtures and spa-like amenities"
  },
  {
    category: "construction",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?fm=webp&fit=crop&w=800&q=75",
    title: "Modern Toronto Build",
    description: "2,800 sq ft custom build in Forest Hill with premium finishes and smart home features"
  },
  {
    category: "construction",
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?fm=webp&fit=crop&w=800&q=75",
    title: "Contemporary Toronto Build",
    description: "Modern architectural design in The Beaches with eco-friendly features"
  },
  {
    category: "construction",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    title: "Architectural Custom Home",
    description: "Designer home with unique architectural features and premium materials"
  },
  {
    category: "construction",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?fm=webp&fit=crop&w=800&q=75",
    title: "Modern Family Home",
    description: "Contemporary family home with open concept design and modern amenities"
  },
  {
    category: "construction",
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
    title: "Modern Basement Suites",
    description: "Complete basement renovation with family room and home theater"
  },
  {
    category: "basement",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?fm=webp&fit=crop&w=800&q=75",
    title: "Basement Bar Installation",
    description: "Custom wet bar and entertainment space in finished basement"
  },
  {
    category: "basement",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?fm=webp&fit=crop&w=800&q=75",
    title: "Basement Home Office",
    description: "Professional basement office space with built-in storage and lighting"
  },
  {
    category: "basement",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?fm=webp&fit=crop&w=800&q=75",
    title: "Basement Modern Bathroom",
    description: "Complete basement apartment with kitchen, bedroom, and living area"
  },
  {
    category: "basement",
    image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?fm=webp&fit=crop&w=800&q=75",
    title: "Basement Living Room",
    description: "Elegant basement bathroom with premium tiles and modern fixtures"
  },
  {
    category: "landscaping",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?fm=webp&fit=crop&w=800&q=75",
    title: "Toronto Backyard Oasis",
    description: "Complete backyard renovation with pool and sustainable landscaping in North York"
  },
  {
    category: "landscaping",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?fm=webp&fit=crop&w=800&q=75",
    title: "Luxury Garden Design",
    description: "Premium garden installation with custom planters and irrigation systems"
  },
  {
    category: "construction",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    title: "Comfy Family Rooms",
    description: "Contemporary staircase with floating steps and modern railings"
  },
  {
    category: "construction",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    title: "Contemporary Living Room",
    description: "Modern living space with designer furniture and premium finishes"
  },
  {
    category: "basement",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?fm=webp&fit=crop&w=800&q=75",
    title: "Basement Modern Kitchen",
    description: "Sleek basement kitchen design with modern appliances and storage"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-casa-navy mb-4">Our Toronto Project Portfolio</h2>
          <p className="text-lg text-casa-gray max-w-3xl mx-auto">
            Browse our collection of successful Toronto home renovation projects, showcasing our craftsmanship and attention to detail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={`${item.title}-${index}`} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioCard = memo(({ item }: { item: (typeof portfolioItems)[number] }) => {
  return (
    <Card className="animate-on-scroll overflow-hidden group transition-all duration-300 hover:shadow-xl border-none w-full">
      <div className="relative overflow-hidden h-48 sm:h-56 lg:h-64">
        <ResponsiveImage
          src={`${item.image}?auto=format`}
          alt={item.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          responsiveWidths={[400, 640, 900, 1200]}
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-casa-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">{item.title}</h3>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">{item.description}</p>
          </div>
        </div>
      </div>
    </Card>
  );
});

export default Portfolio;
