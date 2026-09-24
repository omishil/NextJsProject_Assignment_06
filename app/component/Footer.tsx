import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-black flex flex-col sm:flex-row justify-between items-center gap-3 px-6 sm:px-8 md:px-12 py-6">
      {/* Left Side */}
      
    <div className="flex items-center gap-2">
  <Image
    src="/logo.png"
    alt="FitLog Logo"
    width={32}
    height={32}
  />

  <h2 className="text-white font-bold text-lg">
    FITLOG
  </h2>
</div>

      {/* Right Side */}
      <p className="text-gray-400 text-xs sm:text-sm text-center max-w-[90%] sm:max-w-none">
        © 2026 FitLog — Workout Library. Train hard, log honest.
      </p>
    </footer>
  );
};

export default Footer;
