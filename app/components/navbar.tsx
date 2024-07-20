"use client"
import React from 'react'

import Link from "next/link";
import { AiOutlineMenu,AiOutlineClose} from "react-icons/ai";
import { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
    const handleNav = () => (
      setMenuOpen(!menuOpen)
  )
  return (
    <nav className="fixed bg-white w-full md:pl-24 md:pr-24">
        <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16 py-4">
         <h1 className="text-2xl flex bg-gradient-to-b border-b from-zinc-200 items-center gap-2 py-2 px-4 text-black font-semibold">UDown.</h1>
         <div>
           <ul className="hidden md:flex items-center">
             <Link href="/"><li className="ml-6 text-lg hover:border-b-2">Home</li></Link>
             <Link href="/contactUs"><li className="ml-6 text-lg hover:border-b-2">Contact Us</li></Link>
             <Link href="/faq"><li className="ml-6 text-lg hover:border-b-2">FAQ</li></Link>
           </ul>
         </div>
         <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
           <AiOutlineMenu size={25}/>
         </div>
        </div>
        <div className={
         menuOpen 
         ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
         : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }>
         <div className="flex w-full items-center justify-end">
           <div onClick={handleNav} className="cursor-pointer">
             <AiOutlineClose size={25}/> 
           </div>
         </div>
         <div className="md:flex-col py-4">
           <ul>
             <Link href="/"><li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">Home</li></Link>
             <Link href="/contactUs"><li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">Contact Us</li></Link>
             <Link href="/faq"><li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">FAQ</li></Link>
           </ul>
         </div>
        </div>
     </nav>
  )
}

export default Navbar