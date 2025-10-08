import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GradientButton from "./GradientButton";

export default function VisionSection() {
  const [theme, setTheme] = useState(document.documentElement.getAttribute("data-theme"));

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.getAttribute("data-theme"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.section className="w-full p-6 pb-20 md:py-40 relative overflow-hidden" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[100%] h-[30%] rounded-full blur-[90px] opacity-25"
          style={{ background: "linear-gradient(to right, #73B492, #35E6CC)" }}
        ></div>
      </div>

      <div className="relative px-6 sm:px-16 lg:px-24 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        <h2 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl sm:leading-16 text-[var(--heading-color)]">
          Bringing Your Vision to Life
        </h2>
        <div>
          <p className="mb-8 text-gray text-md">Digital marketing is an art, and we are the artists. We have a special touch that ensures the right message reaches your audience through the appropriate media channels. Whether you have a new brand to promote, an older brand in need of revitalisation, or a thriving brand ready to grow even more, we are here to help.</p>
            <GradientButton text="Learn More" theme={theme} />
        </div>
      </div>
    </motion.section>
  );
}
