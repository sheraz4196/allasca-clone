import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "Understanding your vision and budget.",
    image: "/process/process_1.webp",
  },
  {
    number: "02",
    title: "Design & Planning",
    description: "Detailed designs and planning.",
    image: "/process/process_2.webp",
  },
  {
    number: "03",
    title: "Material Selection",
    description: "Premium materials and finishes.",
    image: "/process/process_3.webp",
  },
  {
    number: "04",
    title: "Construction",
    description: "Skilled craftsmanship in action.",
    image: "/process/process_4.webp",
  },
  {
    number: "05",
    title: "Final Walkthrough",
    description: "Quality inspection and handover.",
    image: "/process/process_5.webp",
  },
];

const Process = () => {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    stepRefs.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
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

        <div className="max-w-4xl mx-auto space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out flex flex-col md:flex-row items-center gap-8"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex-1 relative">
                <img
                  loading="lazy"
                  src={step.image}
                  alt={`${step.title} process step`}
                  className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold shadow-lg">
                  {step.number}
                </div>
              </div>
              <div className="flex-1 text-center md:text-left space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold font-sans text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
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
