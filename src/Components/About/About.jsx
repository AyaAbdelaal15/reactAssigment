import React from 'react'
const About = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center bg-[#1ABC9C] text-white lg:p-52 md:p-36 p-16'>
      <h2 className=' capitalize md:mb-3 mb-6 font-bold sm:text-4xl text-3xl md:mt-3 mt-24'> about component</h2>
      <div className='flex justify-center items-center sm:gap-5 gap-2 text-white text-2xl before:w-28 before:h-1 before:bg-white after:w-28 after:h-1 after:bg-white sm:mb-7 mb-10'>
      <i className="fa-solid fa-star"></i>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-16 gap-y-10">
        <div>
        <p className=''>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div>
        <p className=''>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        
        {/* <p className=''>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p> */}
      </div>
      
    </div>
    </>
  )
}

export default About