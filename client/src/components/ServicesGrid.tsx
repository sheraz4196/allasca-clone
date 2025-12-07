import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { memo, useCallback } from "react";

const servicesItems = [
  {
    image: "/lovable-uploads/195c8be2-23c8-480a-bc56-7bcf3cc1297a.png",
    title: "General Contracting",
  },
  {
    image: "/lovable-uploads/572dac60-5e9e-4e76-829f-8d4eb9b89e41.png",
    title: "Landscaping",
  },
  {
    image: "/lovable-uploads/64620916-fa74-4cb0-b347-cad960189577.png",
    title: "Excavation",
  },
  {
    image: "/lovable-uploads/319a357d-0999-4ee7-829a-b7c0404cd2e0.png",
    title: "Demolition",
  },
  {
    image: "/lovable-uploads/d0b38b3e-e6af-4fdd-af3d-3794162eea47.png",
    title: "Concrete work",
  },
  {
    image: "/lovable-uploads/11070096-71d1-4d92-8b55-9398a23c3316.png",
    title: "Waterproofing",
  },
  {
    image: "/lovable-uploads/9e0f2f5a-ecee-48bb-a220-24385e66860f.png",
    title: "Interlocking",
  },
  {
    image: "/lovable-uploads/285ad315-9edf-48a6-a0f1-0083c7b3d03d.png",
    title: "Asphalt",
  },
  {
    image: "/lovable-uploads/185b9ee1-c8f1-42d2-bf33-32014fe457d6.png",
    title: "Swimming Pool",
  },
  {
    image: "/lovable-uploads/51636d3a-03bf-489c-96d7-63bc99b52d7b.png",
    title: "Deck",
  },
  {
    image: "/lovable-uploads/8c1aabde-c7d2-4a9d-8de5-6d3a3cd313d1.png",
    title: "Fencing",
  },
  {
    image: "/lovable-uploads/a68bc4a3-1d99-4385-8116-62099088326c.png",
    title: "Gazebo",
  },
  {
    image: "/lovable-uploads/16cada62-079b-4445-bdff-97a94f45d2fc.png",
    title: "Shed",
  },
  {
    image: "/lovable-uploads/59a040af-9ac1-4346-96a8-866c3b30d6c7.png",
    title: "Garage",
  },
  {
    image: "/lovable-uploads/cbc609af-c882-4d71-98f9-d2b0667d7b81.png",
    title: "Carport",
  },
  {
    image: "/lovable-uploads/a1211a4f-ed0f-41ed-ae33-c1151bab9bea.png",
    title: "Doors & Windows",
  },
  {
    image: "/lovable-uploads/8a0cc9a0-9b7e-488e-9b8c-c33e1954aeb5.png",
    title: "Framing",
  },
  {
    image: "/lovable-uploads/84dd3d8e-2771-4167-bde0-a8abaa8831e3.png",
    title: "Masonry",
  },
  {
    image: "/lovable-uploads/abac1e41-3b2d-4645-82f9-f714ec6b5a3b.png",
    title: "Stucco",
  },
  {
    image: "/lovable-uploads/d7904839-6ac3-4473-8584-a6d0febb0694.png",
    title: "Siding",
  },
  {
    image: "/lovable-uploads/24021508-d6f9-4254-94d6-e083aba80f2f.png",
    title: "Roofing",
  },
  {
    image: "/lovable-uploads/d17bc927-438c-4064-85d1-249e84f5bf3d.png",
    title: "Drywall",
  },
  {
    image: "/lovable-uploads/081eda5c-fe4e-4e44-97a5-d36c96c68538.png",
    title: "Flooring",
  },
  {
    image: "/lovable-uploads/0221499e-050d-4802-93db-122b6829a606.png",
    title: "Painting",
  },
  {
    image: "/lovable-uploads/40d69d59-b21c-4a67-9414-ed17e6ba7fc8.png",
    title: "Kitchen",
  },
  {
    image: "/lovable-uploads/23ddb037-0bd1-4af3-b8f7-05d63c27acab.png",
    title: "Bathroom",
  },
  {
    image: "/lovable-uploads/35d19dfe-eabe-4da2-8181-68b48f11b467.png",
    title: "HVAC",
  },
  {
    image: "/lovable-uploads/e2a0f1dd-4aee-4d85-a98f-cf656a268b0f.png",
    title: "Electrical",
  },
  {
    image: "/lovable-uploads/162ad96f-def7-455c-b2ba-586efcfb8e31.png",
    title: "Plumbing",
  },
  {
    image: "/lovable-uploads/a24430b1-0637-4eb9-b2c3-7b3b6d3cc8c9.png",
    title: "Underpinning",
  },
  {
    image: "/lovable-uploads/fc1b8d57-f0e8-4cda-a16a-67fa66905ba0.png",
    title: "Lawn & Grass-cutting",
  },
  {
    image: "/lovable-uploads/a2f5d5e9-9c3b-4612-9587-f77297e97f89.png",
    title: "Insulation",
  },
  {
    image: "/lovable-uploads/11dcc8df-e39a-4f7c-9a7f-93f1c66b7e7e.png",
    title: "Carpeting",
  },
  {
    image: "/lovable-uploads/249a69bb-2706-477a-b5e0-384ceb028edd.png",
    title: "Steel",
  },
  {
    image: "/lovable-uploads/96c1aa44-ba1e-48c7-9fdd-185c16603b0a.png",
    title: "Cabinetry & Closets",
  },
  {
    image: "/lovable-uploads/f5af6702-1916-41f0-a6b8-713cfd1ec6bf.png",
    title: "Interior Design",
  },
  {
    image: "/lovable-uploads/6b0e09f4-b5d6-4d20-81f8-4f4a6ece0166.png",
    title: "Staircase",
  },
  {
    image: "/lovable-uploads/fbfc669a-c808-4ed5-8885-7f59bae13170.png",
    title: "Railings",
  },
  {
    image: "/lovable-uploads/fb9e64c6-f2ba-4bf0-ac7e-403cbbe1a68a.png",
    title: "Glass & Mirror",
  },
  {
    image: "/lovable-uploads/3deacb87-7467-402c-8234-63aa3fd1c15e.png",
    title: "Tree Services",
  },
];

