import { memo } from "react";
import { Card } from "@/components/ui/card";

const portfolioItems = [
  {
    category: "renovation",
    image: "/lovable-uploads/house_19.webp",
    title: "Toronto Home Renovation",
    description:
      "Complete interior overhaul of a century home in Rosedale with custom details",
  },
  {
    category: "renovation",
    image: "/lovable-uploads/house_20.webp",
    title: "Modern Garden Suites",
    description:
      "Contemporary garden suite design with modern finishes and outdoor integration",
  },
  {
    category: "renovation",
    image: "/lovable-uploads/house_21.webp",
    title: "Luxury Bathroom renovation",
    description:
      "Complete living space renovation with custom built-ins and modern finishes",
  },
  {
    category: "renovation",
    image: "/lovable-uploads/house_22.webp",
    title: "Luxury Bathroom Renovation",
    description:
      "Master bedroom renovation with walk-in closet and luxury finishes",
  },
  {
    category: "renovation",
    image: "/lovable-uploads/house_23.webp",
    title: "Modern Living Room Design",
    description:
      "Contemporary living room with sleek furniture and ambient lighting",
  },
  {
    category: "renovation",
    image: "/lovable-uploads/house_24.webp",
    title: "Modern Hardwood Flooring",
    description:
      "Premium hardwood floor installation with contemporary patterns",
  },
  {
    category: "renovation",
    image: "/lovable-uploads/house_25.webp",
    title: "Vintage Bathroom Design",
    description: "Luxury bathroom with modern fixtures and spa-like amenities",
  },
  {
    category: "construction",
    image: "/lovable-uploads/house_26.webp",
    title: "Modern Toronto Build",
    description:
      "2,800 sq ft custom build in Forest Hill with premium finishes and smart home features",
  },
  {
    category: "construction",
    image: "/lovable-uploads/house_27.webp",
    title: "Contemporary Toronto Build",
    description:
      "Modern architectural design in The Beaches with eco-friendly features",
  },
  {
    category: "construction",
    image: "/lovable-uploads/house_28.webp",
    title: "Architectural Custom Home",
    description:
      "Designer home with unique architectural features and premium materials",
  },
  {
    category: "construction",
    image: "/lovable-uploads/house_29.webp",
    title: "Modern Family Home",
    description:
      "Contemporary family home with open concept design and modern amenities",
  },
  {
    category: "construction",
    image: "/lovable-uploads/house_30.webp",
    title: "Modern Basement Suites",
    description:
      "Complete basement renovation with family room and home theater",
  },
  {
    category: "basement",
    image: "/lovable-uploads/house_31.webp",
    title: "Basement Bar Installation",
    description: "Custom wet bar and entertainment space in finished basement",
  },
  {
    category: "basement",
    image: "/lovable-uploads/house_32.webp",
    title: "Basement Home Office",
    description:
      "Professional basement office space with built-in storage and lighting",
  },
  {
    category: "basement",
    image: "/lovable-uploads/house_34.webp",
    title: "Basement Modern Bathroom",
    description:
      "Complete basement apartment with kitchen, bedroom, and living area",
  },
  {
    category: "basement",
    image: "/lovable-uploads/house_35.webp",
    title: "Basement Living Room",
    description:
      "Elegant basement bathroom with premium tiles and modern fixtures",
  },
  {
    category: "landscaping",
    image: "/lovable-uploads/house_36.webp",
    title: "Toronto Backyard Oasis",
    description:
      "Complete backyard renovation with pool and sustainable landscaping in North York",
  },
  {
    category: "landscaping",
    image: "/lovable-uploads/house_37.webp",
    title: "Luxury Garden Design",
    description:
      "Premium garden installation with custom planters and irrigation systems",
  },
  {
    category: "construction",
    image: "/lovable-uploads/house_38.webp",
    title: "Comfy Family Rooms",
    description:
      "Contemporary staircase with floating steps and modern railings",
  },
  {
    category: "construction",
    image: "/lovable-uploads/house_39.webp",
    title: "Contemporary Living Room",
    description:
      "Modern living space with designer furniture and premium finishes",
  },
  {
    category: "basement",
    image: "/lovable-uploads/house_40.webp",
    title: "Basement Modern Kitchen",
    description:
      "Sleek basement kitchen design with modern appliances and storage",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-casa-navy mb-4">
            Our Toronto Project Portfolio
          </h2>
          <p className="text-lg text-casa-gray max-w-3xl mx-auto">
            Browse our collection of successful Toronto home renovation
            projects, showcasing our craftsmanship and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={`${item.title}-${index}`}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioCard = memo(({ item, index }: { item: any; index: number }) => {
  return (
    <Card className="animate-on-scroll overflow-hidden group transition-all duration-300 hover:shadow-xl border-none w-full">
      <div className="relative overflow-hidden h-48 sm:h-56 lg:h-64">
        <img
          src={item.image}
          alt={item.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-casa-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">
              {item.title}
            </h3>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
});

export default Portfolio;
