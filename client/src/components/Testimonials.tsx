import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const topRowTestimonials = [
  {
    id: 1,
    name: "Jennifer & Mark Davis",
    project: "Full Home Renovation",
    quote:
      "AllCasa transformed our outdated home into a modern masterpiece. Their attention to detail and commitment to quality exceeded our expectations.",
  },
  {
    id: 2,
    name: "Robert Johnson",
    project: "Custom Home Build",
    quote:
      "Building our dream home with AllCasa was the best decision we made. Their team guided us through every step with expertise and professionalism.",
  },
  {
    id: 3,
    name: "Sarah & Mike Thompson",
    project: "Basement Development",
    quote:
      "The basement renovation by AllCasa added valuable living space to our home. Their creative solutions and craftsmanship are truly impressive.",
  },
  {
    id: 4,
    name: "David Williams",
    project: "Outdoor Living Space",
    quote:
      "Our backyard was completely transformed by AllCasa's landscaping team. We now have a beautiful outdoor oasis that we enjoy year-round.",
  },
  {
    id: 5,
    name: "Lisa Chen",
    project: "Kitchen Renovation",
    quote:
      "The kitchen renovation exceeded all our expectations. AllCasa's team was professional, timely, and delivered exceptional quality work.",
  },
  {
    id: 6,
    name: "Michael Brown",
    project: "Garden Suite Construction",
    quote:
      "Our garden suite has become a perfect rental income source. AllCasa handled everything from permits to final inspection seamlessly.",
  },
];

const bottomRowTestimonials = [
  {
    id: 7,
    name: "Emily Rodriguez",
    project: "Bathroom Renovation",
    quote:
      "AllCasa turned our cramped bathroom into a spa-like retreat. The design is both beautiful and functional, exceeding all our dreams.",
  },
  {
    id: 8,
    name: "James & Patricia Wilson",
    project: "Whole House Renovation",
    quote:
      "Working with AllCasa was a seamless experience. They respected our budget and timeline while delivering exceptional craftsmanship throughout.",
  },
  {
    id: 9,
    name: "Kevin Martinez",
    project: "Home Addition",
    quote:
      "The home addition perfectly blended with our existing structure. AllCasa's architects and builders created exactly what we envisioned.",
  },
  {
    id: 10,
    name: "Amanda & Steve Garcia",
    project: "Custom Kitchen Design",
    quote:
      "Our new kitchen is the heart of our home. AllCasa's design team created a space that's both stunning and incredibly functional for our family.",
  },
  {
    id: 11,
    name: "Thomas Lee",
    project: "Deck & Patio Construction",
    quote:
      "The outdoor living space AllCasa built has become our favorite part of the house. Their attention to detail and quality materials show in every aspect.",
  },
  {
    id: 12,
    name: "Rachel & Daniel Kim",
    project: "Master Suite Renovation",
    quote:
      "AllCasa transformed our master bedroom into a luxurious retreat. The project was completed on time and the results are absolutely stunning.",
  },
];

const StarRating = () => {
  return (
    <div className="flex items-center gap-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
};

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof topRowTestimonials)[0];
}) => (
  <Card className="w-72 sm:w-80 mx-2 sm:mx-4 border-none shadow-lg hover:shadow-xl transition-all duration-500 flex-shrink-0 min-h-[280px] sm:min-h-[300px]">
    <CardContent className="p-4 sm:p-6 flex flex-col h-full">
      <div className="mb-4">
        <h3 className="font-bold text-lg sm:text-xl text-casa-navy leading-tight">
          {testimonial.name}
        </h3>
        <StarRating />
        <p className="text-casa-gray text-sm sm:text-base">
          {testimonial.project}
        </p>
      </div>
      <div className="flex-1 flex items-center">
        <blockquote className="italic text-base sm:text-lg leading-relaxed">
          "{testimonial.quote}"
        </blockquote>
      </div>
    </CardContent>
  </Card>
);

const Testimonials = () => {
  // Create extended arrays for seamless looping
  const extendedTopTestimonials = [
    ...topRowTestimonials,
    ...topRowTestimonials,
    ...topRowTestimonials,
  ];
  const extendedBottomTestimonials = [
    ...bottomRowTestimonials,
    ...bottomRowTestimonials,
    ...bottomRowTestimonials,
  ];

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 bg-casa-beige overflow-hidden"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-casa-navy mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-casa-gray max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about their experience with AllCasa.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {/* Top row - moving left to right */}
          <div className="relative overflow-hidden py-2">
            <div className="flex animate-scroll-left">
              {extendedTopTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`top-${testimonial.id}-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>

          {/* Bottom row - moving right to left */}
          <div className="relative overflow-hidden py-2">
            <div className="flex animate-scroll-right">
              {extendedBottomTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`bottom-${testimonial.id}-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
