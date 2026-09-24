import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="bg-black flex flex-row justify-between items-center px-6 sm:px-8 md:px-12 py-12 sm:py-16">
      {/* Left Side */}
      <div className="w-1/2">
        <p className="text-lime-400 font-semibold uppercase tracking-wide mb-3 sm:mb-4 text-sm sm:text-base">
          Workout Library
        </p>

        <h1 className="text-white font-bold text-2xl sm:text-4xl md:text-5xl uppercase leading-tight mb-4 sm:mb-6">
          Train with intent. <br />
          Log every set.
        </h1>

        <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
          Fitlog is a dark, no-nonsense gym companion: pick a lift, log it into
          today's plan, and watch the weeks work add up.
        </p>

        <button className="bg-lime-400 text-black font-semibold px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base uppercase">
          Browse Workouts
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-[25%] h-[50%] sm:w-[50%]">
        <Image
          src="/banner.png"
          alt="Workout"
          width={600}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Banner;