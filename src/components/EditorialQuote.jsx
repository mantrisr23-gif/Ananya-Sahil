export default function EditorialQuote() {
  return (
    <section className="relative w-full min-h-[40vh] md:min-h-[50vh] flex flex-col items-center justify-center py-20 px-6 md:px-12 bg-paper bg-cover bg-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/textures/grain.png')] opacity-5 pointer-events-none"></div>

      <div className="z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        
        {/* Ornament moved above the text */}
        <div className="w-16 md:w-20 opacity-80 mb-8">
          <img 
            src="/textures/gold-overlay.png" 
            alt="Ornament Divider" 
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Refined Two-Line Format without quotes */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-dark leading-normal md:leading-snug">
          Two hearts, <br className="hidden md:block" />
          <span className="italic text-gold">one extraordinary celebration.</span>
        </h2>

      </div>
    </section>
  );
}