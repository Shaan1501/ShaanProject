import React from 'react'
import ReactTyped from 'react-typed'
function Banner() {
  return (
    <div className='bg-[#2699fb] w-full py-[70px]'>
      <div className='max-w-[1320px] my-[100px] font-bold mx-auto text-center'>
       <div className='text-xl md:text-3xl mt-4 md:p-[24px]'>Learn with us</div>
       <h2 className='text-white text-5xl md:text-[80px] md:p-[24px]'>Grow with us</h2>
       <div className='text-[20px] md:text-[50px] text-white  md:p-[24px]'>Master <ReactTyped
       className='pl-3'
       strings={['HTML',"CSS","JavaScript","React","Angular","Java","Python"]}
       typeSpeed={150}
       backSpeed={120 }
       loop={true}
       /></div>
       <button className='bg-black text-white p-3 rounded'>Get Started</button>
      </div>
    </div>
  )
}

export default Banner
