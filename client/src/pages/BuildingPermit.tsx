import { useState, Suspense, lazy } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const Testimonials = lazy(() => import("@/components/Testimonials"));
const Contact = lazy(() => import("@/components/Contact"));
const CalendlyWidget = lazy(() => import("@/components/CalendlyWidget"));
import blueprint1 from "@assets/stock_images/architectural_bluepr_69f8733f.jpg";
import blueprint2 from "@assets/stock_images/architectural_bluepr_378aa24e.jpg";
import blueprint3 from "@assets/stock_images/architectural_bluepr_743ecedb.jpg";
import permitApproved1 from "@assets/stock_images/building_permit_appr_51daa572.jpg";
import newHouse from "@assets/stock_images/new_modern_house_ext_1b8e0a77.jpg";
import permitBanner from "@assets/Gemini_Generated_Image_tab5zrtab5zrtab5_1764179602399.png";
import basementLegalImg from "@assets/Gemini_Generated_Image_5b21c25b21c25b21_1764188421072.png";
import allCasaLogo from "@assets/Logo (1)_1764188591729.jpg";

const BuildingPermit = () => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    residential: false,
    commercial: false,
    laneway: false,
    deck: false,
    retaining: false,
    basement: false,
    drafting: false,
    demolition: false,
    citySpecific: false,
    designBuild: false,
    basementPoints: false
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const scrollToFirstConsultation = () => {
    const consultationSection = document.getElementById('permit-calendly-top');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToLastConsultation = () => {
    const consultationSection = document.getElementById('permit-calendly');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://allcasa.ca/#organization',
        'name': 'AllCasa',
        'description': 'Expert building permit services and design-build construction in Toronto and GTA',
        'url': 'https://allcasa.ca',
        'telephone': '+1-647-961-4070',
        'email': 'info@allcasa.ca',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '7299 Yonge St',
          'addressLocality': 'Thornhill',
          'addressRegion': 'ON',
          'postalCode': 'L3T 0C5',
          'addressCountry': 'CA'
        },
        'areaServed': [
          {
            '@type': 'City',
            'name': 'Toronto'
          },
          {
            '@type': 'City',
            'name': 'North York'
          },
          {
            '@type': 'City',
            'name': 'Vaughan'
          },
          {
            '@type': 'City',
            'name': 'Mississauga'
          },
          {
            '@type': 'City',
            'name': 'Brampton'
          }
        ],
        'priceRange': '$$',
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.9',
          'reviewCount': '1000'
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://allcasa.ca/building-permit#service',
        'name': 'Building Permit Services in Toronto',
        'description': 'Professional building permit application, drawings, and City of Toronto approvals for renovations, basements, and custom homes',
        'provider': {
          '@id': 'https://allcasa.ca/#organization'
        },
        'areaServed': 'Toronto, GTA',
        'serviceType': 'Building Permit Services',
        'offers': {
          '@type': 'Offer',
          'priceCurrency': 'CAD',
          'price': '500',
          'priceRange': '$500-$5000'
        }
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What is a Building Permit and why do I need one?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'A building permit is an official approval from the City that ensures your construction or renovation complies with zoning by-laws and the Ontario Building Code. It\'s required for most structural, plumbing, or layout changes — including basement finishes, additions, and new builds.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How long does it take to get a building permit in Toronto?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Typical permits take 2 to 6 weeks depending on project complexity. Minor renovations may be approved faster. We handle all City coordination to minimize delays and ensure compliance on the first submission.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What happens if I build without a permit?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Building without a permit can lead to stop-work orders, fines, and potential issues when selling or insuring your property. It\'s always best to obtain permits to ensure safety and protect your investment.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How much does a building permit cost?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'City fees vary depending on project size and scope — usually $250 to $3,000 for residential projects. Our team provides an upfront estimate during consultation and manages all payments directly with the City.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can you help if my permit application was rejected?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. We specialize in fixing rejected or delayed applications. Our experts review City comments, make necessary drawing revisions, and resubmit on your behalf to get fast approval.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Do I need a permit for interior renovations?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'You typically need a permit if your renovation involves structural changes, removing or adding walls, new plumbing, or basement conversions. Cosmetic changes (painting, flooring, cabinets) usually don\'t require one.'
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Seo 
        title="Building Permit Services Toronto | Fast Permit Approvals - AllCasa"
        description="Expert building permit services in Toronto and GTA. We handle all permit drawings, applications, and City approvals for renovations, basements, and custom homes. Fast, professional, hassle-free."
        canonical="https://allcasa.ca/building-permit"
        keywords="building permit Toronto, permit services GTA, building permit application, renovation permit, basement permit, construction permit, Toronto building permits, permit drawings, City of Toronto permits"
        schema={schemaMarkup}
      />
      <Navbar />
      
      <main className="pt-20 md:pt-28">
        {/* Hero Section - Optimized for Mobile and Google Ads */}
        <section className="bg-gradient-to-br from-purple-50 to-white py-8 md:py-16">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-6 md:mb-8">
              {/* Semantic H1 for SEO */}
              <h1 className="font-poppins font-bold text-casa-navy mb-4 md:mb-6">
                <div className="text-3xl md:text-5xl mb-2">
                  Building Permit Services in Toronto
                </div>
                <div className="text-xl md:text-2xl text-casa-purple">
                  Fast, Professional & Hassle-Free
                </div>
              </h1>
              
              {/* Trust Signal: Phone Number - Above the fold */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8 text-sm md:text-base">
                <span className="font-semibold text-casa-navy">Call now:</span>
                <a href="tel:+16479614070" className="text-casa-purple hover:text-casa-navy font-bold text-lg md:text-xl transition-colors" data-testid="link-hero-phone">
                  +1 (647) 961-4070
                </a>
                <span className="hidden sm:inline text-gray-400">•</span>
                <span className="text-gray-600">Available Monday-Friday, 9AM-5PM</span>
              </div>
              
              <div className="my-6 md:my-8 rounded-xl overflow-hidden shadow-lg max-w-2xl mx-auto relative" style={{ aspectRatio: '16/9' }}>
                <img 
                  src={permitBanner}
                  alt="Building permit services desk with architectural plans, blueprints, and AllCasa Building Permits branding"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                  width={1200}
                  height={675}
                />
                {/* Rating Floating Box */}
                <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 z-20 bg-white rounded-lg md:rounded-xl p-2 md:p-4 shadow-lg md:shadow-xl flex items-center gap-1.5 md:gap-3 text-xs md:text-base">
                  <span className="text-casa-navy text-xl md:text-3xl font-bold font-poppins">4.9</span>
                  <div className="flex flex-col">
                    <div className="flex" aria-label="5 star rating">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.377 2.455a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.54 1.118l-3.377-2.455a1 1 0 00-1.176 0l-3.377 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.967a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.286-3.967z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-600 font-poppins">1,000+ reviews</span>
                  </div>
                </div>
              </div>

              <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-4 md:mb-6">
                Getting a building permit in Toronto can be confusing, time-consuming, and full of unexpected delays. Our expert permit specialists, architects, and engineers handle the entire process from start to finish — so you can start construction confidently and avoid costly rejections or fines.
              </p>
              <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6 md:mb-8">
                Whether you're renovating your home, finishing a basement, or building a new custom house, we take care of all drawings, zoning checks, applications, and City approvals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button
                size="lg"
                className="h-12 md:h-14 bg-gradient-to-r from-casa-navy to-casa-purple hover:from-casa-purple hover:to-casa-navy text-white px-6 md:px-8 py-3 md:py-4 font-semibold font-poppins text-base md:text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-full group"
                onClick={scrollToFirstConsultation}
                data-testid="button-permit-consultation"
              >
                Get Free Consultation
                <ChevronRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </section>

        {/* Calendly Booking Section - Above Services */}
        <section id="permit-calendly-top" className="py-16 bg-gradient-to-br from-white to-purple-50" style={{ contentVisibility: 'auto', containIntrinsicSize: '700px' }}>
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-poppins font-bold text-casa-navy mb-4">
                  Schedule Your Permit Consultation
                </h2>
                <p className="text-lg text-gray-600">
                  Book a free consultation with our permit specialists to discuss your project requirements.
                </p>
              </div>
              <Suspense fallback={<div className="min-h-[600px]" />}> <CalendlyWidget /></Suspense>
            </div>
          </div>
        </section>

        {/* Building Permit Video Section */}
            <section className="py-16 bg-white" style={{ contentVisibility: 'auto', containIntrinsicSize: '600px' }}>
          <div className="container max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-casa-navy mb-4">
                See How We Handle Your Building Permit
              </h2>
              <p className="text-lg text-gray-600">
                Watch a quick overview of our building permit process
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg max-w-2xl mx-auto bg-black" style={{ aspectRatio: '9/16' }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/D6ygF0N1XDk?autoplay=0"
                title="Building Permit Services Overview"
                frameBorder="0"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-white" style={{ contentVisibility: 'auto', containIntrinsicSize: '1200px' }}>
          <div className="container max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-casa-navy">
                ✅ Our Building Permit Services Include:
              </h2>
              
              <ul className="grid md:grid-cols-2 gap-4 text-gray-700 text-lg mb-8">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 text-xl">•</span>
                  Full permit application preparation and submission
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 text-xl">•</span>
                  Architectural drawings & floor plans
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 text-xl">•</span>
                  Structural, mechanical & HVAC drawings
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 text-xl">•</span>
                  Zoning and Committee of Adjustment consultations
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 text-xl">•</span>
                  Change of use permits and additions
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 text-xl">•</span>
                  Legal basement apartment permits (second suites)
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 text-xl">•</span>
                  Deck, porch, garage, or laneway suite permits
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 text-xl">•</span>
                  Building Code compliance review
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 text-xl">•</span>
                  Expedited revisions and resubmissions
                </li>
              </ul>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We work directly with Toronto Building Division and other municipalities across the GTA to make the approval process smooth, fast, and stress-free.
              </p>

              {/* Architectural Drawings Gallery */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="rounded-lg overflow-hidden border-2 border-purple-100" style={{ aspectRatio: '1/1' }}>
                  <img 
                    src={blueprint1} 
                    alt="Professional architectural drawings for building permit" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="rounded-lg overflow-hidden border-2 border-purple-100" style={{ aspectRatio: '1/1' }}>
                  <img 
                    src={blueprint2} 
                    alt="Detailed floor plans for permit application" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="rounded-lg overflow-hidden border-2 border-purple-100" style={{ aspectRatio: '1/1' }}>
                  <img 
                    src={blueprint3} 
                    alt="Construction blueprints for city approval" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Permit Services Collapsible Section */}
               <section id="permit-services-section" className="py-16 bg-gradient-to-br from-white to-purple-50" style={{ contentVisibility: 'auto', containIntrinsicSize: '1200px' }}>
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-casa-navy mb-8 text-center">
              Comprehensive Permit Services
            </h2>
            
            <div className="space-y-4">
              {/* Residential Building Permits */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('residential')}
                  className="w-full flex items-center justify-between p-6 hover:bg-purple-50 transition-colors"
                >
                  <h3 className="text-xl font-bold text-casa-navy">🏠 Residential Building Permits</h3>
                  <ChevronDownIcon className={`h-6 w-6 text-casa-purple transition-transform ${expandedSections.residential ? 'rotate-180' : ''}`} />
                </button>
                {expandedSections.residential && (
                  <div className="px-6 pb-6 border-t border-gray-200 text-gray-700">
                    <p className="mb-4">If you're planning home construction, an addition, or a renovation, AllCasa simplifies the entire building permit process. We prepare building drawings, housing drawings, and permit drawings for all types of residential buildings — from new homes to basement apartments, secondary suites, and legal basement permits in Ontario.</p>
                    <p>We also handle deck permits, porch enclosures, sunroom additions, and sunroom on deck designs — ensuring every project meets city regulations. Need to remove a load-bearing wall or apply for a structural wall removal permit? Our engineers prepare support wall removal and bearing wall removal drawings for safe approvals.</p>
                  </div>
                )}
              </div>

              {/* Commercial & Industrial Permits */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('commercial')}
                  className="w-full flex items-center justify-between p-6 hover:bg-purple-50 transition-colors"
                >
                  <h3 className="text-xl font-bold text-casa-navy">🧱 Commercial & Industrial Permits</h3>
                  <ChevronDownIcon className={`h-6 w-6 text-casa-purple transition-transform ${expandedSections.commercial ? 'rotate-180' : ''}`} />
                </button>
                {expandedSections.commercial && (
                  <div className="px-6 pb-6 border-t border-gray-200 text-gray-700">
                    <p className="mb-4">For developers and builders, AllCasa offers complete commercial building permit and industrial construction permit services. Our team manages construction permits Toronto, commercial construction, build commercial, and industrial building approvals — including occupancy permits, demolition permits, and builders permits.</p>
                    <p>From design-build projects to standard building and construction & building services, we ensure every plan meets city inspection requirements.</p>
                  </div>
                )}
              </div>

              {/* Laneway & Garden Suites */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('laneway')}
                  className="w-full flex items-center justify-between p-6 hover:bg-purple-50 transition-colors"
                >
                  <h3 className="text-xl font-bold text-casa-navy">🏘️ Laneway & Garden Suites</h3>
                  <ChevronDownIcon className={`h-6 w-6 text-casa-purple transition-transform ${expandedSections.laneway ? 'rotate-180' : ''}`} />
                </button>
                {expandedSections.laneway && (
                  <div className="px-6 pb-6 border-t border-gray-200 text-gray-700">
                    <p className="mb-4">Interested in a laneway house Toronto or laneway suite project? AllCasa's designers create laneway house designs, design housing build drawings, and drawing for building construction that comply with city of Toronto building permit application standards.</p>
                    <p>These projects are a great way to add space or rental income to your property.</p>
                  </div>
                )}
              </div>

              {/* Deck, Porch & Sunroom Permits */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('deck')}
                  className="w-full flex items-center justify-between p-6 hover:bg-purple-50 transition-colors"
                >
                  <h3 className="text-xl font-bold text-casa-navy">🪜 Deck, Porch & Sunroom Permits</h3>
                  <ChevronDownIcon className={`h-6 w-6 text-casa-purple transition-transform ${expandedSections.deck ? 'rotate-180' : ''}`} />
                </button>
                {expandedSections.deck && (
                  <div className="px-6 pb-6 border-t border-gray-200 text-gray-700">
                    <p>We prepare deck permit drawings, permits for decks, and permit for deck building. Our team also handles porch enclosure, sun porch addition, deck and sunroom, and sunroom Toronto projects — ensuring full compliance and fast approvals.</p>
                  </div>
                )}
              </div>

              {/* Retaining Wall, Grading & Site Plans */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('retaining')}
                  className="w-full flex items-center justify-between p-6 hover:bg-purple-50 transition-colors"
                >
                  <h3 className="text-xl font-bold text-casa-navy">🧩 Retaining Wall, Grading & Site Plans</h3>
                  <ChevronDownIcon className={`h-6 w-6 text-casa-purple transition-transform ${expandedSections.retaining ? 'rotate-180' : ''}`} />
                </button>
                {expandedSections.retaining && (
                  <div className="px-6 pb-6 border-t border-gray-200 text-gray-700">
                    <p className="mb-4">AllCasa specializes in retaining wall permits, retaining wall construction, and drainage for retaining walls. We design retaining wall for building, retaining wall for drainage, and landscape retaining wall plans with grading plans and property grading services.</p>
                    <p>Our experts use AutoCAD Civil 3D to draw site plans and manage land development approvals efficiently.</p>
                  </div>
                )}
              </div>

              {/* Legal Basement & Secondary Suites */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('basement')}
                  className="w-full flex items-center justify-between p-6 hover:bg-purple-50 transition-colors"
                >
                  <h3 className="text-xl font-bold text-casa-navy">🏠 Legal Basement & Secondary Suites</h3>
                  <ChevronDownIcon className={`h-6 w-6 text-casa-purple transition-transform ${expandedSections.basement ? 'rotate-180' : ''}`} />
                </button>
                {expandedSections.basement && (
                  <div className="px-6 pb-6 border-t border-gray-200 text-gray-700">
                    <p className="mb-4">AllCasa helps homeowners legalize basements in Brampton, Vaughan, and Toronto. We prepare basement permit drawings, legal basement requirements Ontario, and basement renovation permit documentation.</p>
                    <p>Adding a secondary suite or basement apartment? We ensure your plans meet all city of Toronto building permit and Ontario Building Code requirements.</p>
                  </div>
                )}
              </div>

              {/* Drafting & Architectural Design */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('drafting')}
                  className="w-full flex items-center justify-between p-6 hover:bg-purple-50 transition-colors"
                >
                  <h3 className="text-xl font-bold text-casa-navy">🧾 Drafting & Architectural Design</h3>
                  <ChevronDownIcon className={`h-6 w-6 text-casa-purple transition-transform ${expandedSections.drafting ? 'rotate-180' : ''}`} />
                </button>
                {expandedSections.drafting && (
                  <div className="px-6 pb-6 border-t border-gray-200 text-gray-700">
                    <p className="mb-4">Our architectural drafting and drafting services near you are ideal for any permit application. From draftsman near me to drafters near me, AllCasa provides building permit drawings and plans for buildings that pass inspection the first time.</p>
                    <p>We deliver accurate architectural building and building drawings tailored to your specific needs.</p>
                  </div>
                )}
              </div>

              {/* Demolition & Inspections */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('demolition')}
                  className="w-full flex items-center justify-between p-6 hover:bg-purple-50 transition-colors"
                >
                  <h3 className="text-xl font-bold text-casa-navy">🏗️ Demolition & Inspections</h3>
                  <ChevronDownIcon className={`h-6 w-6 text-casa-purple transition-transform ${expandedSections.demolition ? 'rotate-180' : ''}`} />
                </button>
                {expandedSections.demolition && (
                  <div className="px-6 pb-6 border-t border-gray-200 text-gray-700">
                    <p className="mb-4">We assist with demolition permit Toronto and permit to demolish applications, ensuring safe removal and compliance. Our team also manages Toronto building inspection, building inspections, and occupancy permits, helping you close your project confidently.</p>
                  </div>
                )}
              </div>

              {/* City-Specific Permit Expertise */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('citySpecific')}
                  className="w-full flex items-center justify-between p-6 hover:bg-purple-50 transition-colors"
                >
                  <h3 className="text-xl font-bold text-casa-navy">🏙️ City-Specific Permit Expertise</h3>
                  <ChevronDownIcon className={`h-6 w-6 text-casa-purple transition-transform ${expandedSections.citySpecific ? 'rotate-180' : ''}`} />
                </button>
                {expandedSections.citySpecific && (
                  <div className="px-6 pb-6 border-t border-gray-200 text-gray-700">
                    <p>AllCasa is fully experienced with city of Toronto permits, city of Vaughan building permit, city of Toronto construction permits, and city permits Toronto. We handle every step — from Toronto building permit application to building permit fees Toronto, ensuring your permit Toronto process runs smoothly.</p>
                  </div>
                )}
              </div>

              {/* Design-Build & Construction Support */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleSection('designBuild')}
                  className="w-full flex items-center justify-between p-6 hover:bg-purple-50 transition-colors"
                >
                  <h3 className="text-xl font-bold text-casa-navy">⚙️ Design-Build & Construction Support</h3>
                  <ChevronDownIcon className={`h-6 w-6 text-casa-purple transition-transform ${expandedSections.designBuild ? 'rotate-180' : ''}`} />
                </button>
                {expandedSections.designBuild && (
                  <div className="px-6 pb-6 border-t border-gray-200 text-gray-700">
                    <p>Whether you're managing residential construction, commercial construction, or industrial and construction projects, AllCasa supports your full design-build process. Our team prepares construction drawings, manages permits for construction, and ensures seamless coordination between building and permits, construction services, and city approvals.</p>
                  </div>
                )}
              </div>

              {/* Why Choose AllCasa */}
              <div className="bg-gradient-to-r from-casa-navy to-casa-purple rounded-xl p-8 shadow-lg text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose AllCasa?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-3 text-casa-gold text-xl">✓</span>
                    <span>Fast, reliable building permit approvals across the GTA</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-casa-gold text-xl">✓</span>
                    <span>Licensed designers & engineers for structural and architectural drawings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-casa-gold text-xl">✓</span>
                    <span>Full support for deck, basement, laneway, commercial, and retaining wall permits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-casa-gold text-xl">✓</span>
                    <span>Experience with city of Toronto building permit applications and inspections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-casa-gold text-xl">✓</span>
                    <span>Transparent pricing, fast turnaround, and guaranteed compliance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Basement Permits Section */}
                <section className="py-16 bg-white" style={{ contentVisibility: 'auto', containIntrinsicSize: '1000px' }}>
          <div className="container max-w-6xl mx-auto px-4">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-xl p-8 md:p-12">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-poppins font-bold text-casa-navy mb-2">
                  🏘️ Legal Basement Permits
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 font-poppins">
                  Legalize Your Basement for Rental Income
                </p>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Many Toronto homeowners have finished basements they want to rent out — but without proper permits and approvals, you risk fines and legal issues. AllCasa helps you legalize your basement apartment legally and safely. Here's how:
              </p>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <button
                    onClick={() => toggleSection('basementPoints')}
                    className="w-full flex items-center justify-between bg-white rounded-xl p-6 hover:bg-purple-50 transition-colors shadow-md mb-4 text-left"
                  >
                    <h3 className="text-xl font-bold text-casa-navy">Our Process & Services</h3>
                    <ChevronDownIcon className={`h-6 w-6 text-casa-purple flex-shrink-0 transition-transform ${expandedSections.basementPoints ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {expandedSections.basementPoints && (
                    <ul className="space-y-4 text-gray-700 text-lg">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-3 text-xl font-bold">✓</span>
                        <span><strong>Assessment & Code Review:</strong> We inspect your basement and review City of Toronto building codes to ensure your space meets all egress, ventilation, and safety requirements for rental units.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-3 text-xl font-bold">✓</span>
                        <span><strong>Permit Drawings:</strong> Our architects create detailed floor plans, section drawings, and mechanical/plumbing designs showing your basement meets all legal standards.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-3 text-xl font-bold">✓</span>
                        <span><strong>Zoning & Second Suite Permits:</strong> We handle zoning verification and apply for the appropriate permits, including second suite/basement apartment approvals.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-3 text-xl font-bold">✓</span>
                        <span><strong>Building Code Compliance:</strong> We ensure emergency egress windows, proper ceiling heights, ventilation, electrical, plumbing, and fire safety systems all meet City of Toronto standards.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-3 text-xl font-bold">✓</span>
                        <span><strong>City Approvals & Inspections:</strong> We submit all applications directly to Toronto Building Division and coordinate inspections throughout the approval process.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-3 text-xl font-bold">✓</span>
                        <span><strong>Legal Protection:</strong> Once permitted and approved, your rental basement is legal, insurable, and protects you from liability and municipal fines.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-3 text-xl font-bold">✓</span>
                        <span><strong>Increased Property Value:</strong> A legal, permitted basement apartment increases your home's resale value and rental income potential.</span>
                      </li>
                    </ul>
                  )}
                </div>
                <div className="rounded-xl overflow-hidden shadow-xl relative" style={{ aspectRatio: '4/3' }}>
                  <img 
                    src={basementLegalImg} 
                    alt="Professional consultation for legal basement permits and basement apartment legalization" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={450}
                  />
                  <img
                    src={allCasaLogo}
                    alt="AllCasa Logo"
                    className="absolute bottom-2 right-2 w-16 h-16 object-contain"
                    width={64}
                    height={64}
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="mt-10 p-6 bg-white rounded-xl border-2 border-purple-300">
                <p className="text-lg text-casa-navy font-semibold mb-2">Why Get Your Basement Legalized Now?</p>
                <p className="text-gray-700">Illegal basement rentals carry hefty fines from the City of Toronto, insurance issues, and potential tenant disputes. Our permit process ensures your basement is safe, code-compliant, and generates worry-free rental income.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Help Section */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-white" style={{ contentVisibility: 'auto', containIntrinsicSize: '800px' }}>
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-8 text-casa-navy text-center">
              🏠 Who We Help
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <p className="text-gray-700">Homeowners planning renovations, additions, or basement apartments</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <p className="text-gray-700">Developers and builders seeking multi-unit or commercial permits</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <p className="text-gray-700">Real estate investors converting homes into rental units or triplexes</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <p className="text-gray-700">Architects and designers needing permit coordination</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <p className="text-gray-700">Contractors who want fast approvals for client projects</p>
              </div>
            </div>
          </div>
        </section>

        {/* Permit Approval Section */}
        <section className="py-16 bg-white" style={{ contentVisibility: 'auto', containIntrinsicSize: '800px' }}>
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-8 text-casa-navy text-center">
              ✅ Approved Building Permits
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              <div className="rounded-xl overflow-hidden shadow-xl" style={{ aspectRatio: '4/3' }}>
                <img 
                  src={permitApproved1} 
                  alt="Building permit approved stamp" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={450}
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl" style={{ aspectRatio: '4/3' }}>
                <img 
                  src={newHouse} 
                  alt="Modern new house with approved building permits" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={450}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-white" style={{ contentVisibility: 'auto', containIntrinsicSize: '800px' }}>
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-8 text-casa-navy text-center">
              📜 Our Process — Simple & Transparent
            </h2>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="flex items-start bg-gradient-to-r from-purple-50 to-white rounded-xl p-6 shadow-md">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-casa-navy mb-2">Free Consultation</h3>
                  <p className="text-gray-700">Tell us about your project and goals.</p>
                </div>
              </div>

              <div className="flex items-start bg-gradient-to-r from-purple-50 to-white rounded-xl p-6 shadow-md">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-casa-navy mb-2">Site Review & Design</h3>
                  <p className="text-gray-700">We assess zoning and create compliant drawings.</p>
                </div>
              </div>

              <div className="flex items-start bg-gradient-to-r from-purple-50 to-white rounded-xl p-6 shadow-md">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-casa-navy mb-2">Permit Application</h3>
                  <p className="text-gray-700">We prepare all documents and submit to the City.</p>
                </div>
              </div>

              <div className="flex items-start bg-gradient-to-r from-purple-50 to-white rounded-xl p-6 shadow-md">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-casa-navy mb-2">City Review & Response</h3>
                  <p className="text-gray-700">We handle all communication with City officials.</p>
                </div>
              </div>

              <div className="flex items-start bg-gradient-to-r from-purple-50 to-white rounded-xl p-6 shadow-md">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                <div>
                  <h3 className="text-xl font-semibold text-casa-navy mb-2">Approval & Construction</h3>
                  <p className="text-gray-700">Once approved, you can start building legally.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-white" style={{ contentVisibility: 'auto', containIntrinsicSize: '800px' }}>
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-8 text-casa-navy text-center">
              ⚡ Why Choose Us?
            </h2>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 text-2xl">✓</span>
                  Over 15 years of experience in design, construction & permitting
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 text-2xl">✓</span>
                  Licensed Architectural Technologists and Engineers
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 text-2xl">✓</span>
                  Fast turnaround on drawings and approvals
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 text-2xl">✓</span>
                  Expertise with Toronto Zoning By-law 569-2013 and Ontario Building Code
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 text-2xl">✓</span>
                  Transparent pricing and no hidden fees
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 text-2xl">✓</span>
                  Full-service Design-Build & Permit team — everything under one roof
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-white" style={{ contentVisibility: 'auto', containIntrinsicSize: '300px' }}>
          <div className="container max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-casa-navy">
              📍 Service Areas
            </h2>
            <p className="text-xl text-gray-700">
              Toronto | North York | Etobicoke | Scarborough | Vaughan | Markham | Richmond Hill | Mississauga | Brampton | Oakville
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-white" style={{ contentVisibility: 'auto', containIntrinsicSize: '1200px' }}>
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-12 text-casa-navy text-center">
              🧠 Frequently Asked Questions (FAQ)
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h3 className="text-xl font-semibold text-casa-navy mb-3">
                  1. What is a Building Permit and why do I need one?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A building permit is an official approval from the City that ensures your construction or renovation complies with zoning by-laws and the Ontario Building Code. It's required for most structural, plumbing, or layout changes — including basement finishes, additions, and new builds.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h3 className="text-xl font-semibold text-casa-navy mb-3">
                  2. How long does it take to get a building permit in Toronto?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Typical permits take 2 to 6 weeks depending on project complexity. Minor renovations may be approved faster. We handle all City coordination to minimize delays and ensure compliance on the first submission.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h3 className="text-xl font-semibold text-casa-navy mb-3">
                  3. What happens if I build without a permit?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Building without a permit can lead to stop-work orders, fines, and potential issues when selling or insuring your property. It's always best to obtain permits to ensure safety and protect your investment.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h3 className="text-xl font-semibold text-casa-navy mb-3">
                  4. How much does a building permit cost?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  City fees vary depending on project size and scope — usually $250 to $3,000 for residential projects. Our team provides an upfront estimate during consultation and manages all payments directly with the City.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h3 className="text-xl font-semibold text-casa-navy mb-3">
                  5. Can you help if my permit application was rejected?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes. We specialize in fixing rejected or delayed applications. Our experts review City comments, make necessary drawing revisions, and resubmit on your behalf to get fast approval.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h3 className="text-xl font-semibold text-casa-navy mb-3">
                  6. Do I need a permit for interior renovations?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  You typically need a permit if your renovation involves structural changes, removing or adding walls, new plumbing, or basement conversions. Cosmetic changes (painting, flooring, cabinets) usually don't require one.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Suspense fallback={<div className="min-h-[200px]" />}>
          <Testimonials />
        </Suspense>

        {/* Contact Form Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container max-w-2xl mx-auto">
            <Suspense fallback={<div className="min-h-[300px]" />}>
              <Contact 
                formOnly={true}
                budgetOptions={[
                  { value: "dont-know", label: "I don't know" },
                  { value: "under-3k", label: "Under $3000" },
                  { value: "3k-5k", label: "$3000-$5000" },
                  { value: "5k-7k", label: "$5000-$7000" },
                  { value: "7k-10k", label: "$7000-$10,000" },
                  { value: "10k-15k", label: "$10,000-$15000" },
                  { value: "15k-plus", label: ">$15,000" }
                ]}
                projectTypeOptions={[
                  { value: "custom-home", label: "Custom Home" },
                  { value: "home-addition", label: "Home Addition" },
                  { value: "legal-basement", label: "Legal Basement" },
                  { value: "basement-finish", label: "Basement Finish" },
                  { value: "deck-porch", label: "Deck / Porch" },
                  { value: "garage-laneway", label: "Garage / Laneway" },
                  { value: "interior-remodel", label: "Interior Remodel" },
                  { value: "garden-suite", label: "Garden Suite" },
                  { value: "commercial-space", label: "Commercial Space" },
                  { value: "change-of-use", label: "Change of Use" }
                ]}
              />
            </Suspense>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-casa-navy">
              Ready to Get Your Building Permit?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Contact us today for a free consultation and let our experts handle your permit application from start to finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-casa-navy to-casa-purple hover:from-casa-purple hover:to-casa-navy text-white px-8 py-4 font-semibold font-poppins text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-full group"
                onClick={scrollToLastConsultation}
                data-testid="button-permit-cta-consultation"
              >
                Get Free Consultation
                <ChevronRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </section>

        {/* Final Calendly Widget Section - Above Footer */}
        <section id="permit-calendly" className="py-16 bg-gradient-to-br from-white to-purple-50" style={{ contentVisibility: 'auto', containIntrinsicSize: '700px' }}>
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-poppins font-bold text-casa-navy mb-4">
                  Ready to Move Forward?
                </h2>
                <p className="text-lg text-gray-600">
                  Schedule your building permit consultation now and get started on your project.
                </p>
              </div>
              <Suspense fallback={<div className="min-h-[600px]" />}>
                <CalendlyWidget />
              </Suspense>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BuildingPermit;

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}
