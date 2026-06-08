import { useState, useRef, useEffect } from 'react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-6 right-6 z-[100]">
      <button 
        onClick={togglePlay}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-md border border-gold/30 text-gold hover:bg-gold hover:text-white transition-all duration-300 shadow-lg"
      >
        {isPlaying ? '⏸' : '♪'}
      </button>
      <audio ref={audioRef} loop>
        <source src="/audio/wedding-theme.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
