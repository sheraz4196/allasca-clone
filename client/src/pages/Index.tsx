import { useEffect, useState, lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

// Critical above-the-fold imports (keep eager)
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Seo from '@/components/Seo';
import { Toaster } from '@/components/ui/sonner';

// Lazy-load everything below-the-fold
const SEOSection = lazy(() => import('@/components/SEOSection'));
const LazyYouTube = lazy(() => import('@/components/LazyYouTube'));
const Services = lazy(() => import('@/components/Services'));
const UniqueApproach = lazy(() => import('@/components/UniqueApproach'));
const ResidentialConstruction = lazy(() => import('@/components/ResidentialConstruction'));
const HomeRenovation = lazy(() => import('@/components/HomeRenovation'));
const BasementDevelopment = lazy(() => import('@/components/BasementDevelopment'));
const GardenSuites = lazy(() => import('@/components/GardenSuites'));
const Portfolio = lazy(() => import('@/components/Portfolio'));
const ArchitecturalDesign = lazy(() => import('@/components/ArchitecturalDesign'));
const Process = lazy(() => import('@/components/Process'));
const InspirationalBanner = lazy(() => import('@/components/InspirationalBanner'));
const Testimonials = lazy(() => import('@/components/Testimonials'));
const Contact = lazy(() => import('@/components/Contact'));
const CalendlyWidget = lazy(() => import('@/components/CalendlyWidget'));
const Footer = lazy(() => import('@/components/Footer'));

import { setupScrollAnimations } from '@/utils/animations';

const Index = () => {
  const navigate = useNavigate();
  const [expandTransform, setExpandTransform] = useState(false);
  const [expandedQuestions, setExpandedQuestions] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    // Defer animations until after paint
    const animationTimer = setTimeout(() => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => setupScrollAnimations(), { timeout: 2000 });
      } else {
        setupScrollAnimations();
      }
    }, 100);

    // Handle smooth scrolling for anchor links (delegated event listener)
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(target.getAttribute('href')!);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);

    const scrollToContactHandler = (e: Event) => {
      const target = e.target as HTMLElement;
      if ((target as HTMLButtonElement).type !== 'submit' && !target.closest('form')) {
        e.preventDefault();
        e.stopPropagation();
      }
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        setTimeout(() => {
          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    };

    // Set up event listeners for action buttons using event delegation
    const handleButtonClick = (e: Event) => {
      const button = (e.target as HTMLElement).closest('button');
      if (!button) return;

      const buttonText = button.textContent?.trim();
      const actionButtonTexts = [
        'Schedule a Consultation',
        'View Our Portfolio',
        'Request a Free Quote',
        'Explore Garden Suite Options',
        'Get Free Consultation',
      ];

      const isNavbarButton = button.closest('header') || button.closest('nav');
      const isFormSubmitButton = (button as HTMLButtonElement).type === 'submit' || button.closest('form');
      
      if (buttonText && actionButtonTexts.includes(buttonText) && !isNavbarButton && !isFormSubmitButton) {
        scrollToContactHandler(e);
      }
    };

    // Use event delegation instead of querySelectorAll + forEach
    document.addEventListener('click', handleButtonClick);

    // Cleanup
    return () => {
      clearTimeout(animationTimer);
      document.removeEventListener('click', handleAnchorClick);
      document.removeEventListener('click', handleButtonClick);
    };
  }, []); // Empty deps - only run once

  const toggleQuestion = (index: number) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50">
      <Seo 
        title="AllCasa - Custom Home Construction & Renovation Toronto | Full Home & Basement Renovation GTA"
        description="Toronto's trusted custom home builders specializing in full home renovation, basement renovation, and luxury custom house design and build. Serving Toronto, North York, Mississauga and GTA."
        canonical="https://allcasa.ca/"
        keywords="custom home construction Toronto, full home renovation Toronto, basement renovation GTA, luxury custom house builder, home builders Toronto, custom homes North York, house renovation Mississauga"
      />
      <Navbar />
      <main>
        <Hero />
        
        <Suspense fallback={
          <div className="py-8 bg-white">
            <div className="container mx-auto px-4">
              <div className="h-32 bg-gray-100 rounded animate-pulse"></div>
            </div>
          </div>
        }>
          {/* Move SEOSection after Hero but lazy-load it */}
          <SEOSection />
          
          {/* Defer YouTube embeds - they're heavy and not LCP */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-poppins font-bold text-casa-navy mb-4">
                  See Our Work in Action
                </h2>
                <p className="text-lg text-gray-600">
                  Watch a quick overview of our custom home construction and renovation services
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                <LazyYouTube videoId="_7vH6T9BgPo" title="AllCasa Custom Home Construction Video 1" />
                <LazyYouTube videoId="E1ki2QqNx-U" title="AllCasa Custom Home Construction Video 2" />
                <LazyYouTube videoId="wyP3P58oVns" title="AllCasa Custom Home Construction Video 3" />
                <LazyYouTube videoId="D6ygF0N1XDk" title="AllCasa Custom Home Construction Video 4" />
              </div>
            </div>
          </section>

          <Services />
          <UniqueApproach />

          <div id="residential-construction">
            <ResidentialConstruction />
          </div>
          <div id="home-renovation">
            <HomeRenovation />
          </div>
          <div id="basement-development">
            <BasementDevelopment />
          </div>
          <div id="garden-suites">
            <GardenSuites />
          </div>
          <Portfolio />
          <ArchitecturalDesign />
          <Process />

          {/* Our Projects Section */}
          <div className="bg-white py-20" id="our-projects">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="heading-gradient text-3xl md:text-4xl font-poppins font-bold mb-4">Our Projects</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  We've completed construction and renovation projects across the Greater Toronto Area.
                  Our work spans from downtown Toronto to the surrounding communities, bringing quality
                  craftsmanship to homes throughout the region.
                </p>
              </div>

              <div className="animate-on-scroll max-w-5xl mx-auto">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="/lovable-uploads/ca8a6ba5-89c2-4c04-bebd-e97f08c9f709.webp"
                    alt="Map showing AllCasa construction projects across Greater Toronto Area"
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={675}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="mt-8 text-center">
                  <p className="text-gray-600 text-lg">
                    From Forest Hill to The Beaches, from North York to Mississauga -
                    we bring exceptional construction and renovation services to your neighborhood.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-white py-16" id="services-info">
            <div className="container max-w-6xl mx-auto px-4">
              <div className="animate-on-scroll bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <button
                  onClick={() => setExpandTransform(!expandTransform)}
                  className="w-full flex items-center justify-between bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 hover:from-purple-100 hover:to-blue-100 transition-colors mb-6"
                >
                  <h2 className="text-3xl md:text-4xl font-poppins font-bold text-casa-navy text-left">
                    🏠 Transform Your Home with Expert Design & Construction
                  </h2>
                  <ChevronDown className={`h-8 w-8 text-casa-purple flex-shrink-0 transition-transform ${expandTransform ? 'rotate-180' : ''}`} />
                </button>
                
                {expandTransform && (
                <>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Looking for full home renovation contractors in Toronto? Our award-winning design-build team specializes in complete home renovations, custom house design, and luxury home construction. Whether you're remodeling your entire home, building a custom house, or doing major home additions, we manage everything—from architectural design and city permits to interior finishes and landscaping.
                </p>

                <div className="mb-8">
                  <h3 className="text-2xl font-poppins font-semibold mb-4 text-casa-navy">We offer:</h3>
                  <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      Full home renovation services in Toronto and GTA
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      Custom home design and construction
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      Complete house remodeling and upgrades
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      Basement finishing and second-story additions
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      Luxury kitchen and bathroom renovations
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      Interior design and 3D rendering
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      Project management, permits, and construction approvals
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Our experienced home renovation contractors and custom home builders ensure your project is completed on time, within budget, and with exceptional craftsmanship. Whether you need a modern home renovation, classic architectural design, or a full house makeover, we'll turn your vision into reality.
                </p>

                <div className="border-t border-gray-200 pt-8 mb-8">
                  <h3 className="text-2xl font-poppins font-semibold mb-4 text-casa-navy">Service Areas</h3>
                  <p className="text-gray-700 text-lg">
                    Toronto | North York | Etobicoke | Scarborough | Markham | Richmond Hill | Vaughan | Mississauga | Oakville
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6">
                  <h3 className="text-2xl font-poppins font-semibold mb-4 text-casa-navy">Why Choose Us?</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">★</span>
                      Licensed & Insured Renovation and Construction Company
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">★</span>
                      In-House Architects, Designers & Contractors
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">★</span>
                      Transparent Project Pricing
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">★</span>
                      Over 15 Years of Experience in Home Renovations & Custom Builds
                    </li>
                  </ul>
                </div>
                </>
                )}
              </div>
            </div>
          </div>

          <InspirationalBanner />
          
          {/* FAQ Section - Keep it but ensure it's lazy-loaded via Suspense */}
          <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
            <div className="container max-w-6xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-12 text-casa-navy text-center">
                🧠 Frequently Asked Questions (FAQ)
              </h2>
              
              <div className="space-y-4">
                {[
                  {
                    question: "1. How long does a full home renovation usually take?",
                    answer: "The duration depends on the project size and scope. A full home renovation typically takes 3 to 6 months, while smaller remodels like kitchens or bathrooms can take 6 to 10 weeks. We provide a clear timeline before starting and update you regularly throughout the process."
                  },
                  {
                    question: "2. How much does a full home renovation cost in Toronto?",
                    answer: "Costs vary widely based on materials, finishes, and square footage. On average, major home renovations in Toronto range from $150 to $350 per square foot. We provide a detailed, transparent quote after the initial design and consultation."
                  },
                  {
                    question: "3. Do I need a building permit for my renovation?",
                    answer: "Yes — if your project involves structural changes, wall removal, additions, or new plumbing/electrical systems, a permit is required. We handle all permit drawings and submissions directly with the City of Toronto to save you time."
                  },
                  {
                    question: "4. What's the difference between renovation and remodeling?",
                    answer: "A renovation updates existing finishes or layouts without major changes, while a remodeling project can include structural changes, extensions, or complete redesigns. We offer both depending on your goals."
                  },
                  {
                    question: "5. Can you help with design and construction together?",
                    answer: "Absolutely. We're a full-service design-build company, meaning we take care of both the creative design and the actual construction. This ensures faster timelines, fewer miscommunications, and a smoother process from start to finish."
                  },
                  {
                    question: "6. What if I already have drawings or a designer?",
                    answer: "No problem — we can work with your existing plans and help refine them to meet building code and zoning requirements. We also provide value-engineering suggestions to optimize design and cost."
                  },
                  {
                    question: "7. Do you offer warranty or post-construction support?",
                    answer: "Yes. All our projects include a comprehensive workmanship warranty. We also offer post-construction check-ins to ensure you're fully satisfied with every detail even after completion."
                  },
                  {
                    question: "8. Do you handle luxury or high-end home construction?",
                    answer: "Yes, our portfolio includes modern, luxury, and custom-built homes across the GTA. We collaborate closely with clients to select premium finishes, fixtures, and architectural details that elevate every project."
                  },
                  {
                    question: "9. Can I live in my home during renovation?",
                    answer: "It depends on the project scope. For smaller renovations, yes — but for major structural or full-home projects, we recommend temporary relocation for safety and efficiency. We help plan logistics to minimize disruption."
                  },
                  {
                    question: "10. How do I start my renovation project?",
                    answer: "Simply book a free consultation with our design-build experts. We'll review your goals, property, and budget, then prepare a proposal outlining design ideas, estimated cost, and next steps."
                  }
                ].map((faq, index) => (
                  <div key={index}>
                    <button
                      onClick={() => toggleQuestion(index)}
                      className="w-full flex items-center justify-between bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow text-left"
                    >
                      <h3 className="text-xl font-semibold text-casa-navy flex-1">
                        {faq.question}
                      </h3>
                      <ChevronDown className={`h-6 w-6 text-casa-purple flex-shrink-0 transition-transform ml-4 ${expandedQuestions[index] ? 'rotate-180' : ''}`} />
                    </button>
                    {expandedQuestions[index] && (
                      <p className="text-gray-700 leading-relaxed px-6 pb-4 bg-white rounded-b-xl">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Testimonials />
          <Contact />
          
          <section className="py-16 bg-gradient-to-br from-white to-purple-50">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-poppins font-bold text-casa-navy mb-4">
                    Ready to Start Your Project?
                  </h2>
                  <p className="text-lg text-gray-600">
                    Schedule a free consultation with our experts to discuss your renovation or construction needs.
                  </p>
                </div>
                <CalendlyWidget />
              </div>
            </div>
          </section>
        </Suspense>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
