'use client'

import React, { createContext, useState } from 'react';

export const WorkoutContext= createContext();


const WorkoutProvider = ({children}) => {

const [plannedWorkout,setPlannedWorkout]= useState([])
const [savedWorkout,setSavedWorkout]= useState([])



    return (
        <div>
            <WorkoutContext.Provider
            value={
                {plannedWorkout,
                setPlannedWorkout
                , savedWorkout,
                setSavedWorkout,}
            }

         
            >   {children}

            </WorkoutContext.Provider>
        </div>
    );
};

export default WorkoutProvider;