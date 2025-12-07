import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "Understanding your vision and budget.",
    image: "/process/process_1.webp",
    width: 600,
    height: 320,
  },
  {
    number: "02",
    title: "Design & Planning",
    description: "Detailed designs and planning.",
    image: "/process/process_2.webp",
    width: 600,
    height: 320,
  },
  {
    number: "03",
    title: "Material Selection",
    description: "Premium materials and finishes.",
    image: "/process/process_3.webp",
    width: 600,
    height: 320,
  },
  {
    number: "04",
    title: "Construction",
    description: "Skilled craftsmanship in action.",
    image: "/process/process_4.webp",
    width: 600,
    height: 320,
  },
  {
    number: "05",
    title: "Final Walkthrough",
    description: "Quality inspection and handover.",
    image: "/process/process_5.webp",
    width: 600,
    height: 320,
  },
];

const Process = () => {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      {
        threshold: 0.15, // Slightly lower threshold for earlier triggering
        rootMargin: "0px 0px -80px 0px", // Adjusted for better mobile experience
      }
    );

    const observer = observerRef.current;

    // Use requestAnimationFrame for smoother performance
    const timeoutId = setTimeout(() => {
      stepRefs.current.forEach((step) => {
        if (step) observer.observe(step);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section id="process" className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">
            Our Process
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Proven methodology for smooth project delivery.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-16 md:space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out flex flex-col md:flex-row items-center gap-8 md:gap-12"
              style={{
                transitionDelay: `${index * 100}ms`,
                willChange: "opacity, transform", // Performance hint
              }}
            >
              <div className="flex-1 relative w-full">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                  <img
                    loading="lazy"
                    decoding="async"
                    fetchPriority={index === 0 ? "high" : "low"} // First image gets priority
                    src={step.image}
                    alt={`${step.title} process step - ${step.description}`}
                    width={step.width}
                    height={step.height}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold shadow-lg z-10">
                  {step.number}
                </div>
              </div>
              <div className="flex-1 text-center md:text-left space-y-4 md:space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold font-sans text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
