import { CheckCircle2 } from "lucide-react";

const ArchitecturalDesign = () => {
  return (
    <section id="architectural-design" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4 heading-gradient">
            Permit and Design Drawings
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive permit and design drawings services for
            each project, ensuring your vision meets all building codes and
            permit requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="animate-on-scroll">
            <img
              src="/lovable-uploads/design_1.webp"
              alt="City of Toronto permit with approved stamp on architectural drawings"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              loading="lazy"
              decoding="async"
              width="400"
              height="256"
            />
          </div>
          <div className="animate-on-scroll">
            <img
              src="/lovable-uploads/design_2.webp"
              alt="Rolled architectural blueprints showing detailed floor plans"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              loading="lazy"
              decoding="async"
              width="400"
              height="256"
            />
          </div>
          <div className="animate-on-scroll">
            <img
              src="/lovable-uploads/design_3.webp"
              alt="Detailed house floor plan with room dimensions and layout"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              loading="lazy"
              decoding="async"
              width="400"
              height="256"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-sans font-bold mb-6 text-purple-700">
              Complete Design Services
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-600">
                  Architectural Drawings for permits and construction
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-600">
                  3D renderings and visualization services
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-600">
                  Structural engineering and compliance documentation
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-600">
                  Municipal permit application assistance
                </p>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll">
            <h3 className="text-2xl font-sans font-bold mb-6 text-purple-700">
              Professional Standards
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-600">
                  Expert consultants and designers on staff
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-600">
                  Code-compliant designs for Toronto regulations
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-600">
                  Energy-efficient and sustainable design practices
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-600">
                  Collaborative design process with client input
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitecturalDesign;
