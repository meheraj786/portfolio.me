import React from 'react'

const Resume = () => {
  return (
    <div className='flex md:justify-end justify-center gap-x-5 items-center mt-10 font-body'>
      <button className='text-white cursor-pointer bg-background px-5 py-1 rounded-sm transition-colors duration-200 border border-white hover:border-black hover:border hover:bg-white hover:text-black'>My Resume</button>
      <button className=' bg-white px-5 py-1 rounded-sm transition-colors duration-200 border border-background text-black hover:border-black hover:border hover:bg-gray-500 cursor-pointer hover:text-white'>Contact With Me</button>
    </div>
  )
}

export default Resume