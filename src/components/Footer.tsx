import React from 'react'

const Footer = () => {
  const date= new Date( ).getFullYear();
  return (
    <div className='text-center text-primary font-primary py-3'>© {date} Meheraj Hosen. All rights reserved.</div>
  )
}

export default Footer