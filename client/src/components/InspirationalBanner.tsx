import ResponsiveImage from '@/components/ResponsiveImage';

const bannerImage = 'https://images.unsplash.com/photo-1505691938895-1758d7feb511';

const InspirationalBanner = () => {
  return (
    <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ResponsiveImage
          src={`${bannerImage}?auto=format`}
          alt="Beautiful modern custom home"
          className="w-full h-full object-cover"
          responsiveWidths={[640, 1024, 1440, 1920]}
          sizes="100vw"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-white px-4 container">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6 leading-tight">
            Building Homes, Crafting Memories.
          </h2>
          <p className="text-xl md:text-2xl font-poppins leading-relaxed">
            AllCasa makes sure your home is built with care, precision, and a deep understanding of what makes a house truly yours. From the first consultation to the final walkthrough, we transform your vision into reality with craftsmanship that stands the test of time.
          </p>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-casa-beige/20 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default InspirationalBanner;