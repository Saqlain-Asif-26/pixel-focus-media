import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GradientButton from "./GradientButton";

const GetStartedSection = () => {
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
      className="relative w-full pb-24 px-6 sm:px-16 lg:px-24 text-center" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }}
    >
      {/* Content */}
      <div className="relative max-w-4xl mx-auto space-y-8">
        <h2
          className={`text-3xl sm:text-5xl md:text-6xl ${
            theme === "light"
              ? "text-[#0B0B0B]"
              : "text-[var(--heading-color)]"
          }`}
        >
          Let&apos;s Get Started
        </h2>

        <p
          className='max-w-4xl mx-auto text-md text-gray'
        >
          Pixel Focus Media is ready to embark on your brand&apos;s journey.
          We look forward to partnering with you to achieve your marketing goals.
        </p>

        {/* Button */}
        <div className="flex justify-center pt-4">
          <div className="relative group flex items-center cursor-pointer">
            <div className="rounded-md bg-gradient-to-r from-[#73B492] to-[#35E6CC] w-60 sm:w-72 h-10 flex items-center justify-center">
              <div
                className="flex items-center justify-between gap-1 px-4 py-3 w-[238px] sm:w-[286px] h-[38px] rounded-md transition-colors duration-300"
                style={{
                  background: theme === "light" ? "#d4d4d4" : "#262626",
                }}
              >
                <p className="text-xs sm:text-sm transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-l group-hover:from-[#35E6CC] group-hover:to-[#73B492]">
                  Contact Us Today To Begin
                </p>
                <i className="transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-l group-hover:from-[#35E6CC] group-hover:to-[#73B492] text-xl bi bi-arrow-right"></i>
              </div>
            </div>
            <div className="rounded-tl-4xl rounded-bl-4xl absolute top-1.5 -left-1.5 w-[3px] h-3 bg-transparent group-hover:bg-[#73B492] transition-colors duration-300"></div>
            <div className="rounded-tr-4xl rounded-br-4xl absolute bottom-1.5 -right-1.5 w-[2px] h-3 bg-transparent group-hover:bg-[#35E6CC] transition-colors duration-300"></div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default GetStartedSection;
