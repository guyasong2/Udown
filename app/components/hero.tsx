import React from 'react'
import Image from 'next/image'
import { AiFillGift } from 'react-icons/ai'
import { AiOutlineAudio } from 'react-icons/ai'
import { AiOutlineBoxPlot } from 'react-icons/ai'

const Hero = () => {

  return (
    <>
    <hr className='w-[82%] mx-auto mt-10'/>
    <section className='mt-16 w-[82%] mx-auto'>
      <div className='flex flex-col md:flex-row gap-5 md:gap-[7rem] text-center'>
        <div className=''>
        <AiFillGift size={60} className='w-32 mx-auto'/>
          <h3 className='text-xl font-semibold'>Free Downloader</h3>
          <p>Unlimited conversion and free download.</p>
        </div>
        <div>
        <AiOutlineAudio size={60} className='w-32 mx-auto'/>
          <h3 className='text-xl font-semibold'>Video & Audio</h3>
          <p>Directly Download Video & Music.</p>
        </div>
        <div>
        <AiOutlineBoxPlot size={60} className='w-32 mx-auto'/>
          <h3 className='text-xl font-semibold'>Easy Download</h3>
          <p>Fully compatible with all browsers.</p>
        </div>
      </div>
    </section>
    
    <hr className='w-[82%] mx-auto mt-10'/>

    <section className='w-full mt-24 md:w-[82%] h-[88%] mb:h-[88%] mx-auto pt-8 bg-gray-900 text-white'>
      <h2 className='text-center text-2xl'>How to download from Youtube</h2>
      <p className='text-center'>To download a Youtube video, you have to follow the follwing steps</p>
      <p className='text-center'><span className='font-bold text-xl'>Step 1: </span>Go to Youtube, copy the URL like you see in the image below</p>

      <div className='w-[50%] mx-auto bg-green-700 mt-5'>
      <Image src="/link.png" alt='how to download youtube video' width={700} height={300}/>
      </div>

      <p className='text-center mt-2'><span className='font-bold text-xl'>Step 2: </span> Paste copied Youtube Link in the search box where it says "Paste Youtube link"</p>
      <p className='text-center mt-2 mb-3'><span className='font-bold text-xl'>Step 3: </span> Choose your file type and click on Download button</p>
      <p className='text-center mt-2 mb-3'><span className='font-bold text-xl'>Step 4: </span> Click on the Green button. You will be redirected to another page</p>
      <p className='text-center mt-2 mb-3'><span className='font-bold text-xl'>Step 5:</span> Come back to the download page and click again on the green button </p>
      {" "}
    </section>

    <hr className='w-[82%] mx-auto mt-10'/>
    </>
  )
}

export default Hero
