import { Poppins } from "next/font/google";
import React from 'react'
import Button from "./Button";
import Calendar from "./Calendar";

const poppins = Poppins({ subsets: ["latin"], weight:['700'] });

export default function Hero() {
  return (
    <div className='py-4 md:py-10 flex flex-col gap-2 sm:gap-6'>
      <h1 className={'text-5xl sm:text-text-5xl md:text-6xl text-center leading-tight md:leading-snug ' + poppins.className}>
        <span className="textGradient">Moodify</span> helps you to track your <span className="textGradient">Daily </span> Mood..!
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-center w-full px-10 mx-auto max-w-[750px]">
        Create your mood record and see how you feel on <span className="font-semibold">every day of the every Year.</span>
      </p>
      <div className="mt-5 grid grid-cols-2 gap-4 w-[60%] mx-auto">
        <Button text="Sign Up" />
        <Button text="Log In" dark/>
      </div>
      <Calendar />
    </div>
  )
}
