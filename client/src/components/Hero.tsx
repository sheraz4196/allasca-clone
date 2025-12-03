import { Button } from "@/components/ui/button";
import { ChevronRight, Star } from "lucide-react";
import { memo } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

interface ImageCarouselTypes {
  src: string;
  alt: string;
}

const heroImages: ImageCarouselTypes[] = [
  {
    src: "/lovable-uploads/090f7789-43ad-4f1f-80af-87c1fbb30439.png",
    alt: "Image 1"
  },
  {
    src: "/lovable-uploads/ab4183af-b1cb-4ad2-9fa3-0c5d01441463.png",
    alt: "Image 2"
  },
  {
    src: "/lovable-uploads/4c980d8f-d099-467b-93c9-846ef0a340e3.png",
    alt: "Image 3"
  },
  {
    src: "/lovable-uploads/8023b467-88c8-4498-9a14-985d92fef6de.png",
    alt: "Image 4"
  },
  {
    src: "/lovable-uploads/45aeef41-fc0e-4f5a-8476-4a04d333a781.png",
    alt: "Image 5"
  }
];

const Hero = () => {

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="container relative z-10 pt-20 md:pt-16 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Left Text Block */}
          <div className="animate-on-scroll">
            <div className="flex items-center justify-start md:pt-14 lg:pt-0 pt-6 mb-6 animate-slide-in">
              <div className="bg-slate-800 text-white px-4 py-2 rounded-full flex items-center shadow-lg text-sm font-medium font-poppins">
                <Star className="w-4 h-4 mr-2 text-yellow-300" aria-hidden="true" />
                <span>
                  Toronto's #1 Home Design and Build Company
                </span>
              </div>
            </div>

            <h1 className="font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in text-left leading-tight">
              Building Your{" "}
              <span className="text-purple-600 relative inline-block">
                Dream Home
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="none">
                  <path
                    d="M1 5.5C10 2.5 20 2.5 30 5.5C40 8.5 50 8.5 60 5.5C70 2.5 80 2.5 90 5.5C95 6.5 98 7.5 99 8.5"
                    stroke="#9333ea"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl mb-4 text-black font-normal font-poppins animate-fade-in text-left" style={{ animationDelay: "0.2s" }}>
              From Permit to Design to Build to Finish
            </p>

            <p className="text-base md:text-lg mb-8 text-gray-600 font-poppins animate-fade-in text-left leading-relaxed" style={{ animationDelay: "0.4s" }}>
              Specializing in new luxury custom house design and build, full home renovation, and full basement renovation services throughout Toronto and the GTA. Transform your space into the home you've always imagined.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in justify-start" style={{ animationDelay: "0.4s" }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-casa-navy to-casa-purple hover:from-casa-purple hover:to-casa-navy text-white px-8 py-4 font-semibold font-poppins text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-full group w-full sm:w-auto"
                onClick={() => document.getElementById('consultation-booking')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="button-hero-consultation"
              >
                Get Free Consultation
                <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </div>
          </div>

          {/* Right Image Carousel */}
          <div className="relative block animate-on-scroll mt-8 lg:mt-0">
            {/* Background Gradient */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-casa-oxford to-casa-purple rounded-xl animate-floating z-0" />

            {/* Carousel */}
            <div className="relative z-10 w-full overflow-hidden rounded-xl shadow-2xl">
              <Carousel>
                <CarouselContent>
                  {heroImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-2">
                        <img
                          src={image.src}
                          alt={image.alt || `Hero Image ${index + 1}`}
                          loading={index === 0 ? "eager" : "lazy"}
                          decoding={index === 0 ? "sync" : "async"}
                          className="w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[400px] object-cover rounded-xl border transition-transform duration-300 ease-in-out"
                          {...(index === 0 ? { fetchpriority: "high" } : {})}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white border border-casa-purple text-casa-purple p-2 rounded-full shadow-lg hover:bg-casa-purple hover:text-white transition-all duration-300" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white border border-casa-purple text-casa-purple p-2 rounded-full shadow-lg hover:bg-casa-purple hover:text-white transition-all duration-300" />
              </Carousel>
            </div>

            {/* Rating Floating Box */}
            <div
              className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -right-4 sm:-right-6 md:-right-8 z-20 bg-white rounded-xl p-3 sm:p-4 shadow-xl animate-floating flex items-center gap-2 sm:gap-3"
              style={{ animationDelay: "1s" }}
            >
              <span className="text-casa-navy text-2xl sm:text-3xl md:text-4xl font-bold font-poppins">4.9</span>
              <div className="flex flex-col">
                <div className="flex" aria-label="5 star rating">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.377 2.455a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.54 1.118l-3.377-2.455a1 1 0 00-1.176 0l-3.377 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.967a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-gray-600 font-poppins">1,000+ reviews</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

  );
};

export default Hero;
