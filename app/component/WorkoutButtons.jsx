'use client'
import React from 'react';
import { useContext } from 'react';
import {WorkoutContext} from '../context/WorkoutContext';
import toast from "react-hot-toast";
const WorkoutButtons = ({card}) => {
      const {
    plannedWorkout,
    setPlannedWorkout,
    savedWorkout,
    setSavedWorkout,
  } = useContext(WorkoutContext);
const addToPlan = () => {
  const alreadyAdded = plannedWorkout.find(
    (workout) => workout.id === card.id
  );
 if (alreadyAdded) {
    toast.error("Already added in today's plan");
    return;
  }
  if (!alreadyAdded) {
    setPlannedWorkout([...plannedWorkout, card]);
      toast.success("Added to today's plan");
  }
};

 const saveForLater = () => {
  const alreadySaved = savedWorkout.find(
    (workout) => workout.id === card.id
  );
  if (alreadySaved) {
    toast.error("Already saved");
    return;
  }
  if (!alreadySaved) {
    setSavedWorkout([...savedWorkout, card]);
      toast.success("Saved for later");

  }
};


    return (
        <div>
              <div className="flex flex-col sm:flex-row gap-3">

            <button 
            onClick={addToPlan}
            className="flex-1 bg-lime-400 text-black font-semibold py-3 rounded-lg hover:bg-lime-300 transition">
                Add to today's plan
            </button>

            <button 
            onClick={saveForLater}
            className="flex-1 border border-gray-600 text-white font-semibold py-3 rounded-lg hover:bg-[#20242E] transition">
                Save for later
            </button>

        </div>
        </div>
    );
};

export default WorkoutButtons;