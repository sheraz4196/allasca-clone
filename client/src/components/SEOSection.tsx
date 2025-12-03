import { MapPin, Award, Wrench, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const SEOSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const calendlyContainerRef = useRef<HTMLDivElement>(null);
  const hasLoadedCalendly = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasLoadedCalendly.current) {
        hasLoadedCalendly.current = true;
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        script.onload = () => {
          if (window.Calendly?.initInlineWidgets) {
            window.Calendly.initInlineWidgets();
          }
        };
        document.body.appendChild(script);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (calendlyContainerRef.current) {
      observer.observe(calendlyContainerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-casa-purple/5 to-casa-blue/5">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div ref={calendlyContainerRef} id="consultation-booking" className="mb-12 bg-white rounded-xl p-8 shadow-lg" data-testid="calendly-embed">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/allcasa12allcasa/schedule-your-project-consultation"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 hover:from-purple-100 hover:to-blue-100 transition-colors mb-6"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-casa-navy text-left" data-testid="text-seo-heading">
              Toronto's Premier Custom House Construction and Design Build Specialists
            </h2>
            <ChevronDown className={`h-8 w-8 text-casa-purple flex-shrink-0 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
          
          {isExpanded && (
          <div className="text-lg text-gray-700 leading-relaxed space-y-4 mb-12">
            <p data-testid="text-seo-intro">
              AllCasa is Toronto's trusted leader in <strong>custom house construction and design and build in Toronto</strong>, 
              delivering exceptional craftsmanship and innovative solutions for homeowners throughout the Greater Toronto Area. 
              Our comprehensive approach combines architectural design, construction management, and finishing expertise under 
              one roof for a seamless building experience.
            </p>
            
            <p data-testid="text-seo-services">
              From ground-up custom homes to complete property transformations, we specialize in <strong>full home renovation</strong> 
              and <strong>full basement renovation</strong> services that maximize your investment and enhance your lifestyle. Whether 
              you're planning a complete home transformation or converting your basement into a luxurious living space, our expert team 
              handles everything from permit applications to final inspections, ensuring your project exceeds expectations while staying 
              on schedule and within budget.
            </p>
            
            <p data-testid="text-seo-luxury-builds">
              Looking for a <strong>new luxury custom house design and build</strong> experience? AllCasa delivers turnkey solutions 
              for discerning homeowners seeking to build their dream home from the ground up. Our design-build approach streamlines 
              the entire process, combining architectural innovation with construction excellence to create one-of-a-kind luxury homes 
              throughout Toronto, North York, Mississauga, and surrounding GTA communities.
            </p>
            
            <p data-testid="text-seo-renovation-expertise">
              Our <strong>full home renovation</strong> services transform dated properties into modern masterpieces, handling structural 
              changes, open-concept conversions, kitchen and bathroom upgrades, and complete interior refinishing. For homeowners looking 
              to maximize their property value, our <strong>full basement renovation</strong> expertise creates functional, beautiful spaces 
              including rec rooms, home theaters, guest suites, and rental units—all completed with meticulous attention to Toronto building 
              codes and waterproofing requirements.
            </p>
          </div>
          )}

          {isExpanded && (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100" data-testid="card-seo-construction">
              <div className="w-16 h-16 bg-casa-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-casa-purple" />
              </div>
              <h3 className="text-xl font-bold text-casa-navy mb-3">Custom House Construction</h3>
              <p className="text-gray-600">
                Complete design and build services for luxury custom homes throughout Toronto and the GTA
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100" data-testid="card-seo-renovation">
              <div className="w-16 h-16 bg-casa-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-casa-blue" />
              </div>
              <h3 className="text-xl font-bold text-casa-navy mb-3">Luxury Renovation Services</h3>
              <p className="text-gray-600">
                Full home and basement renovations that transform your space with premium finishes and expert craftsmanship
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100" data-testid="card-seo-location">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-casa-navy mb-3">Toronto Expertise</h3>
              <p className="text-gray-600">
                Local knowledge of Toronto building codes, permits, and neighborhood requirements for seamless project delivery
              </p>
            </div>
          </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SEOSection;