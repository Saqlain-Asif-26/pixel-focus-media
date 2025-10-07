export default function MouseScroll() {
  return (
    <div className="flex flex-col items-center my-20">
      {/* Heading */}
      <h2 className="text-[var(--text-primary)] text-lg md:text-3xl mb-6 text-center">
        Delivering Results Through Digital Marketing
      </h2>

      {/* Mouse container */}
      <div className="w-11 h-20 py-4 border border-[var(--border-color)] rounded-full flex justify-center items-start group relative overflow-hidden">

        {/* dot wrapper: moves down on hover */}
        <div className="relative w-3 h-3 rounded-full transition-transform duration-700 ease-in-out group-hover:translate-y-9">
          
          {/* Solid theme dot — always visible */}
          <div className="absolute inset-0 rounded-full bg-[var(--dot-color)] transition-opacity duration-700 ease-in-out group-hover:opacity-0"></div>
          
          {/* Gradient dot — hidden until hover */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-l from-[#35E6CC] to-[#73B492] opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"></div>
        
        </div>
      </div>


      {/* Text */}
      <p className="text-[var(--text-secondary)] text-xs mt-4">
        Scroll Down
      </p>
    </div>
  );
}
