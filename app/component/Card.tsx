import React from "react";
import Image from "next/image";
import Link from "next/link";
const Card = ({ card }) => {
  return (<>
  <Link href={`/${card.id}`}>
    <div className="rounded-[10px] bg-[#20242E] ">
      {/* Image */}
      <div className=" h-52">
        <Image
          src={card.image}
          alt={card.name}
          width={600}
          height={400}
          className="w-full h-full object-cover rounded-t-[10px]"
        />
      </div>
      {/* Card Body */}
      <div className="p-5">
        {/* Muscle Groups */}
      <div className="flex flex-col  sm:flex-row gap-2 mb-3">
  <span className="text-sm text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full">
    {card.muscleGroups[0]}
  </span>

  <span className={`text-sm text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full ${
    card.muscleGroups.length == 1 ? "hidden" : ""
  }`}>
    {card.muscleGroups[1]}
  </span>
</div>

        {/* Name */}
        <h2 className="text-xl font-bold text-white mb-2">
          {card.name}
        </h2>

        {/* Equipment */}
        <p className="text-gray-400 text-sm mb-4">
          {card.equipment}
        </p>

        {/* Horizontal Line */}
        <hr className="border-zinc-700 mb-4" />

        {/* Bottom Information */}
      <div className="flex flex-wrap justify-between gap-4 text-sm">
  <div>
    <p className="text-gray-500">TIME</p>
    <p className="text-white font-semibold">
      {card.duration} min
    </p>
  </div>

  <div>
    <p className="text-gray-500">CAL BURNED</p>
    <p className="text-white font-semibold">
      {card.caloriesBurned} kcal
    </p>
  </div>

  <div>
    <p className="text-gray-500">RATING</p>
    <p className="text-lime-400 font-semibold">
      ★ {card.rating}
    </p>
  </div>
</div>
      </div>
    </div></Link></>
  );
};

export default Card;
