import CalendlyWidget from "@/components/CalendlyWidget";
import CommonNavbar from "@/components/CommonNavbar";
import Footer from "@/components/Footer";
import LazyLoadInView from "@/components/LazyLoadInView";
import { Suspense } from "react";

const CalendlySkeleton = () => (
  <div className="min-h-screen bg-gradient-to-br from-white to-purple-50 pt-16">
    <div className="container px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header skeleton */}
        <div className="text-center mb-12">
          <div className="h-10 w-64 bg-gray-200 rounded-lg mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 w-96 bg-gray-200 rounded-lg mx-auto mb-2 animate-pulse"></div>
          <div className="h-6 w-80 bg-gray-200 rounded-lg mx-auto animate-pulse"></div>
        </div>

        {/* Main content skeleton */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left sidebar skeleton */}
            <div className="lg:w-1/3 space-y-6">
              <div className="space-y-4">
                <div className="h-6 w-48 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-full bg-gray-100 rounded animate-pulse"></div>
                <div className="h-4 w-5/6 bg-gray-100 rounded animate-pulse"></div>
              </div>

              <div className="space-y-4 pt-6 border-t">
                <div className="h-6 w-40 bg-gray-200 rounded animate-pulse"></div>
                <div className="space-y-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-5 w-5 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 w-32 bg-gray-100 rounded animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t">
                <div className="h-6 w-36 bg-gray-200 rounded animate-pulse"></div>
                <div className="space-y-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="h-4 w-full bg-gray-100 rounded animate-pulse"
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Calendar skeleton */}
            <div className="lg:w-2/3">
              {/* Calendar header */}
              <div className="flex items-center justify-between mb-6">
                <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
                <div className="flex gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="h-10 w-10 bg-gray-200 rounded animate-pulse"
                    ></div>
                  ))}
                </div>
              </div>

              {/* Weekday headers */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className="h-8 bg-gray-100 rounded animate-pulse"
                  ></div>
                ))}
              </div>

              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-2">
                {[...Array(35)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gray-50 rounded-lg animate-pulse"
                  ></div>
                ))}
              </div>

              {/* Time slots skeleton */}
              <div className="mt-8">
                <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mb-4"></div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="h-12 bg-gray-100 rounded-lg animate-pulse"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom info skeleton */}
          <div className="mt-8 pt-8 border-t border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="space-y-2">
                <div className="h-4 w-56 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-48 bg-gray-100 rounded animate-pulse"></div>
              </div>
              <div className="h-12 w-40 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function Booking() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50">
      <CommonNavbar />
      <main className="pt-16">
        <LazyLoadInView
          fallback={<CalendlySkeleton />}
          threshold={0.05}
          rootMargin="100px"
        >
          <Suspense fallback={<CalendlySkeleton />}>
            <section className="p-10">
              <CalendlyWidget />
            </section>
          </Suspense>
        </LazyLoadInView>
      </main>
      <Footer />
    </div>
  );
}
