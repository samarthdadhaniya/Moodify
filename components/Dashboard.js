import { Poppins } from 'next/font/google';
import React from 'react'
const poppins = Poppins({ subsets: ["latin"], weight: ['600'] });

export default function Dashboard() {
  
  const statuses = {
    num_of_days : 14,
    time_remaining: '13:14:26',
    date: (new Date()).toDateString()
  }

  const moods = {
    '&*@#$': '😭',
    'Sad': '🥲',
    'Existing': '😶',
    'Good': '😊',
    'Elated': '😍',
  }
  
  return (
    <div className='flex flex-1 flex-col gap-4 sm:gap-8 md:gap-12'>
      <div className='grid grid-cols-1 sm:grid-cols-3 bg-indigo-50 text-indigo-500 rounded-lg'>
        {Object.keys(statuses).map((status, status_Index) => {
          return(
            <div key={status_Index} className='p-4 flex flex-col gap-1 sm:gap-2'>
              <p className='font-medium uppercase text-xs sm:text-sm'>{status.replaceAll('_',' ')}</p>
              <p className={'text-base sm:text-lg ' + poppins.className}>{statuses[status]}</p>
            </div>
          )
        })}
      </div>
      <h4 className={'text-4xl sm:text-5xl md:text-6xl text-center ' + poppins.className}>
        How do you <span className='textGradient'>feel</span> today..?
      </h4>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>

      </div>
    </div>
  )
}
