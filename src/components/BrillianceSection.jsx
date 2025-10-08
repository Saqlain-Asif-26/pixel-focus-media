import { useEffect, useState } from "react";
import GradientButton from "./GradientButton";


const BrillianceSection = () => {
const [theme, setTheme] = useState(document.documentElement.getAttribute("data-theme"));

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.getAttribute("data-theme"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

    return (
    <section className="w-full bg-[var(--bg-primary)] text-[var(--text-primary) pb-20 md:pb-30 px-6 sm:px-16 lg:px-24">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    

    {/* left Content */}
    <div className="w-full md:w-1/2 space-y-6">
      <div className="inline-block relative px-6 py-1.5 rounded-full text-sm font-medium text-white">
        <span className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-[#73B492] to-[#35E6CC]"></span>
        <span className="absolute inset-0.5 rounded-full bg-[var(--bg-primary)]"></span>
        <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#73B492] to-[#35E6CC]">
          Brilliance
        </span>
      </div>
      <h2 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl md:leading-18 text-[var(--heading-color)]">
        Partnering for Brand Brilliance
      </h2>
      <p className="text-gray text-md">
        Your brand defines how the market perceives you and is invaluable. We understand its importance and are honoured to help it grow. Our collaborative approach ensures we are aligned with your vision before moving forward to elevate your brand to its fullest potential.
      </p>
      <GradientButton text="Learn More" theme={theme} />
    </div>
      {/* right Image */}
    <div className="relative w-full md:w-1/2 h-80 sm:96 md:h-[460px]">
      <img
        src="/pixel-focus-media/assets/plantLaptop.png"
        alt="Plant and Laptop"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60"></div> {/* darkness overlay */}
    </div>
  </div>
</section>

  );
};

export default BrillianceSection;
