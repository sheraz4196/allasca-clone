import ArchitecturalDesign from "@/components/ArchitecturalDesign";
import BasementDevelopment from "@/components/BasementDevelopment";
import CalendlyWidget from "@/components/CalendlyWidget";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GardenSuites from "@/components/GardenSuites";
import Hero from "@/components/Hero";
import HomeRenovation from "@/components/HomeRenovation";
import InspirationalBanner from "@/components/InspirationalBanner";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import ResidentialConstruction from "@/components/ResidentialConstruction";
import Services from "@/components/Services";
import Seo from "@/components/Seo";
import Testimonials from "@/components/Testimonials";
import { Toaster } from "@/components/ui/sonner";
import UniqueApproach from "@/components/UniqueApproach";
import SEOSection from "@/components/SEOSection";
import { setupScrollAnimations } from "@/utils/animations";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import YoutubeVideosSection from "@/components/YoutubeVideosSection";

const Index = () => {
  const [expandTransform, setExpandTransform] = useState(false);
  const [expandedQuestions, setExpandedQuestions] = useState<{
    [key: number]: boolean;
  }>({});

  useEffect(() => {
    setupScrollAnimations();
  }, []);

  const toggleQuestion = (index: number) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [index]: !prev[index],
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
        <SEOSection />

        <YoutubeVideosSection />
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
              <h2 className="heading-gradient text-3xl md:text-4xl font-poppins font-bold mb-4">
                Our Projects
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We've completed construction and renovation projects across the
                Greater Toronto Area. Our work spans from downtown Toronto to
                the surrounding communities, bringing quality craftsmanship to
                homes throughout the region.
              </p>
            </div>

            <div className="animate-on-scroll max-w-5xl mx-auto">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/lovable-uploads/ca8a6ba5-89c2-4c04-bebd-e97f08c9f709.png"
                  alt="Map showing AllCasa construction projects across Greater Toronto Area"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 text-lg">
                  From Forest Hill to The Beaches, from North York to
                  Mississauga - we bring exceptional construction and renovation
                  services to your neighborhood.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-gradient-to-br from-purple-50 to-white py-16"
          id="services-info"
        >
          <div className="container max-w-6xl mx-auto px-4">
            <div className="animate-on-scroll bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <button
                onClick={() => setExpandTransform(!expandTransform)}
                className="w-full flex items-center justify-between bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 hover:from-purple-100 hover:to-blue-100 transition-colors mb-6"
              >
                <h2 className="text-3xl md:text-4xl font-poppins font-bold text-casa-navy text-left">
                  🏠 Transform Your Home with Expert Design & Construction
                </h2>
                <ChevronDown
                  className={`h-8 w-8 text-casa-purple flex-shrink-0 transition-transform ${
                    expandTransform ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandTransform && (
                <>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Looking for full home renovation contractors in Toronto? Our
                    award-winning design-build team specializes in complete home
                    renovations, custom house design, and luxury home
                    construction. Whether you're remodeling your entire home,
                    building a custom house, or doing major home additions, we
                    manage everything—from architectural design and city permits
                    to interior finishes and landscaping.
                  </p>

                  <div className="mb-8">
                    <h3 className="text-2xl font-poppins font-semibold mb-4 text-casa-navy">
                      We offer:
                    </h3>
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
                    Our experienced home renovation contractors and custom home
                    builders ensure your project is completed on time, within
                    budget, and with exceptional craftsmanship. Whether you need
                    a modern home renovation, classic architectural design, or a
                    full house makeover, we'll turn your vision into reality.
                  </p>

                  <div className="border-t border-gray-200 pt-8 mb-8">
                    <h3 className="text-2xl font-poppins font-semibold mb-4 text-casa-navy">
                      Service Areas
                    </h3>
                    <p className="text-gray-700 text-lg">
                      Toronto | North York | Etobicoke | Scarborough | Markham |
                      Richmond Hill | Vaughan | Mississauga | Oakville
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6">
                    <h3 className="text-2xl font-poppins font-semibold mb-4 text-casa-navy">
                      Why Choose Us?
                    </h3>
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
                        Over 15 Years of Experience in Home Renovations & Custom
                        Builds
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <InspirationalBanner />

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-12 text-casa-navy text-center">
              🧠 Frequently Asked Questions (FAQ)
            </h2>

            <div className="space-y-4">
              <button
                onClick={() => toggleQuestion(0)}
                className="w-full flex items-center justify-between bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow text-left"
              >
                <h3 className="text-xl font-semibold text-casa-navy flex-1">
                  1. How long does a full home renovation usually take?
                </h3>
                <ChevronDown
                  className={`h-6 w-6 text-casa-purple flex-shrink-0 transition-transform ml-4 ${
                    expandedQuestions[0] ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedQuestions[0] && (
                <p className="text-gray-700 leading-relaxed px-6 pb-4">
                  The duration depends on the project size and scope. A full
                  home renovation typically takes 3 to 6 months, while smaller
                  remodels like kitchens or bathrooms can take 6 to 10 weeks. We
                  provide a clear timeline before starting and update you
                  regularly throughout the process.
                </p>
              )}

              <button
                onClick={() => toggleQuestion(1)}
                className="w-full flex items-center justify-between bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow text-left"
              >
                <h3 className="text-xl font-semibold text-casa-navy flex-1">
                  2. How much does a full home renovation cost in Toronto?
                </h3>
                <ChevronDown
                  className={`h-6 w-6 text-casa-purple flex-shrink-0 transition-transform ml-4 ${
                    expandedQuestions[1] ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedQuestions[1] && (
                <p className="text-gray-700 leading-relaxed px-6 pb-4">
                  Costs vary widely based on materials, finishes, and square
                  footage. On average, major home renovations in Toronto range
                  from $150 to $350 per square foot. We provide a detailed,
                  transparent quote after the initial design and consultation.
                </p>
              )}

              <button
                onClick={() => toggleQuestion(2)}
                className="w-full flex items-center justify-between bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow text-left"
              >
                <h3 className="text-xl font-semibold text-casa-navy flex-1">
                  3. Do I need a building permit for my renovation?
                </h3>
                <ChevronDown
                  className={`h-6 w-6 text-casa-purple flex-shrink-0 transition-transform ml-4 ${
                    expandedQuestions[2] ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedQuestions[2] && (
                <p className="text-gray-700 leading-relaxed px-6 pb-4">
                  Yes — if your project involves structural changes, wall
                  removal, additions, or new plumbing/electrical systems, a
                  permit is required. We handle all permit drawings and
                  submissions directly with the City of Toronto to save you
                  time.
                </p>
              )}

              <button
                onClick={() => toggleQuestion(3)}
                className="w-full flex items-center justify-between bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow text-left"
              >
                <h3 className="text-xl font-semibold text-casa-navy flex-1">
                  4. What's the difference between renovation and remodeling?
                </h3>
                <ChevronDown
                  className={`h-6 w-6 text-casa-purple flex-shrink-0 transition-transform ml-4 ${
                    expandedQuestions[3] ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedQuestions[3] && (
                <p className="text-gray-700 leading-relaxed px-6 pb-4">
                  A renovation updates existing finishes or layouts without
                  major changes, while a remodeling project can include
                  structural changes, extensions, or complete redesigns. We
                  offer both depending on your goals.
                </p>
              )}

              <button
                onClick={() => toggleQuestion(4)}
                className="w-full flex items-center justify-between bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow text-left"
              >
                <h3 className="text-xl font-semibold text-casa-navy flex-1">
                  5. Can you help with design and construction together?
                </h3>
                <ChevronDown
                  className={`h-6 w-6 text-casa-purple flex-shrink-0 transition-transform ml-4 ${
                    expandedQuestions[4] ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedQuestions[4] && (
                <p className="text-gray-700 leading-relaxed px-6 pb-4">
                  Absolutely. We're a full-service design-build company, meaning
                  we take care of both the creative design and the actual
                  construction. This ensures faster timelines, fewer
                  miscommunications, and a smoother process from start to
                  finish.
                </p>
              )}

              <button
                onClick={() => toggleQuestion(5)}
                className="w-full flex items-center justify-between bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow text-left"
              >
                <h3 className="text-xl font-semibold text-casa-navy flex-1">
                  6. What if I already have drawings or a designer?
                </h3>
                <ChevronDown
                  className={`h-6 w-6 text-casa-purple flex-shrink-0 transition-transform ml-4 ${
                    expandedQuestions[5] ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedQuestions[5] && (
                <p className="text-gray-700 leading-relaxed px-6 pb-4">
                  No problem — we can work with your existing plans and help
                  refine them to meet building code and zoning requirements. We
                  also provide value-engineering suggestions to optimize design
                  and cost.
                </p>
              )}

              <button
                onClick={() => toggleQuestion(6)}
                className="w-full flex items-center justify-between bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow text-left"
              >
                <h3 className="text-xl font-semibold text-casa-navy flex-1">
                  7. Do you offer warranty or post-construction support?
                </h3>
                <ChevronDown
                  className={`h-6 w-6 text-casa-purple flex-shrink-0 transition-transform ml-4 ${
                    expandedQuestions[6] ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedQuestions[6] && (
                <p className="text-gray-700 leading-relaxed px-6 pb-4">
                  Yes. All our projects include a comprehensive workmanship
                  warranty. We also offer post-construction check-ins to ensure
                  you're fully satisfied with every detail even after
                  completion.
                </p>
              )}

              <button
                onClick={() => toggleQuestion(7)}
                className="w-full flex items-center justify-between bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow text-left"
              >
                <h3 className="text-xl font-semibold text-casa-navy flex-1">
                  8. Do you handle luxury or high-end home construction?
                </h3>
                <ChevronDown
                  className={`h-6 w-6 text-casa-purple flex-shrink-0 transition-transform ml-4 ${
                    expandedQuestions[7] ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedQuestions[7] && (
                <p className="text-gray-700 leading-relaxed px-6 pb-4">
                  Yes, our portfolio includes modern, luxury, and custom-built
                  homes across the GTA. We collaborate closely with clients to
                  select premium finishes, fixtures, and architectural details
                  that elevate every project.
                </p>
              )}

              <button
                onClick={() => toggleQuestion(8)}
                className="w-full flex items-center justify-between bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow text-left"
              >
                <h3 className="text-xl font-semibold text-casa-navy flex-1">
                  9. Can I live in my home during renovation?
                </h3>
                <ChevronDown
                  className={`h-6 w-6 text-casa-purple flex-shrink-0 transition-transform ml-4 ${
                    expandedQuestions[8] ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedQuestions[8] && (
                <p className="text-gray-700 leading-relaxed px-6 pb-4">
                  It depends on the project scope. For smaller renovations, yes
                  — but for major structural or full-home projects, we recommend
                  temporary relocation for safety and efficiency. We help plan
                  logistics to minimize disruption.
                </p>
              )}

              <button
                onClick={() => toggleQuestion(9)}
                className="w-full flex items-center justify-between bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow text-left"
              >
                <h3 className="text-xl font-semibold text-casa-navy flex-1">
                  10. How do I start my renovation project?
                </h3>
                <ChevronDown
                  className={`h-6 w-6 text-casa-purple flex-shrink-0 transition-transform ml-4 ${
                    expandedQuestions[9] ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedQuestions[9] && (
                <p className="text-gray-700 leading-relaxed px-6 pb-4">
                  Simply book a free consultation with our design-build experts.
                  We'll review your goals, property, and budget, then prepare a
                  proposal outlining design ideas, estimated cost, and next
                  steps.
                </p>
              )}
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
                  Schedule a free consultation with our experts to discuss your
                  renovation or construction needs.
                </p>
              </div>
              <CalendlyWidget />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
