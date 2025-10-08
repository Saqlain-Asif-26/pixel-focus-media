import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FooterEnd = () => {
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute("data-theme")
  );

  useEffect(() => {
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
    <motion.section
      className={`relative w-full px-6 sm:px-16 lg:px-24 py-8 ${
        theme === "light" ? "text-black" : "bg-[var(--bg-primary)] text-gray-300"
      }`} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6 w-full">
        {/* Top Line */}
        <div
          className={`w-full h-px ${
            theme === "light" ? "bg-gray-600" : "bg-[#2A2A2A]"
          }`}
        ></div>

        {/* Scrollable Text */}
        <div
          className="w-full overflow-x-auto overflow-y-hidden"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <h2
            className={`text-nowrap text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider uppercase inline-block ${
              theme === "light" ? "text-[#0B0B0B]" : "text-white"
            }`}
          >
            BRANDING - SOCIAL MEDIA MARKETING - SEO - SEM
          </h2>

          {/* Hide scrollbar for WebKit */}
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>

        {/* Bottom Line */}
        <div
          className={`w-full h-px ${
            theme === "light" ? "bg-gray-600" : "bg-[#2A2A2A]"
          }`}
        ></div>

        {/* Copyright */}
        <p
          className="text-xs sm:text-sm tracking-wider text-gray self-start"
        >
          ©2024 PIXEL FOCUS MEDIA. ALL RIGHTS RESERVED
        </p>
      </div>
    </motion.section>
  );
};

export default FooterEnd;
