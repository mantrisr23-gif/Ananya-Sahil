import { weddingData } from '../data/weddingData';

export default function Cover() {
  return (
    // Reduced top padding (pt-8 md:pt-10) to bring the whole composition up
    <section className="relative w-full min-h-screen flex flex-col items-center pt-8 md:pt-10 px-4 md:px-8 pb-12 overflow-hidden">
      
      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 bg-[url('/textures/grain.png')] opacity-5 pointer-events-none"></div>

      <div className="z-10 flex flex-col items-center text-center w-full max-w-4xl mx-auto flex-grow">
        
        {/* 1. Single Gold Ornament (Scaled down slightly to match tighter spacing) */}
        <div className="w-20 md:w-28 mb-5">
          <img 
            src="/textures/gold-overlay.png" 
            alt="Royal Ornament" 
            className="w-full h-auto object-contain"
          />
        </div>

        {/* 2. Pre-heading */}
        <h2 className="text-xs md:text-sm tracking-[0.35em] text-gold uppercase mb-3 font-body font-semibold">
          The Wedding Of
        </h2>
        
        {/* 3. Main Names (Reduced by ~15% from 8xl so it doesn't overwhelm) */}
        <h1 className="text-6xl md:text-[6.5rem] font-display text-dark mb-3 leading-none">
          {weddingData.bride} <span className="text-gold italic font-body text-5xl md:text-[5.5rem] mx-2">&</span> {weddingData.groom}
        </h1>
        
        {/* 4. Date (Reduced bottom margin from mb-10 to mb-8 to pull image up) */}
        <p className="text-sm md:text-base font-body text-gold font-medium tracking-widest uppercase mb-6 md:mb-8">
          {weddingData.date}
        </p>

       {/* =========================================
            IMAGE BORDER TEST
            ========================================= */}

        {/* VERSION A: Printed Photo Style (Active) 
            Changed to max-w-[600px] and h-auto. 
            This guarantees 0% cropping while keeping the section height elegant. */}
        <div className="w-full max-w-[600px] relative shadow-2xl p-3 md:p-4 bg-white/60 backdrop-blur-md mx-auto mb-8 md:mb-12">
          <img 
            src="/images/cover.jpg" 
            alt="Palace Balcony" 
            className="w-full h-auto border border-gold/30 block"
          />
        </div>
        {/* VERSION B: Pure Editorial Magazine Style (Commented Out)
            To test, comment out Version A above, and uncomment this block:

        <div className="w-full max-w-3xl relative flex-grow max-h-[65vh] md:max-h-[720px] shadow-2xl">
          <img 
            src="/images/cover.jpg" 
            alt="Palace Balcony" 
            className="w-full h-full object-cover object-top"
          />
        </div>
        */}

      </div>
    </section>
  );
}