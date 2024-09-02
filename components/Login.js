import { Poppins } from 'next/font/google';
import React from 'react'
import Button from './Button';

const poppins = Poppins({ subsets: ["latin"], weight:['600'] });

export default function Login() {
  return (
    <div className='flex flex-col flex-1 justify-center items-center gap-4'>
      <h3 className={'text-3xl sm:text-5xl md:text-6xl ' + poppins.className}> Login / Register </h3>
      <p>You are just one stap away..!</p>
      <input className='w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-indigo-700 focus:border-indigo-700 py-2 sm:py-3 border border-solid border-indigo-400 rounded-2xl outline-none' placeholder='Email' />
      <input className='w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-indigo-700 focus:border-indigo-700 py-2 sm:py-3 border border-solid border-indigo-400 rounded-2xl outline-none' placeholder='Password' type='password'/>
      <div className='max-w-[400px] w-full mx-auto'>
        <Button text="Submit" full/>
      </div>
      <p className='text-center'>Don&#39;t have an Account ? <span className='text-indigo-600 '>Sign Up</span></p>
    </div>
  )
}
