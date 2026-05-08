import Link from 'next/link'
import React from 'react'
import { FileDown, MessageSquare } from "lucide-react";

const Resume = () => {
  return (
    <div className='flex md:justify-end justify-center gap-4 items-center mt-12 font-primary'>
      <button className='group relative px-6 py-2 border border-primary/50 text-primary text-xs uppercase tracking-widest hover:bg-primary hover:text-background transition-all duration-300 flex items-center gap-2'>
        <FileDown size={14} className="group-hover:animate-bounce" />
        GET_RESUME.PDF
        <div className="absolute -inset-1 border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </button>
      
      <Link href="/contact" className='group relative px-6 py-2 bg-secondary text-background font-bold text-xs uppercase tracking-widest hover:bg-white transition-all duration-300 flex items-center gap-2'>
        <MessageSquare size={14} />
        INITIATE_CONTACT
        <div className="absolute -inset-1 border border-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </Link>
    </div>
  )
}

export default Resume