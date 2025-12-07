import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ExpandTransform() {
  const [expandTransform, setExpandTransform] = useState(false);

  return (
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
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-casa-navy text-left">
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
                renovations, custom house design, and luxury home construction.
                Whether you're remodeling your entire home, building a custom
                house, or doing major home additions, we manage everything—from
                architectural design and city permits to interior finishes and
                landscaping.
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-sans font-semibold mb-4 text-casa-navy">
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
                budget, and with exceptional craftsmanship. Whether you need a
                modern home renovation, classic architectural design, or a full
                house makeover, we'll turn your vision into reality.
              </p>

              <div className="border-t border-gray-200 pt-8 mb-8">
                <h3 className="text-2xl font-sans font-semibold mb-4 text-casa-navy">
                  Service Areas
                </h3>
                <p className="text-gray-700 text-lg">
                  Toronto | North York | Etobicoke | Scarborough | Markham |
                  Richmond Hill | Vaughan | Mississauga | Oakville
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6">
                <h3 className="text-2xl font-sans font-semibold mb-4 text-casa-navy">
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
  );
}
