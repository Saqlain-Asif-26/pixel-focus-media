import React, { useEffect, useState } from "react";

function HeroSection() {
  const [theme, setTheme] = useState("dark");

  // Sync theme with <html data-theme="...">
  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    setTheme(currentTheme || "dark");

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.getAttribute("data-theme"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-x-hidden -z-9">
      <div className="my-20">
  <div>
    <h1 className="outline tracking-wider font-extrabold text-[40px] sm:text-7xl md:text-8xl lg:text-[145px] leading-tight sm:leading-[1.1] outline-gradient-to-l from-[#35E6CC] to-[#73B492]">SEO</h1>
  </div>

  <div className="flex justify-center">
    <h1 className="tracking-wider font-extrabold text-[40px] sm:text-7xl md:text-8xl lg:text-[145px] leading-tight sm:leading-[1.1] bg-gradient-to-l from-[#35E6CC] to-[#73B492] bg-clip-text text-transparent">BRANDING</h1>
  </div>

  <div className="flex justify-end">
    <h1 className="outline tracking-wider font-extrabold text-[40px] sm:text-7xl md:text-8xl lg:text-[145px] leading-tight sm:leading-[1.1] outline-gradient-to-l from-[#35E6CC] to-[#73B492]">SEM</h1>
  </div>
</div>

      {/* Glowing Logo changes by theme */}
      <div className="absolute top-9 right-0">
        <img
          className="w-xs sm:w-sm"
          src={
            theme === "dark"
            ? "/pixel-focus-media/assets/whiteGlowingLogo.png"
            : "/pixel-focus-media/assets/darkGlowingLogo.png"
          }
          alt="Glowing Logo"
        />
      </div>
    </div>
  );
}

export default HeroSection;
