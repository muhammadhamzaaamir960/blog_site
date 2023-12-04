import Link from 'next/link'
import Image from 'next/image'
import logo from "@/assets/logo.svg"
import React from 'react'
import { Linkedin, Facebook, Instagram,Twitter } from 'lucide-react'

function Footer() {
  return (
    <footer className='min-h-[22rem] w-full'>
        <div className='min-h-[1.8rem] bg-stone-400 '>
            <a href='#top' className='  flex justify-center items-center max-h-[5rem] h-[1.8rem] text-white text-lg sm:text-xl font-semibold italic '>
              Back to Top
            </a>
        </div>

        <div className='min-h-[20rem] bg-stone-600 flex flex-wrap justify-center border-t-4 border-yellow-500'>

          <div className=" m-10 w-2/5 sm:w-1/4 min-h-[100px] ">
            <Link href={'./'} className=' cursor-pointer  '>
              <Image src={logo} alt='logo' width={400} height={400} className='h-14 w-14 ' />
            </Link>
            <p className="text-white text-xl mt-6 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur autem porro dolores adipisci ad consequatur architecto
            facilis minus voluptas distinctio, sunt, velit magni reiciendis mollitia beatae quos labore dignissimos nobis.
            </p>
          </div>

          <div className=" w-2/5 sm:w-1/4 min-w-[20px]  m-10 flex flex-col items-center  justify-center">
            <h3 className="mb-6 mt-2 text-3xl font-medium hover:underline hover:underline-offset-4 cursor-pointer text-yellow-600 ">
              Links</h3>
              <Link href={'/'} className=" text-xl text-white font-medium hover:underline hover:duration-100 ">
                Blogs
              </Link>

              <Link href={'/'} className="  text-xl text-white font-medium hover:underline my-4 ">
                About
              </Link>

              <Link href={'/'} className=" ml-4 text-xl text-white font-medium hover:underline">
                Contact
              </Link>
            </div>

          <div className="w-2/5 mt-6 sm:mt-20 mx-4">
           <div className="flex flex-wrap justify-center items-center pb-4 border-b border-yellow-600 mb-6 gap-5">
            <span className="text-3xl self-center mt-2 mr-6 font-medium text-yellow-600">Social Links: </span>
              <Linkedin size={35} color="white" className='block  cursor-pointer'/>
              <Twitter  size={35} color="white" className=' block  cursor-pointer '/>
              <Facebook size={35} color="white" className=' block cursor-pointer '/>
              <Instagram size={35} color="white" className=' block  cursor-pointer  '/>
           </div>

          <form className="bg-inherit rounded-xl flex min-w-2xl max-w-3xl self-end mb-6 mr-6 flex-wrap justify-center">
            <input
              type="email"
              placeholder="Email Address"
              required
              id="email"
              className="outline-0 flex-1 border-2  mb-4 border-yellow-700 rounded-full h-8 placeholder:text-center placeholder:text-xl placeholder-yellow-700 placeholder:italic block"
            />
            <button type="submit" className="bg-yellow-700 outline-0 hover:border ml-2 px-4  rounded-full text-white text-lg sm:text-2xl h-8">
              Subscribe
            </button>
          </form>
        </div>

        </div>

        <div className='bg-stone-800 min-h-[1.8rem] border-t-2  flex flex-col justify-center items-center'>
          <span className=' text-white text-sm sm:text-lg'>Designed by Hamza</span> 
          <span className=' text-white text-sm sm:text-lg'>&copy; copyright 2023, All rights reserved</span>
        </div>

    </footer>
  )
}

export default Footer
