export default function Story() {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-paper bg-cover bg-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/textures/grain.png')] opacity-5 pointer-events-none"></div>

      <div className="z-10 w-full flex flex-col items-center">
        
        {/* 1. Editorial Heading */}
        <h2 className="text-xs md:text-sm tracking-[0.4em] text-gold uppercase mb-12 font-body font-semibold">
          The Journey
        </h2>

        {/* 2. Opening Editorial Paragraph */}
        <p className="text-2xl md:text-4xl font-display text-dark text-center leading-relaxed md:leading-relaxed max-w-3xl mb-16 md:mb-24">
          What began as a simple conversation soon unfolded into a story filled with friendship, laughter, and a shared vision for the future.
        </p>

        {/* 3. Hero Story Image (Expanded scale, no frame) & Caption */}
        <div className="w-full max-w-6xl mb-16 md:mb-24 flex flex-col items-start">
          <div className="w-full h-[50vh] md:h-[75vh] shadow-2xl">
            <img 
              src="/images/story.jpg" 
              alt="Our Story" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          {/* Editorial Caption */}
          <p className="mt-4 text-[10px] md:text-xs tracking-widest uppercase text-dark/60 font-body font-semibold">
            Golden Hour • Royal Palace • December 2026
          </p>
        </div>

        {/* 4. Two-Column Magazine Text (Increased readability) */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-base md:text-lg font-body text-dark font-medium leading-loose text-justify">
          
          <div>
            <p className="mb-6">
              <span className="text-5xl float-left mr-4 mt-[-8px] font-display text-gold">I</span>
              t is often said that the best things in life are unexpected. Our journey did not begin with grand gestures, but rather in the quiet moments—a shared cup of coffee, endless conversations about our dreams, and the realization that we were looking at the world through the exact same lens. 
            </p>
            <p>
              As months turned into years, that foundation of absolute trust only deepened. We found ourselves navigating life’s complexities not as two individuals, but as a unified team, anchored by mutual respect and an unspoken understanding.
            </p>
          </div>

          <div>
            <p className="mb-6">
              The proposal was a reflection of everything we hold dear: private, elegant, and intimately ours. Surrounded by the gentle glow of twilight, time seemed to stand still as we made the easiest decision of our lives. 
            </p>
            <p>
              Now, as we stand on the threshold of this new chapter, we are not just planning a wedding; we are curating a celebration of the love, families, and traditions that have shaped us. We cannot wait to share this defining moment with you.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}