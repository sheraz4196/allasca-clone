import { useEffect, useRef } from "react";
import consultationImg from "@assets/Gemini_Generated_Image_5b21c25b21c25b21_1764188347334.png";
import planningImg from "@assets/generated_images/Site_planning_and_preparation_257f5e8d.png";
import materialImg from "@assets/generated_images/Construction_material_selection_display_91121052.png";
import constructionImg from "@assets/generated_images/Construction_execution_phase_91c13c3f.png";
import completionImg from "@assets/generated_images/Project_completion_handover_edb5e2d5.png";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "Understanding your vision and budget.",
    image: consultationImg,
  },
  {
    number: "02",
    title: "Design & Planning",
    description: "Detailed designs and planning.",
    image: planningImg,
  },
  {
    number: "03",
    title: "Material Selection",
    description: "Premium materials and finishes.",
    image: materialImg,
  },
  {
    number: "04",
    title: "Construction",
    description: "Skilled craftsmanship in action.",
    image: constructionImg,
  },
  {
    number: "05",
    title: "Final Walkthrough",
    description: "Quality inspection and handover.",
    image: completionImg,
  },
];

const Process = () => {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            // Staggered animation delay
            const delay = 0.2 * index;
            (entry.target as HTMLElement).style.animationDelay = `${delay}s`;
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    // Ensure refs are initialized before using them
    if (stepRefs.current && Array.isArray(stepRefs.current)) {
      stepRefs.current.forEach((step) => {
        if (step) observer.observe(step);
      });
    }

    return () => {
      if (stepRefs.current && Array.isArray(stepRefs.current)) {
        stepRefs.current.forEach((step) => {
          if (step) observer.unobserve(step);
        });
      }
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="process"
      className="py-16 bg-white text-gray-900 relative overflow-hidden"
    >
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
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
              className={`opacity-0 transform translate-y-8 transition-all duration-1000 ease-out flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 relative">
                <img
                  src={step.image}
                  alt={`${step.title} process step`}
                  className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold shadow-lg">
                  {step.number}
                </div>
              </div>
              <div className="flex-1 text-center md:text-left space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold font-poppins text-gray-900">
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
