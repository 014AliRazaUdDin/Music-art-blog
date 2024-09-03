import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'

function HeroSection() {
  return (
    <div
        className='h-auto md:h-[40rem] w-full rounded-md flex flex-col  items-center justify-center relative overflow-hidden mx-auto py-10 md:p-0'
    >
         <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <div className='p-4 relative z-10 w-full text-center'>
            <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text  bg-gradient-t0-b from-neutral-50 to-neutral-400'>Master the art of musix</h1>
            <p className='mt-4 font-normal text-base  md:text-lg text-neutral-300 max-w-lg mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam adipisci, iusto veniam temporibus natus vel accusamus provident sed fuga reprehenderit maiores officia enim. Dicta laboriosam, earum porro hic, ullam exercitationem numquam eaque ipsa, quis consequatur consectetur voluptates maiores dolore magnam.</p>
            <div className='mt-4 p-1'>
                <Link href={"/courses"}> 
                    <Button 
                    borderRadius='1.75rem'
                    
                    className="bg-white dark:bg-black text-black dark:text-white  border-neutral-200     dark:border-slate-800 "
                    >Explore Courses</Button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
