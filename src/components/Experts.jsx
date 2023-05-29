import React from 'react'
import laptop from "../assets/img/laptop.png";
function Experts() {
  return (
    <div className='max-w-[1320px] my-10 mx-auto p-2  md:grid grid-cols-2'>
        <div className='  col-span-1 md:w-[100%] text-center'>
            <img src={laptop} alt="laptop" className='inline' />
        </div>
        <div className=' col-span-1 flex flex-col justify-center'>
            <h1 className='text-[#00df9a] font-bold my-2'>Learn From Experts</h1>
            <p className='my-2 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt magni aut dolorum nihil dolorem illo amet vitae accusantium necessitatibus repellat quia dolores, fuga eveniet dignissimos animi, nulla vel aperiam nisi? Mollitia sunt iusto eos. A suscipit laborum, vero aliquid ab itaque odit tempore voluptatem pariatur sapiente? Tempora quasi hic unde!</p>
            <button className= 'w-[20%] bg-black text-white p-3 rounded'>Get Started</button>
        </div>
      
    </div>
  )
}

export default Experts
