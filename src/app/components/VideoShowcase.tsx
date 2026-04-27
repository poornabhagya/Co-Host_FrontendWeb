import { PlayCircle } from "lucide-react";

export function VideoShowcase() {
  return (
    <section className="relative w-full h-[60vh] lg:h-[80vh] flex items-center justify-center overflow-hidden bg-[#023020]">
      
      {/* 🚀 Temporary Background Image (වීඩියෝ එක එනකම් පෙන්නන්න) */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-10000 hover:scale-105"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* Dark Green Overlay - අකුරු පැහැදිලිව පේන්න */}
      <div className="absolute inset-0 bg-[#023020]/50 z-10" />

      {/* Content Box */}
      <div className="relative z-20 flex flex-col items-center text-center px-6">
        
        {/* Play Icon */}
        <PlayCircle 
          size={72} 
          className="text-[#F5F5DC] mb-6 opacity-80" 
          strokeWidth={1} 
        />
        
        <h2
          className="text-[#F5F5DC] font-serif text-3xl lg:text-5xl mb-6 drop-shadow-md"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Cinematic Brand Video
        </h2>
        
        {/* Placeholder Indicator Badge */}
        <div className="inline-flex items-center gap-2 border border-[#F5F5DC]/40 bg-black/20 backdrop-blur-md px-4 py-2 rounded-sm">
          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
          <span 
            className="text-[#F5F5DC]/90 tracking-widest text-[10px] uppercase font-bold"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Temporary Placeholder
          </span>
        </div>

      </div>
    </section>
  );
}