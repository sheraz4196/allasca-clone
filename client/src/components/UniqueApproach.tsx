
import { Shield, BadgeDollarSign, Timer } from "lucide-react";
import { useEffect, useRef } from "react";
import workConfidenceImg from '@assets/generated_images/Construction_workers_with_confidence_017a5439.png';
import transparentPricingImg from '@assets/generated_images/Transparent_pricing_documentation_d31953e1.png';
import projectTimelineImg from '@assets/generated_images/Project_timeline_and_permits_8ebd98d0.png';

const UniqueApproach = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          // Add staggered animation delay
          const delay = 0.2 * index;
          (entry.target as HTMLElement).style.animationDelay = `${delay}s`;
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    });
    
    // Ensure refs are initialized before using them
    if (cardRefs.current && Array.isArray(cardRefs.current)) {
      cardRefs.current.forEach((card) => {
        if (card) observer.observe(card);
      });
    }
    
    return () => {
      if (cardRefs.current && Array.isArray(cardRefs.current)) {
        cardRefs.current.forEach((card) => {
          if (card) observer.unobserve(card);
        });
      }
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            How We're <span className="text-casa-purple underline decoration-2 underline-offset-4">Different</span>
          </h2>
          <p className="text-base max-w-2xl mx-auto font-poppins text-gray-600">
            Specialized expertise, transparent pricing, efficient project management.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div 
            ref={(el) => (cardRefs.current[0] = el)}
            className="animate-on-scroll bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-xl hover:transform hover:-translate-y-1 transition-all duration-300"
          >
            <img src={workConfidenceImg} alt="Skilled construction workers showing work confidence" className="w-full h-32 object-cover rounded-lg mb-4" />
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-casa-purple/20 flex items-center justify-center">
                <Shield className="h-8 w-8 text-casa-purple" />
              </div>
            </div>
            <h3 className="text-2xl font-poppins font-bold text-center mb-3 text-gray-900">Work Confidence</h3>
            <p className="text-center font-poppins text-sm text-gray-600">
              Specialized skilled workers for every task - kitchen, flooring, glass railing.
            </p>
          </div>

          <div 
            ref={(el) => (cardRefs.current[1] = el)}
            className="animate-on-scroll bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-xl transform scale-110 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-casa-purple text-white px-4 py-1 rounded-full font-bold text-sm font-poppins">
              Our Promise
            </div>
            <img src={transparentPricingImg} alt="Transparent pricing documentation and blueprints" className="w-full h-32 object-cover rounded-lg mb-4" />
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-casa-purple/20 flex items-center justify-center">
                <BadgeDollarSign className="h-8 w-8 text-casa-purple" />
              </div>
            </div>
            <h3 className="text-2xl font-poppins font-bold text-center mb-3 text-gray-900">Transparent Pricing</h3>
            <p className="text-center font-medium font-poppins text-sm text-gray-600">
              Clear, itemized quotes with no hidden fees.
            </p>
          </div>

          <div 
            ref={(el) => (cardRefs.current[2] = el)}
            className="animate-on-scroll bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-xl hover:transform hover:-translate-y-1 transition-all duration-300"
          >
            <img src={projectTimelineImg} alt="Project timeline planning and permit documents" className="w-full h-32 object-cover rounded-lg mb-4" />
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-casa-purple/20 flex items-center justify-center">
                <Timer className="h-8 w-8 text-casa-purple" />
              </div>
            </div>
            <h3 className="text-2xl font-poppins font-bold text-center mb-3 text-gray-900">Project Timeline & Permits</h3>
            <p className="text-center font-poppins text-sm text-gray-600">
              Parallel permit processing to avoid delays.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="inline-block bg-casa-purple/10 text-casa-purple px-6 py-3 rounded-lg font-bold text-base border-l-4 border-casa-purple animate-on-scroll font-poppins">
            No hidden costs, no surprises, smooth experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UniqueApproach;
