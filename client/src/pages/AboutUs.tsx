import { ArrowLeft, Award, Calendar, MapPin, Users, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { setupScrollAnimations } from '@/utils/animations';
import Seo from '@/components/Seo';

const AboutUs = () => {
  useEffect(() => {
    setupScrollAnimations();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Seo 
        title="About AllCasa - Toronto's Trusted Custom Home Builders & Renovation Experts"
        description="Learn about AllCasa, Toronto's premier custom home builders and renovation specialists. Expert construction services in Toronto, North York, Mississauga and GTA."
        canonical="https://allcasa.ca/about-us"
        keywords="custom home builders Toronto, renovation company Toronto, construction company GTA, home builders North York"
      />
      {/* Header */}
      <div className="bg-gradient-to-r from-casa-purple to-casa-navy text-white py-8">
        <div className="container">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4">About AllCasa</h1>
          <p className="text-xl text-purple-100 max-w-3xl">
            Leading custom home builders Toronto families trust for luxury custom home construction
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="container max-w-4xl mx-auto">
          
          {/* Introduction */}
          <section className="mb-16 animate-on-scroll">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-poppins font-bold text-casa-navy mb-6">Building Dreams Across Toronto</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At AllCasa, we've been transforming houses into homes throughout the Greater Toronto Area for years. 
                Our passion for exceptional craftsmanship and personalized service has made us one of Toronto's most 
                trusted names in custom home construction and renovation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From the bustling neighborhoods of downtown Toronto to the quiet suburbs of Mississauga, North York, 
                and beyond, we bring the same level of dedication and expertise to every project, no matter the size or scope.
              </p>
            </div>
          </section>

          {/* Toronto Custom Home Construction Services */}
          <section className="mb-16 animate-on-scroll">
            <div className="bg-gradient-to-br from-casa-blue/5 to-casa-purple/5 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-poppins font-bold text-casa-navy mb-6 text-center" data-testid="text-services-heading">Custom Home Construction Toronto - Our Complete Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                As premier home builders Toronto residents rely on, AllCasa delivers comprehensive custom home construction services 
                throughout the Greater Toronto Area. Our team of skilled home builders specializes in creating custom homes that 
                exceed expectations while maintaining the highest standards of craftsmanship.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md" data-testid="card-service-design">
                  <h3 className="text-lg font-bold text-casa-navy mb-3">Architectural Design & Planning</h3>
                  <p className="text-gray-600">Complete design services for luxury custom home builders Toronto projects</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md" data-testid="card-service-permits">
                  <h3 className="text-lg font-bold text-casa-navy mb-3">Permits & Approvals</h3>
                  <p className="text-gray-600">Navigate Toronto building codes and permit processes seamlessly</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md" data-testid="card-service-construction">
                  <h3 className="text-lg font-bold text-casa-navy mb-3">Full Construction Management</h3>
                  <p className="text-gray-600">End-to-end custom house builder services from foundation to finishing</p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Expertise */}
          <section className="mb-16 animate-on-scroll">
            <h2 className="text-3xl font-poppins font-bold text-casa-navy mb-8 text-center">Our Areas of Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-casa-purple/10 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="h-8 w-8 text-casa-purple" />
                </div>
                <h3 className="text-xl font-bold text-casa-navy mb-3">New Luxury Custom House Design and Build</h3>
                <p className="text-gray-600 leading-relaxed">
                  We specialize in <strong>new luxury custom house design and build</strong> projects throughout Toronto. 
                  Our comprehensive approach handles everything from architectural design and permit applications to final 
                  construction and finishing touches. Each luxury custom home is crafted to reflect our clients' unique vision, 
                  incorporating premium materials, innovative design elements, and superior craftsmanship to create truly 
                  exceptional living spaces.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-casa-blue/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-casa-blue" />
                </div>
                <h3 className="text-xl font-bold text-casa-navy mb-3">Full Home Renovation Services</h3>
                <p className="text-gray-600 leading-relaxed">
                  Transform your existing property with our comprehensive <strong>full home renovation</strong> services. 
                  From kitchen and bathroom remodels to complete whole-home makeovers and structural additions, we deliver 
                  stunning results that increase your home's value and functionality. Our expert team manages every detail 
                  of your full home renovation project in Toronto and the GTA.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-casa-navy mb-3">Full Basement Renovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Maximize your home's potential with our specialized <strong>full basement renovation</strong> services. 
                  We transform unfinished basements into beautiful, functional living spaces including rec rooms, home theaters, 
                  guest suites, and rental units. Our basement renovation experts handle waterproofing, walkout installations, 
                  custom staircases, and complete finishing to add valuable square footage to your Toronto property while meeting 
                  all building codes.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-casa-navy mb-3">Garden Suites & Outdoor Living</h3>
                <p className="text-gray-600 leading-relaxed">
                  Create additional living space with custom garden suites perfect for rental income, 
                  multi-generational living, or private guest retreats. We also design and build beautiful 
                  outdoor living spaces that seamlessly integrate with Toronto's urban landscape.
                </p>
              </div>
            </div>
          </section>

          {/* Toronto Design Build Approach */}
          <section className="mb-16 animate-on-scroll">
            <div className="bg-casa-navy text-white rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-poppins font-bold mb-6 text-center" data-testid="text-designbuild-heading">Toronto Design Build - Streamlined Custom Home Construction</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg text-purple-100 leading-relaxed mb-6">
                    Our Toronto design build approach combines architectural design and construction under one roof, 
                    making us the preferred choice among home builders Toronto homeowners choose for seamless project delivery.
                  </p>
                  <ul className="space-y-3 text-purple-100">
                    <li className="flex items-start" data-testid="list-item-coordination">
                      <span className="w-2 h-2 bg-casa-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Single point of contact throughout your custom home construction Toronto project</span>
                    </li>
                    <li className="flex items-start" data-testid="list-item-efficiency">
                      <span className="w-2 h-2 bg-casa-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Faster project completion with integrated design-build workflows</span>
                    </li>
                    <li className="flex items-start" data-testid="list-item-cost">
                      <span className="w-2 h-2 bg-casa-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Cost savings through optimized design and construction coordination</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-casa-gold">Why Choose Design-Build?</h3>
                  <p className="text-purple-100 leading-relaxed">
                    Traditional home builders custom homes projects involve separate design and construction teams. 
                    Our integrated approach eliminates communication gaps, reduces delays, and ensures your vision 
                    is perfectly executed from concept to completion.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose AllCasa as Custom House Builder */}
          <section className="mb-16 animate-on-scroll">
            <div className="bg-gradient-to-br from-casa-purple/5 to-casa-blue/5 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-poppins font-bold text-casa-navy mb-8 text-center" data-testid="text-whychoose-heading">Why Choose AllCasa as Your Custom House Builder in Toronto</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                Among luxury custom home builders Toronto offers, AllCasa stands out for our commitment to excellence, 
                transparent communication, and proven track record of successful custom home construction projects across the GTA.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-casa-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-10 w-10 text-casa-purple" />
                  </div>
                  <h3 className="text-xl font-bold text-casa-navy mb-3">Proven Track Record</h3>
                  <p className="text-gray-600">
                    Years of successful projects across the GTA, from Forest Hill to The Beaches, 
                    with satisfied clients who recommend us to their friends and family.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-casa-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-10 w-10 text-casa-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-casa-navy mb-3">Quality Craftsmanship</h3>
                  <p className="text-gray-600">
                    We bring only specialized skilled workers for each task, ensuring top-quality 
                    results whether it's kitchen installation, flooring, or glass railing work.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-10 w-10 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-casa-navy mb-3">Local Expertise</h3>
                  <p className="text-gray-600">
                    Deep understanding of Toronto's building codes, permit processes, and neighborhood 
                    character ensures smooth project execution and compliance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Process */}
          <section className="mb-16 animate-on-scroll">
            <h2 className="text-3xl font-poppins font-bold text-casa-navy mb-8 text-center">Our Commitment to Excellence</h2>
            <div className="space-y-6">
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-casa-purple rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-casa-navy mb-2">Transparent Communication</h3>
                  <p className="text-gray-600">
                    We believe in keeping you informed every step of the way. From initial consultation to project 
                    completion, you'll always know what's happening with your Toronto home construction or renovation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-casa-purple rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-casa-navy mb-2">Detailed Planning</h3>
                  <p className="text-gray-600">
                    Every project begins with thorough planning and design. We work closely with you to understand 
                    your vision, budget, and timeline, ensuring the final result exceeds your expectations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-casa-purple rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-casa-navy mb-2">Efficient Project Management</h3>
                  <p className="text-gray-600">
                    We avoid delays by running permit processes in parallel with construction planning, keeping your 
                    project on schedule while maintaining the highest quality standards.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center animate-on-scroll">
            <div className="bg-casa-navy text-white rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-poppins font-bold mb-4">Ready to Start Your Toronto Home Project?</h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Let's discuss your vision and how AllCasa can bring it to life with our expertise in 
                custom construction and renovation throughout the Greater Toronto Area.
              </p>
              <Link to="/#contact">
                <Button 
                  size="lg" 
                  className="bg-casa-gold hover:bg-casa-gold/80 text-casa-navy font-bold text-lg px-8 py-4"
                >
                  Get Your Free Consultation
                </Button>
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;