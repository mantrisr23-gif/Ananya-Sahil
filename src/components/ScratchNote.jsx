import { useRef, useEffect, useState } from 'react';

export default function ScratchNote() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set actual size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // 1. Luxury Gold Foil Gradient (Rich, multi-stop metallic feel)
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#D8B45A');   
    gradient.addColorStop(0.35, '#C9A14A'); 
    gradient.addColorStop(0.65, '#B98D32');   
    gradient.addColorStop(1, '#E0C06B');   
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Center Instruction (Subtle, elegant)
    ctx.font = 'italic 1.2rem "Cormorant Garamond"';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.85)'; 
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✦ Scratch Here ✦', canvas.width / 2, canvas.height / 2);
  }, []);

  const startDrawing = (e) => {
    setIsDrawing(true);
    scratch(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const scratch = (e) => {
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    // Erase the foil
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    // Reduced brush size (20) for the "coin scratching" effect
    ctx.arc(x, y, 20, 0, Math.PI * 2); 
    ctx.fill();
  };

  return (
    <section className="relative w-full py-24 px-6 flex flex-col items-center bg-paper bg-cover bg-center">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-xs md:text-sm tracking-[0.4em] text-gold uppercase mb-3 font-body font-semibold">
          A Final Note
        </h2>
      </div>

      {/* The Physical Card Container 
          Added inset shadow for physical edge and sharp drop shadow */}
      <div className="relative w-full max-w-[500px] h-[350px] md:h-[400px] mx-auto bg-[#F8F3EA] border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.4)] flex items-center justify-center p-10 select-none overflow-hidden">
        
        {/* THE REVEAL: Handwritten Note (Increased vertical hierarchy) */}
        <div className="text-center z-0 w-full">
          <p className="text-xl md:text-2xl font-display text-dark leading-relaxed mb-8">
            Dear Guest,
          </p>
          
          <p className="text-lg md:text-xl font-body italic text-dark/80 leading-loose mb-10">
            Thank you for being part of our journey. <br/>
            We look forward to celebrating with you.
          </p>
          
          {/* Authentic Handwritten Signature */}
          <p 
            className="text-5xl md:text-6xl text-gold" 
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Ananya & Sahil
          </p>
        </div>

        {/* THE COVER: Gold Foil Canvas */}
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseUp={stopDrawing}
          onMouseOut={stopDrawing}
          onMouseMove={scratch}
          onTouchStart={startDrawing}
          onTouchEnd={stopDrawing}
          onTouchMove={scratch}
          className="absolute inset-0 w-full h-full cursor-crosshair touch-none z-10"
        />
      </div>

    </section>
  );
}