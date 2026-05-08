



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

        <source src="/Co-Host_FrontendWeb/video/final.mp4" type="video/mp4" />

        Your browser does not support the video tag.

      </video>



      {/* Dark Green Overlay */}

      





    </section>

  );

}