import { useEffect, useRef } from 'react';
import ResponsiveImage from '@/components/ResponsiveImage';

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "Understanding your vision and budget.",
    image: {
      src: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a',
      alt: 'Consultation meeting between homeowners and architect',
      widths: [480, 768, 1080]
    }
  },
  {
    number: "02",
    title: "Design & Planning",
    description: "Detailed designs and planning.",
    image: {
      src: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
      alt: 'Architect reviewing building plans',
      widths: [480, 900, 1280]
    }
  },
  {
    number: "03",
    title: "Material Selection",
    description: "Premium materials and finishes.",
    image: {
      src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
      alt: 'Construction materials neatly arranged',
      widths: [480, 900, 1280]
    }
  },
  {
    number: "04",
    title: "Construction",
    description: "Skilled craftsmanship in action.",
    image: {
      src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd',
      alt: 'Construction crew working on site',
      widths: [480, 900, 1280]
    }
  },
  {
    number: "05",
    title: "Final Walkthrough",
    description: "Quality inspection and handover.",
    image: {
      src: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae',
      alt: 'Homeowners receiving completed project keys',
      widths: [480, 900, 1280]
    }
  }
];

const Process = () => {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          // Staggered animation delay
          const delay = 0.2 * index;
          (entry.target as HTMLElement).style.animationDelay = `${delay}s`;
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    });
    
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
    <section id="process" className="py-16 bg-white text-gray-900 relative overflow-hidden">
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Our Process</h2>
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
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1 relative">
                <ResponsiveImage
                  src={`${step.image.src}?auto=format`}
                  alt={step.image.alt}
                  className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  responsiveWidths={step.image.widths}
                  priority={index === 0}
                />
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold shadow-lg">
                  {step.number}
                </div>
              </div>
              <div className="flex-1 text-center md:text-left space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold font-poppins text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
