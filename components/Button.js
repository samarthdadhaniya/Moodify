import { Poppins } from "next/font/google";
import React from 'react';

// Move Poppins font loader to the module scope
const poppins = Poppins({ subsets: ["latin"], weight: ['600'] });

export default function Button(props) {
  const { text, dark } = props;

  return (
    <button
      className={
        'border-2 border-solid border-indigo-600 rounded-2xl overflow-hidden duration-300 ' +
        (dark
          ? 'bg-indigo-600 text-white hover:bg-white hover:text-indigo-600'
          : 'text-indigo-600 bg-white hover:bg-indigo-600 hover:text-white')
      }
    >
      <p className={'px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 ' + poppins.className}>{text}</p>
    </button>
  );
}