import ArchitecturalDesign from "@/components/ArchitecturalDesign";
import BasementDevelopment from "@/components/BasementDevelopment";
import CalendlyWidget from "@/components/CalendlyWidget";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GardenSuites from "@/components/GardenSuites";
import Hero from "@/components/Hero";
import HomeRenovation from "@/components/HomeRenovation";
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
import OurProjects from "@/components/OurProjects";
import FaqSection from "@/components/Faq";
import React, { lazy, Suspense } from "react";
const InspirationalBanner = lazy(
  () => import("@/components/InspirationalBanner")
);

const Index = () => {
  const [expandTransform, setExpandTransform] = useState(false);

  useEffect(() => {
    setupScrollAnimations();
  }, []);

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

        <OurProjects />

        <div
          className="bg-gradient-to-br from-purple-50 to-white py-16"
          id="services-info"
        >
          <div className="container max-w-6xl mx-auto px-4">
            <div className="animate-on-scroll bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <button
                type="button"
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

        <Suspense fallback={<div>Loading Lazy Component...</div>}>
          <InspirationalBanner />
        </Suspense>

        {/* FAQ Section */}
        <FaqSection />
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
