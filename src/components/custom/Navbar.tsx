import React from 'react'
import Image from "next/image"
import logo from "@/assets/logo.svg"
import Link from "next/link"
import {Search,Menu} from "lucide-react"

function Navbar() {
  return (
        <nav className='flex items-center justify-between bg-gray-900 min-h-[52px] sm:min-h-[64px] z-10 sticky top-0 left-0 right-0'>
                {/* logo */}
            
                <div className=' ml-4 sm:ml-10 w-[20%] sm:w-[10%] '>  
                    <Link href={'./'} className=' cursor-pointer block '>
                    <Image src={logo} alt='logo' width={400} height={400} className='h-14 w-14  block' />
                    </Link>
                </div>

                {/* search bar */}
                <span className=' sm:max-w-4xl md:flex-1 sm:mr-10  text-end m-4 w-[50%]'>
                    <label className=' hidden sm:flex bg-white rounded-full py-1 sm:py-2 px-2 sm:px-4 border-4 border-yellow-500'>
                    <input type="text" placeholder='Search'
                    className='text-black w-full bg-transparent outline-0  sm:placeholder:text-xl' />
                    <div className='flex justify-end'>
                    <Search color="black" size={25} className='cursor-pointer' />
                    </div>
                    </label>
                    <div className='flex justify-end justify-self-end   '>
                    <Search color="white" size={35} className=' cursor-pointer sm:hidden  '/>
                    </div>
                    
                </span>/  

                {/* Menu */}
                <div className='w-30% ' >
                    <ul className='hidden sm:flex space-x-8 mr-20 ml-6'>
                        <li><Link href={'/'} className='text-white font-medium text-xl lg:text-2xl hover:underline hover:underline-offset-4 hover:duration-100'>Blogs</Link></li>
                        <li><Link href={'/'} className='text-white mx-4 font-medium text-xl lg:text-2xl hover:underline hover:underline-offset-4 hover:duration-100'>About</Link></li>
                        <li><Link href={'/'} className='text-white  font-medium text-xl lg:text-2xl hover:underline hover:underline-offset-4 hover:duration-100'>Contact</Link></li>
                    </ul>
                    <Menu color="white" size={35} className=' cursor-pointer sm:hidden mr-6' />
                </div>

            </nav>
        

  )
}

export default Navbar
              