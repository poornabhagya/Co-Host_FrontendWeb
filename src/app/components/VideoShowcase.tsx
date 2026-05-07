import { PlayCircle } from "lucide-react";

export function VideoShowcase() {
  return (
    <section className="relative w-full h-[60vh] lg:h-[80vh] flex items-center justify-center overflow-hidden bg-[#023020]">
      
      {/* Video Element */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
      >
        <source src="/Co-Host_FrontendWeb/video/3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Green Overlay */}
      <div className="absolute inset-0 bg-[#023020]/40 z-10" />

      {/* Content Box */}
      <div className="relative z-20 flex flex-col items-center text-center px-6">
        
        {/* Play Icon */}
        
        
        

      </div>
    </section>
  );
}