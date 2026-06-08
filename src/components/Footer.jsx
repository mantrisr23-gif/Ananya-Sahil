export default function Footer() {
  return (
    <footer className="relative w-full pt-[120px] pb-[140px] px-6 flex flex-col items-center bg-paper bg-cover bg-center overflow-hidden">
      
      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 bg-[url('/textures/grain.png')] opacity-5 pointer-events-none"></div>

      {/* Optional Luxury Touch: Structural Divider */}
      <div className="z-10 flex items-center justify-center w-full mb-[120px] opacity-40">
        <div className="w-16 md:w-24 h-[1px] bg-gold"></div>
        <span className="mx-4 text-gold text-[10px]">✦</span>
        <div className="w-16 md:w-24 h-[1px] bg-gold"></div>
      </div>

      <div className="z-10 flex flex-col items-center text-center w-full max-w-3xl mx-auto">
        
        {/* 1. Small Label */}
        <h2 className="text-[10px] md:text-xs tracking-[0.4em] text-gold uppercase mb-8 font-body font-semibold">
          With Gratitude
        </h2>

        {/* 2. Main Closing Statement */}
        <h3 className="text-4xl md:text-[4rem] font-display text-dark mb-12 md:mb-16 leading-tight">
          Thank You For <br className="hidden md:block" /> Celebrating With Us
        </h3>

        {/* 3. Ornament */}
        <div className="w-16 md:w-20 mb-12 md:mb-16 opacity-80">
          <img 
            src="/textures/gold-overlay.png" 
            alt="Ornament" 
            className="w-full h-auto object-contain"
          />
        </div>

        {/* 4. Couple Names */}
        <p className="text-3xl md:text-4xl font-display text-dark mb-8">
          Ananya <span className="text-gold italic font-body mx-2">&</span> Sahil
        </p>

        {/* 5. Event Details */}
        <div className="text-[10px] md:text-xs tracking-widest uppercase text-dark/70 font-body space-y-2">
          <p>December 11–13, 2026</p>
          <p>The Royal Palace</p>
          <p>Bhubaneswar, Odisha</p>
        </div>

        {/* 6. WhatsApp / Contact Button 
            Moved lower (mt-[80px]), smaller padding, less dominant text */}
        <a 
          href="#" 
          onClick={(e) => e.preventDefault()}
          className="mt-[80px] mb-[80px] inline-block px-[42px] py-[18px] border border-[#C9A14A] text-dark font-body tracking-[0.2em] uppercase text-[10px] hover:bg-[#B8923F] hover:border-[#B8923F] hover:text-white transition-all duration-300"
        >
          Contact The Couple
        </a>

        {/* 7. Final Bottom Line
            Tiny, tracked out, low opacity */}
        <p className="text-[10px] tracking-[0.25em] uppercase text-dark/60 font-body">
          For our family & friends
        </p>

      </div>
    </footer>
  );
}