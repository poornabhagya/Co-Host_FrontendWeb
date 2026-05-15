export function VideoShowcase() {
  return (
    <section 
  id="video-section" 
  // 🚀 අගට තිබ්බ snap-center එක snap-start කළා!
  className="relative w-full aspect-[4/5] md:aspect-auto md:h-screen flex items-center justify-center overflow-hidden bg-[#023020] snap-start"
>
      
      {/* 📱 MOBILE VIDEO (Phone වල විතරක් පේනවා) */}
      <video
        // 🚀 දැන් ආයෙත් object-cover දාන්න පුළුවන්, මොකද Section එකේ හැඩයමයි වීඩියෝ එකේ හැඩයත්
        className="absolute inset-0 w-full h-full object-cover z-0 block md:hidden"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
      >
        <source src="/Co-Host_FrontendWeb/video/for_mobile.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 💻 DESKTOP VIDEO (ටැබ් සහ ලැප්ටොප් වල විතරක් පේනවා) */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
      >
        <source src="/Co-Host_FrontendWeb/video/full_screen.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Green Overlay (ඔයාගේ overlay code එක මෙතන යටින් තියන්න) */}

    </section>
  );
}