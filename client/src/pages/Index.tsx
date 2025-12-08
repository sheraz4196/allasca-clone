import { setupScrollAnimations } from "@/utils/animations";
import { useEffect } from "react";
import { ChevronDown } from "lucide-react";
import React, { lazy, Suspense } from "react";
import LazyLoadInView from "@/components/LazyLoadInView";
import { Button } from "@/components/ui/button";

// Keep these non-lazy as they're critical for initial render
import Seo from "@/components/Seo";
import Hero from "@/components/Hero";
import { Toaster } from "@/components/ui/sonner";
import CommonNavbar from "@/components/CommonNavbar";
import ExpandTransform from "@/components/ExpandTransform";

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
const Footer = lazy(() => import("@/components/Footer"));

const LoadingFallback = () => (
  <div className="h-64 bg-gradient-to-br from-gray-50 to-gray-100 animate-pulse rounded-xl my-8" />
);

const SectionLoadingFallback = () => (
  <div className="h-96 bg-gradient-to-br from-gray-50 to-gray-100 animate-pulse rounded-xl my-16">
    EROOR
  </div>
);

const Index = () => {
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
      <CommonNavbar />
      <main>
        <Hero />

        <LazyLoadInView
          fallback={<SectionLoadingFallback />}
          threshold={0.05}
          rootMargin="150px"
        >
          <Suspense fallback={<SectionLoadingFallback />}>
            <YoutubeVideosSection />
          </Suspense>
        </LazyLoadInView>

        <Services />
        <LazyLoadInView
          fallback={<LoadingFallback />}
          threshold={0.05}
          rootMargin="100px"
        >
          <Suspense fallback={<LoadingFallback />}>
            <UniqueApproach />
          </Suspense>
        </LazyLoadInView>

        <ResidentialConstruction />

        <HomeRenovation />

        <BasementDevelopment />

        <GardenSuites />

        <Portfolio />

        <ArchitecturalDesign />

        <Process />

        <OurProjects />

        <ExpandTransform />

        <LazyLoadInView
          fallback={<LoadingFallback />}
          threshold={0.05}
          rootMargin="200px"
        >
          <Suspense fallback={<LoadingFallback />}>
            <InspirationalBanner />
          </Suspense>
        </LazyLoadInView>
        <LazyLoadInView
          fallback={<SectionLoadingFallback />}
          threshold={0.05}
          rootMargin="150px"
        >
          <Suspense fallback={<SectionLoadingFallback />}>
            <FaqSection />
          </Suspense>
        </LazyLoadInView>
        <LazyLoadInView
          fallback={<SectionLoadingFallback />}
          threshold={0.05}
          rootMargin="150px"
        >
          <Suspense fallback={<SectionLoadingFallback />}>
            <Testimonials />
          </Suspense>
        </LazyLoadInView>
        <LazyLoadInView
          fallback={<SectionLoadingFallback />}
          threshold={0.05}
          rootMargin="150px"
        >
          <Suspense fallback={<SectionLoadingFallback />}>
            <Contact />
          </Suspense>
        </LazyLoadInView>
        <LazyLoadInView
          fallback={<SectionLoadingFallback />}
          threshold={0.05}
          rootMargin="150px"
        >
          <Suspense fallback={<SectionLoadingFallback />}>
            <section className="py-16 bg-gradient-to-br from-white to-purple-50">
              <div className="container">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-sans font-bold text-casa-navy mb-4">
                      Ready to Start Your Project?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                      Schedule a free consultation with our experts to discuss
                      your renovation or construction needs.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      asChild
                      size="lg"
                      className="bg-casa-blue hover:bg-casa-blue/90 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      <a href="/booking">
                        Book a Free Consultation
                        <ChevronDown className="ml-2 h-5 w-5 rotate-90" />
                      </a>
                    </Button>
                  </div>
                  <p className="mt-4 text-sm text-gray-500">
                    Consultation typically takes 30-45 minutes
                  </p>
                </div>
              </div>
            </section>
          </Suspense>
        </LazyLoadInView>
      </main>

      <LazyLoadInView
        fallback={<div className="h-64 bg-gray-50" />}
        threshold={0}
        rootMargin="500px"
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
