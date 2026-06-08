export default function RSVP() {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-paper bg-cover bg-center overflow-hidden">
      
      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 bg-[url('/textures/grain.png')] opacity-5 pointer-events-none"></div>

      <div className="z-10 relative flex flex-col items-center">
        
        {/* SECTION HEADER */}
        <h2 className="text-xs md:text-sm tracking-[0.4em] text-gold uppercase mb-6 font-body font-semibold text-center">
          The RSVP
        </h2>
        
        <h3 className="text-4xl md:text-[4.5rem] font-display text-dark mb-6 leading-tight text-center max-w-4xl">
          We Would Be Honored <br className="hidden md:block" /> By Your Presence
        </h3>
        
        <p className="max-w-[600px] mx-auto text-base md:text-lg font-body text-dark/80 leading-relaxed text-center mb-10">
          Your presence will make our celebration complete. Kindly let us know if you will be joining us for this unforgettable weekend.
        </p>

        {/* Decorative Divider */}
        <div className="w-[70px] opacity-80 mb-16">
          <img 
            src="/textures/gold-overlay.png" 
            alt="Ornament Divider" 
            className="w-full h-auto object-contain"
          />
        </div>

        {/* ELEGANT FORM CARD */}
        <div className="w-full max-w-[760px] bg-white/45 backdrop-blur-md border border-gold/25 shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 md:p-16 rounded-none">
          <form className="flex flex-col space-y-10" onSubmit={(e) => e.preventDefault()}>
            
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col">
                <label className="text-xs tracking-widest uppercase text-dark/60 font-body mb-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-transparent border-b border-dark/20 py-2 text-dark font-body focus:outline-none focus:border-gold transition-colors placeholder:text-dark/30 rounded-none"
                />
              </div>
              
              <div className="flex flex-col">
                <label className="text-xs tracking-widest uppercase text-dark/60 font-body mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-transparent border-b border-dark/20 py-2 text-dark font-body focus:outline-none focus:border-gold transition-colors placeholder:text-dark/30 rounded-none"
                />
              </div>
            </div>

            {/* Guests Row */}
            <div className="flex flex-col">
              <label className="text-xs tracking-widest uppercase text-dark/60 font-body mb-2">Number of Guests</label>
              <select className="w-full bg-transparent border-b border-dark/20 py-2 text-dark font-body focus:outline-none focus:border-gold transition-colors appearance-none rounded-none cursor-pointer">
                <option value="" disabled defaultValue>Select Guests</option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
              </select>
            </div>

            {/* Attendance Radio Buttons */}
            <div className="flex flex-col">
              <label className="text-xs tracking-widest uppercase text-dark/60 font-body mb-6">Attendance</label>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <div className="w-4 h-4 border border-gold flex items-center justify-center rounded-full group-hover:bg-gold/10 transition-colors">
                    <div className="w-2 h-2 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="font-body text-dark/80 text-lg">Joyfully Accepts</span>
                </label>
                
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <div className="w-4 h-4 border border-gold flex items-center justify-center rounded-full group-hover:bg-gold/10 transition-colors">
                    <div className="w-2 h-2 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="font-body text-dark/80 text-lg">Regretfully Declines</span>
                </label>
              </div>
            </div>

            {/* Message Area */}
            <div className="flex flex-col">
              <label className="text-xs tracking-widest uppercase text-dark/60 font-body mb-2">Leave a note for the couple (Optional)</label>
              <textarea 
                rows="3"
                placeholder="Your Message..." 
                className="w-full bg-transparent border-b border-dark/20 py-2 text-dark font-body focus:outline-none focus:border-gold transition-colors placeholder:text-dark/30 resize-none rounded-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-8 flex justify-center w-full">
              <button 
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-[#B8923F] hover:bg-[#91712c] text-white font-body tracking-[0.2em] uppercase text-sm transition-colors shadow-lg"
              >
                Confirm Attendance
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}