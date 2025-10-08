import React, { useEffect, useState } from "react";

const WhyChooseUs = () => {
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

  const features = [
    {
      img: "/pixel-focus-media/assets/strategyIcon.png",
      title: "Tailored Strategies",
      desc: "We create bespoke marketing strategies that align perfectly with your business goals.",
    },
    {
      img: "/pixel-focus-media/assets/teamIcon.png",
      title: "Expert Team",
      desc: "Our team of experienced professionals is dedicated to delivering exceptional results.",
    },
    {
      img: "/pixel-focus-media/assets/globalPartner.png",
      title: "Long-term Partnerships",
      desc: "We believe in building lasting relationships with our clients.",
    },
    {
      img: "/pixel-focus-media/assets/scalableIcon.png",
      title: "Scalable Services",
      desc: "Our services are designed to grow with your business.",
    },
  ];

  return (
    <section
      className={`relative w-full pb-10 px-6 sm:px-16 lg:px-24 overflow-hidden ${
        theme === "light"
          ? "text-black"
          : "text-white"
      }`}
    >
      {/* Background Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[100%] h-[30%] rounded-full blur-[90px] opacity-25"
          style={{ background: "linear-gradient(to right, #73B492, #35E6CC)" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center space-y-4 sm:space-y-8 md:space-y-16">
        {/* Heading */}
        <div className="space-y-0">
          <div className="inline-block relative px-6 py-1.5 rounded-full text-sm font-medium text-white">
            <span className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-[#73B492] to-[#35E6CC]"></span>
            <span className="absolute inset-0.5 rounded-full bg-[var(--bg-primary)]"></span>
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#73B492] to-[#35E6CC]">
              Why Choose Us
            </span>
          </div>
          <h2
            className={`text-3xl pt-8 sm:text-5xl md:text-6xl max-w-[80%] mx-auto ${
              theme === "light"
                ? "text-[#0B0B0B]"
                : "text-[var(--heading-color)]"
            }`}
          >
            Why Choose Pixel Focus Media?
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-300 rounded-2xl p-8 flex flex-col text-start space-y-4 ${
                theme === "light"
                  ? "bg-[#F2F2F2]/70"
                  : "bg-[#121212]/30"
              }`}
            >
              <img src={item.img} alt={item.title} className="w-10 h-auto" />
              <h3
                className={`text-lg ${
                  theme === "light" ? "text-[#111]" : "text-white"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`text-sm ${
                  theme === "light" ? "text-gray-700" : "text-gray"
                }`}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
