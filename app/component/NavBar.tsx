import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="bg-black flex justify-between items-center px-3 sm:px-8 py-3 sm:py-4">
      {/* Left */}
      <div className="flex items-center gap-1 sm:gap-2">
        <Image
          src="/logo.png"
          alt="FitLog Logo"
          width={32}
          height={32}
          className="max-[450px]:w-6 max-[450px]:h-6"
        />

        <h2 className="text-white font-bold text-lg max-[450px]:text-sm">
          FITLOG
        </h2>
      </div>

      {/* Middle */}
      <div className="flex flex-col min-[451px]:flex-row gap-1 min-[451px]:gap-8">
        <Link
          href="/"
          className="text-gray-400 text-base max-[450px]:text-xs"
        >
          Workouts
        </Link>

        <Link
          href="/MyPlan"
          className="text-gray-400 text-base max-[450px]:text-xs"
        >
          My Plan
        </Link>
      </div>

      {/* Right */}
      <div className="flex flex-col min-[451px]:flex-row gap-1 min-[451px]:gap-6">
        <p className="text-gray-400 text-base max-[450px]:text-xs">
          Plan
        </p>

        <p className="text-gray-400 text-base max-[450px]:text-xs">
          Saved
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