const ServicesGrid = () => {
  const scrollToContact = useCallback(() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  return (
    <section
      id="our-services"
      className="py-20 bg-gradient-to-br from-purple-50 to-white"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-casa-navy mb-4">
            We Offer
          </h2>
          <p className="text-lg text-casa-gray max-w-3xl mx-auto">
            Comprehensive construction and renovation services across the
            Greater Toronto Area, delivering quality craftsmanship in every
            project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {servicesItems.map((item, index) => (
            <ServiceCard
              key={`${item.title}-${index}`}
              item={item}
              index={index}
              onGetQuote={scrollToContact}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = memo(
  ({
    item,
    index,
    onGetQuote,
  }: {
    item: any;
    index: number;
    onGetQuote: () => void;
  }) => {
    return (
      <Card className="animate-on-scroll overflow-hidden group transition-all duration-300 hover:shadow-xl border-none w-full h-full flex flex-col">
        <div className="relative overflow-hidden h-48 sm:h-56 lg:h-64">
          <img
            src={item.image}
            alt={item.title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-casa-navy/60 to-transparent flex items-end">
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                {item.title}
              </h3>
            </div>
          </div>
        </div>
        <div className="p-4 sm:p-6 bg-white flex flex-col flex-grow">
          <Button
            onClick={onGetQuote}
            className="w-full bg-gradient-to-r from-casa-navy to-casa-purple hover:from-casa-purple hover:to-casa-navy text-white mt-auto"
          >
            Get Free Consultation
          </Button>
        </div>
      </Card>
    );
  }
);

export default ServicesGrid;
