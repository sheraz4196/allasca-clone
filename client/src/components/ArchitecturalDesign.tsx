
import { CheckCircle2 } from 'lucide-react';

const ArchitecturalDesign = () => {
  return (
    <section id="architectural-design" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 heading-gradient">
            Permit and Design Drawings
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive permit and design drawings services for each project, 
            ensuring your vision meets all building codes and permit requirements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="animate-on-scroll">
            <img 
              src="/lovable-uploads/f7a33d25-e846-4171-a685-9028d17cc8ce.png" 
              alt="City of Toronto permit with approved stamp on architectural drawings" 
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="animate-on-scroll">
            <img 
              src="/lovable-uploads/6d2f7975-eed7-4a54-9952-92b00cdfb77d.png" 
              alt="Rolled architectural blueprints showing detailed floor plans" 
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="animate-on-scroll">
            <img 
              src="/lovable-uploads/9de8db6e-a85a-48f9-86f3-336fead17f0f.png" 
              alt="Detailed house floor plan with room dimensions and layout" 
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-poppins font-bold mb-6 text-purple-700">Complete Design Services</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-1 mr-3" />
                <p className="text-gray-600">
                  Architectural Drawings for permits and construction
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-1 mr-3" />
                <p className="text-gray-600">
                  3D renderings and visualization services
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-1 mr-3" />
                <p className="text-gray-600">
                  Structural engineering and compliance documentation
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-1 mr-3" />
                <p className="text-gray-600">
                  Municipal permit application assistance
                </p>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-poppins font-bold mb-6 text-purple-700">Professional Standards</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-1 mr-3" />
                <p className="text-gray-600">
                  Expert consultants and designers on staff
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-1 mr-3" />
                <p className="text-gray-600">
                  Code-compliant designs for Toronto regulations
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-1 mr-3" />
                <p className="text-gray-600">
                  Energy-efficient and sustainable design practices
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-purple-600 mt-1 mr-3" />
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
