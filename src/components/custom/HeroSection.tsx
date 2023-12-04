 import React from 'react'
 import Image from 'next/image'
 import heroSection from "@/assets/heroSection.jpg"
 
 function HeroSection() {
   return (
     <main id='top'className='min-h-screen flex justify-start items-center sm:justify-center sm:items-center 
     relative top-0 left-0   bottom-0 '>
       <div>  
        <Image src={heroSection} alt='Hero section image' width={400} height={400} 
        className=' h-[65rem]  w-full absolute z-[-1] top-0 left-0 blur-sm '
        />
       </div>

       <div className=' flex font-sans flex-col flex-wrap items-start justify-center sm:items-center mb-20  mx-6'>
         <h1 className='text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl  bg-black p-2 rounded-xl cursor-pointer'>
          Welcome to my Blogs site
        </h1>
         <p className=' text-white sm:text-black sm:bg-white text-xl font-bold  sm:text-2xl xl:text-4xl sm:font-semibold  my-4  sm:px-4 sm:my-6 cursor-pointer '>
          Read blogs to increase your knowledge and increase your productivity
        </p>
         <span><button className='px-4 sm:px-8 md:px-10 py-1 text-white text-xl sm:text-2xl md:text-3xl xl:text-4xl border border-white rounded-xl sm:rounded-sm hover:border-none
          hover:bg-yellow-500 hover:text-gray-900 hover:duration-300 hover:font-semibold hover:delay-100 '>
            Learn More</button></span>
       </div>

     </main>
   )
 }
 
 export default HeroSection