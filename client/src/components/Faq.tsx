import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FaqSection() {
  const [expandedQuestions, setExpandedQuestions] = useState<{
    [key: number]: boolean;
  }>({});
  const toggleQuestion = (index: number) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
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
              The duration depends on the project size and scope. A full home
              renovation typically takes 3 to 6 months, while smaller remodels
              like kitchens or bathrooms can take 6 to 10 weeks. We provide a
              clear timeline before starting and update you regularly throughout
              the process.
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
              footage. On average, major home renovations in Toronto range from
              $150 to $350 per square foot. We provide a detailed, transparent
              quote after the initial design and consultation.
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
              Yes — if your project involves structural changes, wall removal,
              additions, or new plumbing/electrical systems, a permit is
              required. We handle all permit drawings and submissions directly
              with the City of Toronto to save you time.
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
              A renovation updates existing finishes or layouts without major
              changes, while a remodeling project can include structural
              changes, extensions, or complete redesigns. We offer both
              depending on your goals.
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
              Absolutely. We're a full-service design-build company, meaning we
              take care of both the creative design and the actual construction.
              This ensures faster timelines, fewer miscommunications, and a
              smoother process from start to finish.
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
              No problem — we can work with your existing plans and help refine
              them to meet building code and zoning requirements. We also
              provide value-engineering suggestions to optimize design and cost.
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
              you're fully satisfied with every detail even after completion.
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
              Yes, our portfolio includes modern, luxury, and custom-built homes
              across the GTA. We collaborate closely with clients to select
              premium finishes, fixtures, and architectural details that elevate
              every project.
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
              It depends on the project scope. For smaller renovations, yes —
              but for major structural or full-home projects, we recommend
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
              proposal outlining design ideas, estimated cost, and next steps.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
