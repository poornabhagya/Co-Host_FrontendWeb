export function VideoShowcase() {
  return (
    <section 
      id="video-section" 
      // 🚀 h-[60vh] අයින් කරලා h-screen දැම්මා. snap-center එකතු කළා.
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#023020] snap-center"
    >
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

    </section>
  );
}