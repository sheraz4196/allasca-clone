export default function OurProjects() {
  return (
    <div className="bg-white py-20" id="our-projects">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-gradient text-3xl md:text-4xl font-sans font-bold mb-4">
            Our Projects
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We've completed construction and renovation projects across the
            Greater Toronto Area. Our work spans from downtown Toronto to the
            surrounding communities, bringing quality craftsmanship to homes
            throughout the region.
          </p>
        </div>

        <div className="animate-on-scroll max-w-5xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            <img
              src="/lovable-uploads/ca8a6ba5-89c2-4c04-bebd-e97f08c9f709.png"
              alt="Map showing AllCasa construction projects across Greater Toronto Area"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-lg">
              From Forest Hill to The Beaches, from North York to Mississauga -
              we bring exceptional construction and renovation services to your
              neighborhood.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
