import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  // toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // keep initial theme in sync with data-theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="mx-8 sm:mx-16 md:mx-22 my-8 z-9999">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img className="h-14" src="/pixel-focus-media/assets/logo.png" alt="logo" />
          <h3 className="text-xl montserrat font-bold tracking-wider text-[#5C5A5A]">
            PIXEL <span className="block sm:inline text-[#689A83]">FOCUS</span>{" "}
            MEDIA
          </h3>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 z-99">
          {/* Theme toggle */}
          <i
            onClick={toggleTheme}
            className={`cursor-pointer text-3xl transition-all duration-500 ease-in-out ${
              theme === "dark" ? "bi bi-moon-stars" : "bi bi-sun"
            }`}
          ></i>

          {/* Menu toggle (hamburger only) */}
          <i
            onClick={() => setMenuOpen(true)}
            className="cursor-pointer text-4xl bi bi-list"
          ></i>
        </div>
      </div>

      {/* Overlay Menu */}
<div
  className={`z-99 overflow-auto hide-scrollbar fixed top-0 left-0 w-full h-full bg-[var(--bg-primary)] text-[var(--text-primary)] transform transition-transform duration-900 ease-in-out
    ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}
>
  {/* Use same padding/margin as navbar */}
  <div className="mx-8 sm:mx-16 md:mx-22 my-8 flex flex-col h-full">
    {/* Top bar inside overlay */}
    <div className="flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img className="h-14" src="/pixel-focus-media/assets/logo.png" alt="logo" />
        <h3 className="text-xl montserrat font-bold tracking-wider text-[#5C5A5A]">
            PIXEL <span className="block sm:inline text-[#689A83]">FOCUS</span>{" "}
            MEDIA
          </h3>
      </div>

      {/* Icons (theme + close) */}
      <div className="flex items-center gap-6">
        <i
          onClick={toggleTheme}
          className={`cursor-pointer text-3xl transition-all duration-500 ease-in-out ${
            theme === "dark" ? "bi bi-moon-stars" : "bi bi-sun"
          }`}
        ></i>
        <i
          onClick={() => setMenuOpen(false)}
          className="cursor-pointer text-5xl bi bi-x"
        ></i>
      </div>
    </div>

    {/* Links center (responsive) */}
<div className="flex flex-col items-end justify-start my-8 md:my-[56px] md:justify-center gap-6 sm:gap-8 md:gap-16 flex-1">
{[
  "Home",
  "Behind The Pixels",
  "Branding",
  "Social Media Marketing",
  "SEO",
  "SEM",
  "Contact Us",
].map((item) => (
  <a
    key={item}
    href="#"
    className="relative group 
               text-xl sm:text-3xl md:text-5xl lg:text-8xl 
               px-2 sm:px-0 
               mx-1 sm:mx-0"
  >
    {/* Text */}
    <span
      className="
        bg-gradient-to-b from-[#131313] to-[#2F2F2F] 
        bg-clip-text text-transparent
        transition-all duration-500 
        group-hover:bg-gradient-to-r group-hover:from-[#73B492] group-hover:to-[#35E6CC]"
    >
      {item}
    </span>

    {/* Curved Underline */}
    <svg
      className="absolute left-0 -bottom-14 w-full h-[60px]"
      viewBox="0 0 10 10"
      preserveAspectRatio="none"
    >
      <path
        d="M0,5 C4,1 6,2 10,2"
        className="stroke-[0.8] stroke-[#35E6CC] fill-none transition-all duration-500 ease-out scale-x-0 origin-left group-hover:scale-x-100"
      ></path>
    </svg>
  </a>
))}

</div>


  </div>
</div>

    </div>
  );
}

export default Navbar;
