import { useEffect, useState } from "react";
import GradientButton from "./GradientButton";

const CoreServicesSection = () => {
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

  const services = [
    {
      number: "01",
      title: "Branding",
      desc: "Our branding services align your corporate image with your business goals. Combining data-driven market research with creative ingenuity, we create unique, engaging brand identities that resonate with your target audience.",
      btn: "Explore Our Branding Solution",
    },
    {
      number: "02",
      title: "Social Media Marketing",
      desc: "We design, build, launch, and manage your brand across platforms—fostering loyal and engaged audiences. Our strategies integrate seamlessly into your marketing plan to drive leads and sales.",
      btn: "See How We Manage Social Media",
    },
    {
      number: "03",
      title: "Search Engine Optimisation",
      desc: "Our SEO services boost organic traffic and enhance discoverability. By employing a mix of on-page and off-page tactics, we optimise your website for higher conversion rates and visibility.",
      btn: "Learn More About Our SEO Services",
    },
    {
      number: "04",
      title: "Search Engine Marketing",
      desc: "Our SEM strategies improve discoverability through ROI-driven targeting. We focus on long-tail keywords close to the point of sale, ensuring visibility among ready-to-convert buyers.",
      btn: "Discover Our SEM Strategies",
    },
  ];

  return (
    <section className="w-full bg-[var(--bg-primary)] text-[var(--text-primary)] pb-20 md:py-24 px-6 sm:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-12">
        {/* Left Side: Heading + Image */}
        <div className="w-full md:w-1/2 flex flex-col">
          <h2 className="text-3xl sm:text-5xl md:text-6xl text-[var(--heading-color)] mb-6">
            Our Core <br className="hidden md:block" /> Services
          </h2>
          <div className="relative w-full h-[460px] flex-1">
            <img
              src="/pixel-focus-media/assets/coreServices.png"
              alt="Core services background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        </div>

        {/* Right Side: Services List */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-10">
          {services.map((service, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-md sm:text-lg bg-gradient-to-r from-[#73B492] to-[#35E6CC] bg-clip-text text-transparent">
                    {service.number}
                </span>
                <div className="space-y-3">
                  <h3 className="text-md sm:text-lg text-[var(--heading-color)]">
                    {service.title}
                  </h3>
                  <p className="text-gray text-md">
                    {service.desc}
                  </p>
                  <div className="w-full ">
                    <div className="relative group flex items-center cursor-pointer">
                      <div className="rounded-md bg-gradient-to-r from-[#73B492] to-[#35E6CC] w-full h-10 flex items-center justify-center">
                        <div
                          className="flex items-center justify-between gap-1 px-4 py-3 w-[99%] h-[38px] rounded-md transition-colors duration-300"
                          style={{
                            background:
                              theme === "light" ? "#d4d4d4" : "#262626",
                          }}
                        >
                          <p className="text-xs transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-l group-hover:from-[#35E6CC] group-hover:to-[#73B492]">
                            {service.btn}
                          </p>
                          <i className="transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-l group-hover:from-[#35E6CC] group-hover:to-[#73B492] text-xl bi bi-arrow-right"></i>
                        </div>
                      </div>
                      <div className="rounded-tl-4xl rounded-bl-4xl absolute top-1.5 -left-1.5 w-[3px] h-3 bg-transparent group-hover:bg-[#73B492] transition-colors duration-300"></div>
                      <div className="rounded-tr-4xl rounded-br-4xl absolute bottom-1.5 -right-1.5 w-[2px] h-3 bg-transparent group-hover:bg-[#35E6CC] transition-colors duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServicesSection;
