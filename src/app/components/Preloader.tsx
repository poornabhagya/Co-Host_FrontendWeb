import { useEffect, useState } from "react";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let isMounted = true;

    //  Loader එක අයින් කරන Function එක
    const hideLoader = () => {
      if (!isMounted) return;
      setFadeOut(true);
      setTimeout(() => {
        if (isMounted) setIsLoading(false);
      }, 800);
    };

    //  Images සහ Videos ඔක්කොම ලෝඩ් වෙලාද බලන Function එක
    const checkMediaAndHide = () => {
      const images = Array.from(document.images);
      const videos = Array.from(document.querySelectorAll("video"));

      // Images ලෝඩ් වෙනකම් බලන් ඉන්නවා
      const imagePromises = images.map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve; // Error ආවත් හිර වෙන්නෙ නැතුව ඉස්සරහට යන්න
        });
      });

      // Videos (Background videos) ප්ලේ කරන්න පුළුවන් මට්ටමට එනකම් බලන් ඉන්නවා
      const videoPromises = videos.map((vid) => {
        if (vid.readyState >= 3) return Promise.resolve(); // 3 = HAVE_FUTURE_DATA
        return new Promise((resolve) => {
          vid.oncanplaythrough = resolve;
          vid.onerror = resolve;
        });
      });

      // ඔක්කොම Media ලෝඩ් වුණාට පස්සේ Loader එක අයින් කරනවා
      Promise.all([...imagePromises, ...videoPromises]).then(() => {
        hideLoader();
      });
    };

    // සයිට් එකේ Initial DOM එක රෙඩි නම් Media චෙක් කරනවා
    if (document.readyState === "complete") {
      checkMediaAndHide();
    } else {
      window.addEventListener("load", checkMediaAndHide);
    }

    //  Fallback: ලොකු වීඩියෝ එකක් නිසා සයිට් එක හිර වුණොත්, තත්පර 8කින් අනිවාර්යයෙන් අයින් කරනවා
    const fallbackTimer = setTimeout(hideLoader, 8000);

    return () => {
      isMounted = false;
      window.removeEventListener("load", checkMediaAndHide);
      clearTimeout(fallbackTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[999999] bg-[#023020] flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <img 
        src="./logo.png" 
        alt="Co-Host Ceylon" 
        className="h-20 sm:h-28 mb-8 animate-pulse object-contain" 
      />
      
      <div className="relative flex justify-center items-center">
        <div className="absolute w-12 h-12 border-2 border-[#F5F5DC]/10 rounded-full"></div>
        <div className="w-12 h-12 border-2 border-transparent border-t-[#F5F5DC] rounded-full animate-spin"></div>
      </div>
    </div>
  );
}