export default function GradientButton({ text = "Learn More", theme }) {
  return (
    <div className="relative group inline-flex items-center cursor-pointer">
      <div className="rounded-md bg-gradient-to-r from-[#73B492] to-[#35E6CC] w-44 h-10 flex items-center justify-center">
        <div
          className="flex items-center justify-between gap-1 px-4 py-3 w-[174px] h-[38px] rounded-md transition-colors duration-300"
          style={{
            background: theme === "light" ? "#d4d4d4" : "#262626",
          }}
        >
          <p className="transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-l group-hover:from-[#35E6CC] group-hover:to-[#73B492]">
            {text}
          </p>
          <i className="transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-l group-hover:from-[#35E6CC] group-hover:to-[#73B492] text-xl bi bi-arrow-right"></i>
        </div>
      </div>
      <div className="rounded-tl-4xl rounded-bl-4xl absolute top-1.5 -left-1.5 w-[3px] h-3 bg-transparent group-hover:bg-[#73B492] transition-colors duration-300"></div>
      <div className="rounded-tr-4xl rounded-br-4xl absolute bottom-1.5 -right-1.5 w-[2px] h-3 bg-transparent group-hover:bg-[#35E6CC] transition-colors duration-300"></div>
    </div>
  );
}
