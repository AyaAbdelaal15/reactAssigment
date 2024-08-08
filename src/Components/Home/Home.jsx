import React from 'react'
import avatar from './../../assets/avatar.png'
const Home = () => {
  return (
  <div className='flex flex-col justify-center items-center bg-[#1ABC9C] text-white lg:p-52 md:p-36 sm:p-16 p-5 '>
    <img className='w-[30%] mb-3 md:mt-10 mt-28' src={avatar} alt="avatar" />
      <h1 className=' capitalize mb-3 font-bold sm:text-5xl text-3xl font[40px]'>start Framework</h1>
      <div className='flex justify-center items-center gap-5 text-white sm:text-2xl text-xl before:w-28 before:h-1 before:bg-white after:w-28 after:h-1 after:bg-white mb-2'>
      <i className="fa-solid fa-star"></i>
      </div>
      <div className='md:mb-0 mb-10 flex flex-nowrap'> <h4>Graphic Artist - Web Designer - Illustrator</h4> </div>
    </div>
  )
}

export default Home
