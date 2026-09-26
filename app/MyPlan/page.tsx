'use client'
import { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
const MyPlan = () => {
    const {
  plannedWorkout,
    setPlannedWorkout,
  savedWorkout,
  setSavedWorkout,
  
} = useContext(WorkoutContext);

const [activeTab, setActiveTab] = useState("today");
const [sortedWorkout, setSortedWorkout] = useState("duration");




const currentWorkout =
  activeTab === "today" ? plannedWorkout : savedWorkout;




// make a cpy
const sorted = [...currentWorkout];

if (sortedWorkout === "duration") {
  sorted.sort((a, b) => b.duration - a.duration);
}

if (sortedWorkout === "calories") {
  sorted.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
}

if (sortedWorkout === "rating") {
  sorted.sort((a, b) => b.rating - a.rating);
}
const totalTime = currentWorkout.reduce(
  (sum, workout) => sum + workout.duration,
  0
);

const totalCal = currentWorkout.reduce(
  (sum, workout) => sum + workout.caloriesBurned,
  0
);


const removeWorkout= (id)=>{
    setPlannedWorkout(
  plannedWorkout.filter((workout) => workout.id !== id)
);
}
const removeSavedWorkout = (id) => {
  setSavedWorkout(
    savedWorkout.filter((workout) => workout.id !== id)
  );
};

// console.log(plannedWorkout);
  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-8">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">My Plan</h1>

        <p className="text-gray-500 text-sm sm:text-base mt-2">
          Cap of five reps for today, finish them, then load more.
        </p>
      </div>

      {/* Stats */}
      <div className="flex justify-around items-center border border rounded-2xl py-5 mb-8">
        <div className="text-center">
          <p className="text-gray-500 text-sm sm:text-base">Exercises</p>
          <p className="text-lime-400 font-bold text-lg sm:text-xl"> {currentWorkout.length}</p>
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm sm:text-base">Minutes</p>
          <p className="font-bold text-lg sm:text-xl">{totalTime}</p>
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm sm:text-base">Calories</p>
          <p className="font-bold text-lg sm:text-xl">{totalCal}</p>
        </div>
      </div>

      {/* Plan controls */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
        {/* Left buttons */}
        <div className="flex gap-2 border border py-1 rounded-[20px]">
         <button
  onClick={() => setActiveTab("today")}
  className={`px-4 py-2 rounded-full font-semibold text-sm ${
    activeTab === "today"
      ? "bg-lime-400 text-black"
      : "bg-gray-900"
  }`}
>
  Today's Plan
</button>

<button
  onClick={() => setActiveTab("saved")}
  className={`px-4 py-2 rounded-full border text-sm ${
    activeTab === "saved"
      ? "bg-lime-400 text-black" : "bg-gray-900"
  }`}
>
  Saved
</button>
        </div>

        {/* Right buttons */}
        <div className="flex gap-2  border border py-1 rounded-[20px]">
          <button className="px-4 py-2 rounded-full border text-sm">
            Sort By
          </button>
<select
  value={sortedWorkout}
  onChange={(e) => setSortedWorkout(e.target.value)}
  className="bg-gray-900 text-white px-4 py-2 rounded-full border text-sm "
>
  <option value="duration">Duration</option>
  <option value="calories">Calories</option>
  <option value="rating">Rating</option>
</select>
        </div>
      </div>

      {/* Empty state */}
      <div className={` ${currentWorkout.length===0?"block":"hidden"}    min-h-[300px] border rounded-xl flex flex-col justify-center items-center text-center px-4`}>
        <h2 className="font-bold text-xl sm:text-2xl mb-2">
          Nothing here yet
        </h2>

        <p className="text-gray-500 text-sm sm:text-base mb-6">
          Browse the library and add a lift to get today moving.
        </p>

        <Link 
        href={`/`}
        className="bg-lime-400 text-black font-semibold px-6 py-3 rounded-[20px]">
          Go to workouts
        </Link>
      </div>

{/* if not empty */}
<div
  className={`${currentWorkout.length === 0 ? "hidden" : "block"} min-h-[300px] border rounded-xl p-4`}
>
  {sorted.map((workout) => (
    <div
      key={workout.id}
      className="flex justify-between items-center gap-4"
    >

      <div className="flex items-center gap-4">

        <Image
          src={workout.image}
          alt={workout.name}
          width={600}
          height={600}
          className="w-24 h-24 object-cover rounded-lg"
        />

        <div>
          <h3 className="font-bold text-lg">
            {workout.name}
          </h3>

          <p className="text-gray-400 text-sm">
            {workout.equipment}
          </p>

          <div className="flex gap-4 text-sm text-gray-400 mt-2">
            <span>{workout.duration} min</span>
            <span>{workout.caloriesBurned} kcal</span>
            <span>★ {workout.rating}</span>
          </div>
        </div>

      </div>

   <div className="flex flex-col sm:flex-row items-center gap-2">

  <Link
    href={`/${workout.id}`}
    className="border px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-sm"
  >
    View Details
  </Link>

{activeTab === "today" ? (
  <button
    onClick={() => {
      removeWorkout(workout.id);
      toast.success("Workout marked as done!");
    }}
    className="bg-lime-400 text-black px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-sm"
  >
    ✓ Mark as Done
  </button>
) : ""}

  <button
    onClick={() =>{
    if (activeTab === "today") {
      removeWorkout(workout.id);
    } else {
      removeSavedWorkout(workout.id);
    }

    toast.success("Workout removed!");
  }
    }
    className="text-red-400 text-lg sm:text-xl px-1 sm:px-2"
  >
    ×
  </button>

</div>

    </div>
  ))}
</div>

    </section>
  );
};

export default MyPlan;

