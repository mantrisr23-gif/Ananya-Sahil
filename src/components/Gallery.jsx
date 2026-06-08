export default function Gallery() {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-paper bg-cover bg-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/textures/grain.png')] opacity-5 pointer-events-none"></div>

      <div className="z-10 max-w-6xl mx-auto flex flex-col items-center">
        
        {/* SECTION 1: Editorial Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-xs md:text-sm tracking-[0.4em] text-gold uppercase mb-6 font-body font-semibold">
            The Gallery
          </h2>
          <h3 className="text-5xl md:text-7xl font-display text-dark mb-6 leading-tight">
            Moments to Remember
          </h3>
          <p className="max-w-xl mx-auto text-base md:text-lg font-body text-dark/80 leading-relaxed">
            A collection of moments captured between celebration, tradition, and timeless elegance.
          </p>
        </div>

        {/* SECTION 2: Hero Image (Landscape 16:9) */}
        <div className="w-full mb-24 md:mb-32 group cursor-pointer">
          <div className="w-full aspect-[16/9] overflow-hidden shadow-2xl bg-white/60 p-2 md:p-3 backdrop-blur-sm">
            <img 
              src="/images/gallery-1.jpg" 
              alt="Golden Hour Portrait" 
              className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <p className="mt-5 text-center text-sm md:text-base font-body italic text-gold">
            Golden Hour Portrait
          </p>
        </div>

        {/* SECTION 3: Portrait Spread (4:5 Ratio, Object-Top to save heads) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-24 md:mb-32">
          <div className="group cursor-pointer">
            <div className="w-full aspect-[4/5] overflow-hidden shadow-xl bg-white/60 p-2 backdrop-blur-sm">
              <img 
                src="/images/gallery-2.jpg" 
                alt="The Bride" 
                className="w-full h-full object-cover object-top transform transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <p className="mt-4 text-center text-sm md:text-base font-body italic text-gold">
              The Palace Courtyard
            </p>
          </div>
          <div className="group cursor-pointer">
            <div className="w-full aspect-[4/5] overflow-hidden shadow-xl bg-white/60 p-2 backdrop-blur-sm">
              <img 
                src="/images/gallery-3.jpg" 
                alt="The Groom" 
                className="w-full h-full object-cover object-top transform transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <p className="mt-4 text-center text-sm md:text-base font-body italic text-gold">
              Moments Before The Ceremony
            </p>
          </div>
        </div>

        {/* SECTION 4: Full Width Editorial Image (Landscape 16:9) */}
        <div className="w-full mb-24 md:mb-32 group cursor-pointer">
          <div className="w-full aspect-[16/9] overflow-hidden shadow-2xl bg-white/60 p-2 md:p-3 backdrop-blur-sm">
            <img 
              src="/images/gallery-4.jpg" 
              alt="The Mandap Details" 
              className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <p className="mt-5 text-center text-sm md:text-base font-body italic text-gold">
            The Mandap Details
          </p>
        </div>

        {/* SECTION 5: Final Mosaic Spread (Asymmetrical) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
          
          {/* Architecture - Portrait (4:5) */}
          <div className="md:col-span-5 group cursor-pointer">
            <div className="w-full aspect-[4/5] overflow-hidden shadow-xl bg-white/60 p-2 backdrop-blur-sm">
              <img 
                src="/images/gallery-5.jpg" 
                alt="Evening Elegance" 
                className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <p className="mt-4 text-center text-sm md:text-base font-body italic text-gold">
              Evening Elegance
            </p>
          </div>

          {/* Celebration - Landscape (3:2) */}
          <div className="md:col-span-7 group cursor-pointer">
            <div className="w-full aspect-[3/2] overflow-hidden shadow-xl bg-white/60 p-2 backdrop-blur-sm">
              <img 
                src="/images/gallery-6.jpg" 
                alt="An Evening Of Celebration" 
                className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <p className="mt-4 text-center text-sm md:text-base font-body italic text-gold">
              An Evening Of Celebration
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}