export default function Timeline() {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-paper bg-cover bg-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/textures/grain.png')] opacity-5 pointer-events-none"></div>

      <div className="z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Section Header */}
        <h2 className="text-xs md:text-sm tracking-[0.4em] text-gold uppercase mb-6 font-body font-semibold">
          The Itinerary
        </h2>
        <h3 className="text-5xl md:text-7xl font-display text-dark mb-8 leading-tight">
          A Weekend of <br className="hidden md:block" /> Celebration
        </h3>

        {/* Editorial Introduction */}
        <p className="max-w-xl mx-auto text-base md:text-lg font-body text-dark/80 leading-relaxed mb-20">
          We invite you to join us for three unforgettable days of tradition, joy, and evening revelry as we honor our families and begin our new chapter together.
        </p>

        {/* The Events */}
        <div className="w-full flex flex-col">
          
          {/* Event 1 */}
          <div className="flex flex-col items-center">
            <p className="text-sm md:text-base font-body tracking-[0.2em] text-gold uppercase mb-4">
              Friday, December 11
            </p>
            <h4 className="text-3xl md:text-5xl font-display text-dark mb-4">
              The Welcome Dinner
            </h4>
            <p className="text-base md:text-lg font-body text-dark/80 italic">
              7:00 PM • The Royal Courtyard
            </p>
          </div>

          {/* Structural Divider */}
          <div className="flex items-center justify-center w-full my-12 md:my-16 opacity-50">
            <div className="w-16 md:w-24 h-[1px] bg-gold"></div>
            <span className="mx-4 text-gold text-[10px]">✦</span>
            <div className="w-16 md:w-24 h-[1px] bg-gold"></div>
          </div>

          {/* Event 2 */}
          <div className="flex flex-col items-center">
            <p className="text-sm md:text-base font-body tracking-[0.2em] text-gold uppercase mb-4">
              Saturday, December 12
            </p>
            <h4 className="text-3xl md:text-5xl font-display text-dark mb-4">
              The Wedding Ceremony
            </h4>
            <p className="text-base md:text-lg font-body text-dark/80 italic">
              4:00 PM • The Palace Gardens
            </p>
          </div>

          {/* Structural Divider */}
          <div className="flex items-center justify-center w-full my-12 md:my-16 opacity-50">
            <div className="w-16 md:w-24 h-[1px] bg-gold"></div>
            <span className="mx-4 text-gold text-[10px]">✦</span>
            <div className="w-16 md:w-24 h-[1px] bg-gold"></div>
          </div>

          {/* Event 3 */}
          <div className="flex flex-col items-center">
            <p className="text-sm md:text-base font-body tracking-[0.2em] text-gold uppercase mb-4">
              Sunday, December 13
            </p>
            <h4 className="text-3xl md:text-5xl font-display text-dark mb-4">
              The Grand Reception
            </h4>
            <p className="text-base md:text-lg font-body text-dark/80 italic">
              8:00 PM • The Grand Ballroom
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}