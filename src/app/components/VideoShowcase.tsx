

export function VideoShowcase() {
  return (
    // 🚀 වෙනස්කම 1: මෙතන තිබ්බ `bg-[#023020]` (තද කොළ බැක්ග්‍රවුන්ඩ් එක) අයින් කරලා බැක්ග්‍රවුන්ඩ් එක transparent හෝ white (සාමාන්‍ය වෙබ්සයිට් බැක්ග්‍රවුන්ඩ් එක) කළා.
    <section className="relative w-full h-[60vh] lg:h-[80vh] flex items-center justify-center overflow-hidden bg-white"> 
      
      {/* Video Element */}
      <video
        className="absolute inset-0 w-full h-full object-contain z-0" // original original site display wenna hadanna, 'object-contain' continue karanawa.
        autoPlay
        loop
        muted
        playsInline
        controls={false}
      >
        <source src="/Co-Host_FrontendWeb/video/3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🚀 වෙනස්කම 2: වීඩියෝ එක උඩින් කොළ පාටට පේන Overlay දිව් (div) එක මෙතන තිබ්බා. මම ඒක සම්පූර්ණයෙන්ම අයින් කරලා දැම්මා. */}

      {/* Content Box */}
      <div className="relative z-20 flex flex-col items-center text-center px-6">
        
        {/* Content Box example content (e.g., text or play icon to keep structure, though usually overlay is meant to dull video for text, user wants raw video now) */}
        {/* <h1 className="text-white text-4xl">Title Over Video</h1> */}
        {/* Content usually dulls raw video if white text is needed, keep in mind for design */}

      </div>
    </section>
  );
}