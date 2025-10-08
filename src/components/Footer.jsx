import { useEffect, useState } from "react";

const Footer = () => {
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

  const footerLinks = [
    {
      title: "Site Map",
      links: [
        "Home",
        "Behind The Pixels",
        "Branding",
        "Social Media Marketing",
        "SEO",
        "SEM",
        "Contact Us",
      ],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms & Conditions", "Cookie Policy"],
    },
    {
      title: "Contact Information",
      links: ["Address: XCOMPANYADDRESSX"],
    },
  ];

  return (
    <footer
      className={`w-full px-6 sm:px-16 lg:px-24 py-16 ${
        theme === "light"
          ? "text-black"
          : "bg-[var(--bg-primary)] text-gray"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Side (Logo + Description) */}
        <div className="lg:w-[35%] space-y-4">
          <div className="flex items-center gap-3">
            <img className="h-14" src="/pixel-focus-media/assets/logo.png" alt="logo" />
            <h3 className="text-xl montserrat font-bold tracking-wider text-[#5C5A5A]">
              PIXEL <span className="block sm:inline text-[#689A83]">FOCUS</span>{" "}
              MEDIA
            </h3>
          </div>
          <p className="text-sm text-gray max-w-md leading-relaxed">
            Digital marketing is an art, and we are the artists. We have a
            special touch that ensures the right message reaches your audience
            through the appropriate media channels. Whether you have a new brand
            to promote or a thriving brand ready to grow even more, we are here
            to help.
          </p>
        </div>

        {/* Right Side (Links) */}
        <div className="lg:w-[65%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {footerLinks.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h4
                className={`text-lg ${
                  theme === "light"
                    ? "text-gray"
                    : "text-white"
                }`}
              >
                {section.title}
              </h4>
              <ul className="space-y-2 text-gray">
                {section.links.map((link, i) => (
                  <li
                    key={i}
                    className="cursor-pointer text-sm hover:none select-none"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
