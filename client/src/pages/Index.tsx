import { setupScrollAnimations } from "@/utils/animations";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import React, { lazy, Suspense } from "react";
import LazyLoadInView from "@/components/LazyLoadInView";

// Keep these non-lazy as they're critical for initial render
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Toaster } from "@/components/ui/sonner";

// Lazy load ALL other components
const SEOSection = lazy(() => import("@/components/SEOSection"));
const YoutubeVideosSection = lazy(
  () => import("@/components/YoutubeVideosSection")
);
const Services = lazy(() => import("@/components/Services"));
const UniqueApproach = lazy(() => import("@/components/UniqueApproach"));
const ResidentialConstruction = lazy(
  () => import("@/components/ResidentialConstruction")
);
const HomeRenovation = lazy(() => import("@/components/HomeRenovation"));
const BasementDevelopment = lazy(
  () => import("@/components/BasementDevelopment")
);
const GardenSuites = lazy(() => import("@/components/GardenSuites"));
const Portfolio = lazy(() => import("@/components/Portfolio"));
const ArchitecturalDesign = lazy(
  () => import("@/components/ArchitecturalDesign")
);
const Process = lazy(() => import("@/components/Process"));
const OurProjects = lazy(() => import("@/components/OurProjects"));
const InspirationalBanner = lazy(
  () => import("@/components/InspirationalBanner")
);
const FaqSection = lazy(() => import("@/components/Faq"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Contact = lazy(() => import("@/components/Contact"));
const CalendlyWidget = lazy(() => import("@/components/CalendlyWidget"));
const Footer = lazy(() => import("@/components/Footer"));

// Create a reusable fallback component
const LoadingFallback = () => (
  <div className="h-64 bg-gradient-to-br from-gray-50 to-gray-100 animate-pulse rounded-xl my-8" />
);

// For section fallbacks
const SectionLoadingFallback = () => (
  <div className="h-96 bg-gradient-to-br from-gray-50 to-gray-100 animate-pulse rounded-xl my-16" />
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
        <Hero /> {/* Keep Hero non-lazy for immediate visibility */}
        {/* Lazy load SEO Section */}
        <LazyLoadInView
          fallback={<LoadingFallback />}
          threshold={0.05}
          rootMargin="100px"
        >
          <Suspense fallback={<LoadingFallback />}>
            <SEOSection />
          </Suspense>
        </LazyLoadInView>
        {/* Lazy load YouTube Videos */}
        <LazyLoadInView
          fallback={<SectionLoadingFallback />}
          threshold={0.05}
          rootMargin="150px"
        >
          <Suspense fallback={<SectionLoadingFallback />}>
            <YoutubeVideosSection />
          </Suspense>
        </LazyLoadInView>
        {/* Lazy load Services */}
        <LazyLoadInView
          fallback={<SectionLoadingFallback />}
          threshold={0.05}
          rootMargin="150px"
        >
          <Suspense fallback={<SectionLoadingFallback />}>
            <Services />
          </Suspense>
        </LazyLoadInView>
        {/* Lazy load Unique Approach */}
        <LazyLoadInView
          fallback={<LoadingFallback />}
          threshold={0.05}
          rootMargin="100px"
        >
          <Suspense fallback={<LoadingFallback />}>
            <UniqueApproach />
          </Suspense>
        </LazyLoadInView>
        {/* Lazy load Residential Construction */}
        <LazyLoadInView
          fallback={<SectionLoadingFallback />}
          threshold={0.05}
          rootMargin="150px"
        >
          <Suspense fallback={<SectionLoadingFallback />}>
            <div id="residential-construction">
              <ResidentialConstruction />
            </div>
          </Suspense>
        </LazyLoadInView>
        {/* Lazy load Home Renovation */}
        <LazyLoadInView
          fallback={<SectionLoadingFallback />}
          threshold={0.05}
          rootMargin="150px"
        >
          <Suspense fallback={<SectionLoadingFallback />}>
            <div id="home-renovation">
              <HomeRenovation />
            </div>
          </Suspense>
        </LazyLoadInView>
        {/* Lazy load Basement Development */}
        <LazyLoadInView
          fallback={<SectionLoadingFallback />}
          threshold={0.05}
          rootMargin="150px"
        >
          <Suspense fallback={<SectionLoadingFallback />}>
            <div id="basement-development">
              <BasementDevelopment />
            </div>
          </Suspense>
        </LazyLoadInView>
        {/* Lazy load Garden Suites */}
        <LazyLoadInView
          fallback={<SectionLoadingFallback />}
          threshold={0.05}
          rootMargin="150px"
        >
          <Suspense fallback={<SectionLoadingFallback />}>
            <div id="garden-suites">
              <GardenSuites />
            </div>
          </Suspense>
        </LazyLoadInView>
        {/* Lazy load Portfolio */}
        <LazyLoadInView
          fallback={<SectionLoadingFallback />}
          threshold={0.05}
          rootMargin="200px"
        >
          <Suspense fallback={<SectionLoadingFallback />}>
            <Portfolio />
          </Suspense>
        </LazyLoadInView>
        {/* Lazy load Architectural Design */}
        <LazyLoadInView
          fallback={<SectionLoadingFallback />}
          threshold={0.05}
          rootMargin="150px"
        >
          <Suspense fallback={<SectionLoadingFallback />}>
            <ArchitecturalDesign />
          </Suspense>
        </LazyLoadInView>
        {/* Lazy load Process */}
        <LazyLoadInView
          fallback={<SectionLoadingFallback />}
          threshold={0.05}
          rootMargin="150px"
        >
          <Suspense fallback={<SectionLoadingFallback />}>
            <Process />
          </Suspense>
        </LazyLoadInView>
        {/* Lazy load Our Projects */}
        <LazyLoadInView
          fallback={<SectionLoadingFallback />}
          threshold={0.05}
          rootMargin="150px"
        >
          <Suspense fallback={<SectionLoadingFallback />}>
            <OurProjects />
          </Suspense>
        </LazyLoadInView>
        {/* Keep the expandable section inline (it's small) */}
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
        {/* Lazy load Inspirational Banner */}
        <LazyLoadInView
          fallback={<LoadingFallback />}
          threshold={0.05}
          rootMargin="200px"
        >
          <Suspense fallback={<LoadingFallback />}>
            <InspirationalBanner />
          </Suspense>
        </LazyLoadInView>
        {/* Lazy load FAQ Section */}
        <LazyLoadInView
          fallback={<SectionLoadingFallback />}
          threshold={0.05}
          rootMargin="150px"
        >
          <Suspense fallback={<SectionLoadingFallback />}>
            <FaqSection />
          </Suspense>
        </LazyLoadInView>
        {/* Lazy load Testimonials */}
        <LazyLoadInView
          fallback={<SectionLoadingFallback />}
          threshold={0.05}
          rootMargin="150px"
        >
          <Suspense fallback={<SectionLoadingFallback />}>
            <Testimonials />
          </Suspense>
        </LazyLoadInView>
        {/* Lazy load Contact */}
        <LazyLoadInView
          fallback={<SectionLoadingFallback />}
          threshold={0.05}
          rootMargin="150px"
        >
          <Suspense fallback={<SectionLoadingFallback />}>
            <Contact />
          </Suspense>
        </LazyLoadInView>
        {/* Lazy load Calendly Section */}
        <LazyLoadInView
          fallback={<SectionLoadingFallback />}
          threshold={0.05}
          rootMargin="150px"
        >
          <Suspense fallback={<SectionLoadingFallback />}>
            <section className="py-16 bg-gradient-to-br from-white to-purple-50">
              <div className="container">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-poppins font-bold text-casa-navy mb-4">
                      Ready to Start Your Project?
                    </h2>
                    <p className="text-lg text-gray-600">
                      Schedule a free consultation with our experts to discuss
                      your renovation or construction needs.
                    </p>
                  </div>
                  <CalendlyWidget />
                </div>
              </div>
            </section>
          </Suspense>
        </LazyLoadInView>
      </main>

      {/* Lazy load Footer */}
      <LazyLoadInView
        fallback={<div className="h-64 bg-gray-50" />}
        threshold={0}
        rootMargin="500px" // Load footer earlier since it's at bottom
      >
        <Suspense fallback={<div className="h-64 bg-gray-50" />}>
          <Footer />
        </Suspense>
      </LazyLoadInView>

      <Toaster />
    </div>
  );
};

export default Index;
