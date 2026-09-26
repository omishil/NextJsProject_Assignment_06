import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { WorkoutContext } from "../context/WorkoutContext";
import WorkoutButtons from '../component/WorkoutButtons'


const CardDetails = async ({ params }) => {

    const { cardId } = await params;

    const res = await fetch(
        `https://api.api-store.workers.dev/api/fitlog/${cardId}`
    );
if (!res.ok) {
  notFound();
}
    const card = await res.json();


    return (
        <div className=" bg-[#111318] text-white px-5 py-10">

            <div className="max-w-7xl mx-auto">

                {/* Main Details */}

                {/* Main Details */}

<div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-stretch">

    {/* Image */}

    <div className="lg:col-span-2">

        <Image
            src={card.image}
            alt={card.name}
            width={800}
            height={1000}
            className="w-full h-full min-h-[500px] object-cover rounded-2xl"
        />

    </div>


    {/* Right Side */}

    <div className="lg:col-span-3 flex flex-col">

        <h1 className="text-4xl font-bold mb-3">
            {card.name}
        </h1>

        <p className="text-gray-400 text-sm leading-6 mb-5">
            {card.description}
        </p>


        {/* Muscle Groups */}

        <div className="flex flex-wrap gap-2 mb-7">

            {card.muscleGroups.map(
                (muscle: string) => (

                    <span
                        key={muscle}
                        className="text-sm text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full"
                    >
                        {muscle}
                    </span>

                )
            )}

        </div>


        {/* Workout Information */}

        <div className="bg-[#20242E] rounded-xl mb-8">

            <div className="flex justify-between border-b border-gray-700 p-4">
                <p className="text-gray-400">Equipment</p>
                <p className="font-semibold">{card.equipment}</p>
            </div>

            <div className="flex justify-between border-b border-gray-700 p-4">
                <p className="text-gray-400">Difficulty</p>
                <p className="font-semibold">{card.difficulty}</p>
            </div>

            <div className="flex justify-between border-b border-gray-700 p-4">
                <p className="text-gray-400">Sets</p>
                <p className="font-semibold">{card.sets}</p>
            </div>

            <div className="flex justify-between border-b border-gray-700 p-4">
                <p className="text-gray-400">Reps</p>
                <p className="font-semibold">{card.reps}</p>
            </div>

            <div className="flex justify-between border-b border-gray-700 p-4">
                <p className="text-gray-400">Duration</p>
                <p className="font-semibold">{card.duration} min</p>
            </div>

            <div className="flex justify-between p-4">
                <p className="text-gray-400">Calories</p>
                <p className="font-semibold">{card.caloriesBurned} kcal</p>
            </div>

        </div>


        {/* Rating */}

        <div className="flex items-center gap-2 mb-8">

            <span className="text-yellow-400 text-lg">
                ★
            </span>

            <span className="font-semibold">
                {card.rating}
            </span>

            <span className="text-gray-500 text-sm">
                / 5
            </span>

        </div>


        {/* Instructions */}

        <div className="mb-8">

            <h2 className="text-2xl font-bold mb-5">
                Instructions
            </h2>

            <div className="space-y-3">

                {card.instructions.map(
                    (instruction: string, index: number) => (

                        <div
                            key={index}
                            className="bg-[#20242E] rounded-xl p-4"
                        >

                            <div className="flex gap-4">

                                <span className="text-lime-400 font-bold">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <p className="text-gray-300">
                                    {instruction}
                                </p>

                            </div>

                        </div>

                    )
                )}

            </div>

        </div>


        {/* Buttons */}

      <WorkoutButtons card={card} key={card.id}></WorkoutButtons>

    </div>

</div>
            </div>

        </div>
    );
};

export default CardDetails;