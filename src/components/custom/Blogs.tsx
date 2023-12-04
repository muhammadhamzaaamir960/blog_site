import React from 'react'
import Image from 'next/image'
import blog1 from "@/assets/blog1.jpg"

function Blogs() {
  return (
    <section className='min-h-screen bg-gradient-to-t from-gray-100 to-rose-100 bg-gray-300 flex justify-center items-center  '>
      <div className='bg-white w-11/12 m-20 rounded-xl shadow-xl flex flex-col justify-center items-center'>
        <h2 className=' text-3xl text-center sm:text-4xl md:text-5xl lg:text-6xl font-semibold mt-8 cursor-pointer'>Our Featured Blogs</h2>
        <div className=' w-10/12 flex flex-wrap justify-evenly gap-y-10 sm:gap-14 my-14'>

          <div className='w-[28rem] max-w-[30rem] m-2 bg-stone-300 p-4 rounded-xl shadow-xl flex flex-col items-center'>
            <Image src={blog1} alt='blog image' width={400} height={400}
            className='p-2 hover:scale-105 hover:delay-150 hover:duration-500 cursor-pointer'/>
            <h3 className=' text-start text-3xl font-bold hover:delay-150 hover:duration-500 hover:underline hover:underline-offset-4 cursor-pointer mt-4'>Blog title 1</h3>
            <p className=' text-lg overflow-hidden text-start my-4 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate quas sequi totam cumque, explicabo aperiam commodi vitae quasi quod unde, ullam temporibus doloribus similique voluptates voluptas nihil deserunt repudiandae omnis.</p>
            <button className='px-6 border  rounded-xl text-xl font-medium text-white bg-gray-500
              hover:bg-gray-700 hover:delay-100 hover:duration-300'>
              Read More</button>
          </div>
          

          <div className='w-[28rem] max-w-[30rem] m-2 bg-stone-300 p-4 rounded-xl shadow-xl flex flex-col items-center  '>
            <Image src={blog1} alt='blog image' width={400} height={400}
            className='p-2 hover:scale-105 hover:delay-150 hover:duration-500 cursor-pointer'/>
            <h3 className=' text-start text-3xl font-bold hover:delay-150 hover:duration-500 hover:underline hover:underline-offset-4 cursor-pointer mt-4'>Blog title 2</h3>
            <p className=' text-lg text-ellipsis overflow-hidden text-start my-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate quas sequi totam cumque, explicabo aperiam commodi vitae quasi quod unde, ullam temporibus doloribus similique voluptates voluptas nihil deserunt repudiandae omnis.</p>
            <button className='px-6 border  rounded-xl text-xl font-medium text-white bg-gray-500
              hover:bg-gray-700 hover:delay-100 hover:duration-300'>
              Read More</button>
          </div>
          

          <div className='w-[28rem] max-w-[30rem] m-2 bg-stone-300 p-4 rounded-xl shadow-xl flex flex-col items-center '>
            <Image src={blog1} alt='blog image' width={400} height={400}
            className='p-2 hover:scale-105 hover:delay-150 hover:duration-500 cursor-pointer'/>
            <h3 className='  text-3xl font-bold hover:delay-150 hover:duration-500 hover:underline hover:underline-offset-4 cursor-pointer mt-4'>Blog title 3</h3>
            <p className='text-lg text-ellipsis overflow-hidden text-start my-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate quas sequi totam cumque, explicabo aperiam commodi vitae quasi quod unde, ullam temporibus doloribus similique voluptates voluptas nihil deserunt repudiandae omnis.</p>
            <button className='px-6 border  rounded-xl text-xl font-medium text-white bg-gray-500
              hover:bg-gray-700 hover:delay-100 hover:duration-300'>
              Read More</button>
          </div>


          <div className='w-[28rem] max-w-[30rem] m-2 bg-stone-300 p-4 rounded-xl shadow-xl flex flex-col items-center  '>
            <Image src={blog1} alt='blog image' width={400} height={400}
            className='p-2 hover:scale-105 hover:delay-150 hover:duration-500 cursor-pointer'/>
            <h3 className=' text-start text-3xl font-bold hover:delay-150 hover:duration-500 hover:underline hover:underline-offset-4 cursor-pointer mt-4'>Blog title 4</h3>
            <p className=' text-lg text-ellipsis overflow-hidden text-start my-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate quas sequi totam cumque, explicabo aperiam commodi vitae quasi quod unde, ullam temporibus doloribus similique voluptates voluptas nihil deserunt repudiandae omnis.</p>
            <button className='px-6 border  rounded-xl text-xl font-medium text-white bg-gray-500
              hover:bg-gray-700 hover:delay-100 hover:duration-300'>
              Read More</button>
          </div>


          <div className='w-[28rem] max-w-[30rem]  m-2 bg-stone-300 p-4 rounded-xl shadow-xl flex flex-col items-center  '>
            <Image src={blog1} alt='blog image' width={400} height={400}
            
            className='p-2 hover:scale-105 hover:delay-150 hover:duration-500 cursor-pointer'/>
            <h3 className=' text-start text-3xl font-bold hover:delay-150 hover:duration-500 hover:underline hover:underline-offset-4 cursor-pointer mt-4'>Blog title 5</h3>
            <p className=' text-lg text-ellipsis overflow-hidden text-start my-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate quas sequi totam cumque, explicabo aperiam commodi vitae quasi quod unde, ullam temporibus doloribus similique voluptates voluptas nihil deserunt repudiandae omnis.</p>
            <button className='px-6 border  rounded-xl text-xl font-medium text-white bg-gray-500
              hover:bg-gray-700 hover:delay-100 hover:duration-300'>
              Read More</button>
          </div>


          <div className=' w-[28rem] max-w-[30rem] m-2 bg-stone-300 p-4 rounded-xl shadow-xl flex flex-col items-center  '>
            <Image src={blog1} alt='blog image' width={400} height={400}
            className='p-2 hover:scale-105 hover:delay-150 hover:duration-500 cursor-pointer'/>
            <h3 className=' text-start text-3xl font-bold hover:delay-150 hover:duration-500 hover:underline hover:underline-offset-4 cursor-pointer mt-4'>Blog title 6</h3>
            <p className=' text-lg text-ellipsis overflow-hidden text-start my-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate quas sequi totam cumque, explicabo aperiam commodi vitae quasi quod unde, ullam temporibus doloribus similique voluptates voluptas nihil deserunt repudiandae omnis.</p>
            <button className='px-6 border  rounded-xl text-xl font-medium text-white bg-gray-500
              hover:bg-gray-700 hover:delay-100 hover:duration-300'>
              Read More</button>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Blogs
