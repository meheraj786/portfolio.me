import React from 'react'
import { Cpu, Wifi } from "lucide-react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className='mt-20 border-t border-primary/10 py-8 px-6'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-primary tracking-widest text-primary/40 uppercase'>
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-1'>
            <span className='w-1.5 h-1.5 rounded-full bg-primary animate-pulse' />
            SYSTEM_OPERATIONAL
          </div>
          <div className='hidden md:flex items-center gap-1'>
            <Cpu size={12} />
            CPU_USAGE: 2.4%
          </div>
        </div>

        <div className='text-center'>
          © {date} MH_CORE // ALL_RIGHTS_RESERVED
        </div>

        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-1'>
            v2.0.4_STABLE
          </div>
          <div className='flex items-center gap-1'>
            <Wifi size={12} />
            LATENCY: 14ms
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer