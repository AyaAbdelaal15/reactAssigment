import React from 'react'
import poert1 from './../../assets/poert1.png'
import poert2 from './../../assets/port2.png'
import poert3 from './../../assets/port3.png'
import './port.css'


const Portfolio = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-[#fff] text-[#2C3E50] lg:p-24 md:p-20 p-10'>
      <h2 className='capitalize md:mb-3 mb-6 font-bold sm:text-4xl text-2xl md:mt-15 mt-24'>portfolio component</h2>
      <div className='flex justify-center items-center gap-5 text-[#2C3E50] text-2xl before:w-28 before:h-1 before:bg-[#2C3E50] after:w-28 after:h-1 after:bg-[#2C3E50] mb-2'>
      <i className="fa-solid fa-star"></i>
      </div>
      <div className='grid gap-x-8 gap-y-3 lg:grid-cols-3 md:grid-cols-2 mt-10 grid-cols-1'>
        <div className='port'> 
            <img  src={poert1} alt="poert1"  /> 
            <div className="layer "> 
                <i className="fa-solid fa-plus text-white text-9xl"></i>
            </div>
        </div>
        <div className='port'> 
            <img src={poert2} alt="poert2"/>
            <div className="layer "> 
                <i className="fa-solid fa-plus text-white text-9xl"></i>
            </div> 
        </div>
        <div className='port'> 
            <img src={poert3} alt="poert3"/> 
            <div className="layer "> 
                <i className="fa-solid fa-plus text-white text-9xl"></i>
            </div>
        </div>
        <div className='port'> 
            <img src={poert1} alt="poert1"/> 
            <div className="layer "> 
                <i className="fa-solid fa-plus text-white text-9xl"></i>
            </div>
        </div>
        <div className='port'> 
            <img src={poert2} alt="poert2"/> 
            <div className="layer "> 
                <i className="fa-solid fa-plus text-white text-9xl"></i>
            </div>
        </div>
        <div className='port'> 
            <img src={poert3} alt="poert3"/> 
            <div className="layer "> 
                <i className="fa-solid fa-plus text-white text-9xl"></i>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
