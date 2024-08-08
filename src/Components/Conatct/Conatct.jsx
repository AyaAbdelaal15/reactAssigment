import React from 'react'

const Conatct = () => {
  return (
    <div className="flex flex-col justify-center items-center p bg-[#fff] text-[#2C3E50] lg:p-52 md:p-36 p-16">
        <h2 className='capitalize md:mb-3 mb-6 font-bold sm:text-4xl text-2xl md:mt-3 mt-24'>conatct section</h2>    
        <div className='flex justify-center items-center gap-5 text-[#2C3E50] text-2xl before:w-28 before:h-1 before:bg-[#2C3E50] after:w-28 after:h-1 after:bg-[#2C3E50] mb-10'>
        <i className="fa-solid fa-star"></i>
      </div>
        <form  className='flex flex-col w-full' >
            <div className="relative z-0 w-full mb-10 group">
                <input type="text" name="floating_text" id="floating_text" className="block py-2.5 px-0 w-full text-sm  bg-transparent rounded-lg border-b-2 border-gray-300  focus:outline-none peer" placeholder=" " required />
                <label htmlFor="floating_text" className="peer-focus:font-medium absolute text-sm text[#595C5F] duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0   peer-focus:text-[#1ABC9C]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">  userName</label>
            </div>
            <div className="relative z-0 w-full mb-10 group">
                <input type="text" name="floating_text" id="floating_text" className="block py-2.5 px-0 w-full text-sm  bg-transparent rounded-lg border-b-2 border-gray-300  focus:outline-none peer" placeholder=" " required />
                <label htmlFor="floating_text" className="peer-focus:font-medium absolute text-sm text[#595C5F] duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0   peer-focus:text-[#1ABC9C]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">  age</label>
            </div>
            <div className="relative z-0 w-full mb-10 group">
                <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm  bg-transparent rounded-lg border-b-2 border-gray-300  focus:outline-none peer" placeholder=" " required />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text[#595C5F] duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0   peer-focus:text-[#1ABC9C]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">  userEmail</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="password" name="floating_passward" id="floating_passward" className="block py-2.5 px-0 w-full text-sm  bg-transparent rounded-lg border-b-2 border-gray-300  focus:outline-none peer" placeholder=" " required />
                <label htmlFor="floating_passward" className="peer-focus:font-medium absolute text-sm text[#595C5F] duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0   peer-focus:text-[#1ABC9C]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">  userPassword</label>
            </div>
            <button type="button" className="text-white bg-[#1ABC9C] font-medium rounded-lg text-sm px-2 py-2 me-2  hover:bg-[#1ABC9C] w-40">sendMessage</button>
        </form>
    </div>

  )
}

export default Conatct
