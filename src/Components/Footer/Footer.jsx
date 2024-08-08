import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#2C3E50] font-sans text-center text-white ">
        <div className="container px-6 py-12 mx-auto mb-16 pt-20">
            <div className='flex md:flex-row flex-col gap-y-12'>
                <div className='flex-col basis-1/3 '>
                    <h3 className='text-[28px]'>LOCATION</h3>
                    <p className='mt-3 mb-3 text-[16px]'> 2215 John Daniel Drive</p>
                    <p className='text-[16px]'>Clark, MO 65243</p>
                </div>
                <div className='flex-col basis-1/3 '>
                    <h3 className='text-[28px]'>AROUND THE WEB</h3>
                   <div className="icons flex mt-5 justify-center items-center gap-x-3 text-white text-lg ">
                   <i className="fa-brands fa-facebook  rounded-full p-2 border-white border-solid border bg-transparent"></i>
                   <i className="fa-brands fa-twitter rounded-full p-2 border-white border-solid border bg-transparent"></i>
                   <i className="fa-brands fa-linkedin-in rounded-full p-2 border-white border-solid border bg-transparent"></i>
                   <i className="fa-solid fa-globe rounded-full p-2 border-white border-solid border bg-transparent"></i>
                   </div>
                </div>
                <div className='flex-col basis-1/3 '>
                    <h3 className='text-[28px]'>ABOUT FREELANCER</h3>
                    <p className='mt-3 text-[16px]'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
        </div>
        <div className='bg-[#1A252F] p-10'>
            <p>Copyright © Your Website 2021</p>
        </div>
    </footer>
  )
}

export default Footer
