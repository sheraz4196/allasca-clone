import { Building, Layers, Hammer, PaintBucket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const serviceItems = [
  {
    icon: <Building className="h-12 w-12 text-casa-purple" />,
    title: "Custom Home Construction",
  },
  {
    icon: <Hammer className="h-12 w-12 text-orange-500" />,
    title: "Home Renovations",
  },
  {
    icon: <Layers className="h-12 w-12 text-casa-blue" />,
    title: "Basement Development",
  },
  {
    icon: <PaintBucket className="h-12 w-12 text-green-500" />,
    title: "Landscaping & Outdoors",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-white to-purple-50"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-bold heading-gradient mb-4">
            Our Expert Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From initial design to final finishing touches, we offer
            comprehensive home services designed to bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((service, index) => (
            <Card
              key={index}
              className="animate-on-scroll border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-white hover:-translate-y-2"
            >
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="mb-4 p-4 bg-gradient-to-br from-white to-purple-50 rounded-full shadow-inner">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold font-sans mb-3 text-gray-800">
                  {service.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
