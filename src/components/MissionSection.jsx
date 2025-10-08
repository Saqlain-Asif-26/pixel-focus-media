import { useEffect, useState } from "react";
import GradientButton from "./GradientButton";

const MissionSection = () => {
  const [theme, setTheme] = useState(document.documentElement.getAttribute("data-theme"));

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.getAttribute("data-theme"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-[var(--bg-primary)] text-[var(--text-primary)] pb-20 md:pb-30 px-6 sm:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="relative w-full md:w-1/2 h-80 sm:h-96 md:h-[460px] md:order-1 order-2">
          <img
            src="/pixel-focus-media/assets/groupPic.png"
            alt="Team working on project"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 space-y-6 md:order-2 order-1">
          <div className="inline-block relative px-6 py-1.5 rounded-full text-sm font-medium text-white">
            <span className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-[#73B492] to-[#35E6CC]"></span>
            <span className="absolute inset-0.5 rounded-full bg-[var(--bg-primary)]"></span>
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#73B492] to-[#35E6CC]">
              Our Mission
            </span>
          </div>

          <h2 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl md:leading-18 text-[var(--heading-color)]">
            Your Brand is Our Mission
          </h2>

          <p className="text-gray text-md">
            At the heart of everything we do is a commitment to our clients. We begin with an in-depth understanding of your products, services, and vision. Our mission is to craft targeted messages and content that cut through the noise, focusing on increased recognition and market share for your company.
          </p>

          <GradientButton text="Learn More" theme={theme} />
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
