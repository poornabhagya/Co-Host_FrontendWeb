import { useEffect, useState } from "react";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // 🚀 Loader එක අයින් කරන Function එක
    const hideLoader = () => {
      setFadeOut(true); // මුලින්ම Fade out වෙන්න පටන් ගන්නවා
      setTimeout(() => setIsLoading(false), 800); // Fade out වෙලා ඉවර වුණාම සම්පූර්ණයෙන්ම අයින් කරනවා
    };

    // 🚀 සයිට් එකේ ඔක්කොම ලෝඩ් වෙලාද බලනවා
    if (document.readyState === "complete") {
      hideLoader();
    } else {
      window.addEventListener("load", hideLoader);
    }

    // 🚀 Fallback: මොනවා හරි හිර වුණොත්, තත්පර 3කින් කොහොමත් ලෝඩර් එක අයින් කරනවා (සයිට් එක හිර වෙන එක නවත්තන්න)
    const fallbackTimer = setTimeout(hideLoader, 3000);

    return () => {
      window.removeEventListener("load", hideLoader);
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
      {/* 🚀 ලෝගෝ එක (මේක ලාවට පත්තු වෙනවා වගේ පේන්න animate-pulse දාලා තියෙන්නේ) */}
      <img 
        src="./logo.png" 
        alt="Co-Host Ceylon" 
        className="h-20 sm:h-28 mb-8 animate-pulse object-contain" 
      />
      
      {/* 🚀 Loading Wheel එක (Beige පාටින් කැරකෙන රවුම) */}
      <div className="relative flex justify-center items-center">
        <div className="absolute w-12 h-12 border-2 border-[#F5F5DC]/10 rounded-full"></div>
        <div className="w-12 h-12 border-2 border-transparent border-t-[#F5F5DC] rounded-full animate-spin"></div>
      </div>
    </div>
  );
}