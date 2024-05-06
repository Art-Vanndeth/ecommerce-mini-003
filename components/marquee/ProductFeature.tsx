import React from 'react'
import { GiWorld } from "react-icons/gi";
import { GiClothes } from "react-icons/gi";
import { MdOutlineDiscount } from "react-icons/md"
import { AiOutlineSecurityScan } from "react-icons/ai"
export default function Productsfeature() {
  return (
   <main>
      <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-[24px]  p-[50px] leading-7'>
        <div className='text-center'>
            <GiWorld className=' text-[40px] flex mx-auto'/>
            <p className='text-[18px] font-semibold text-black'>Worldwide Shipping</p>
            <p className='text-center text-black'>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className='text-center'>
        <GiClothes className='flex mx-auto text-[40px]' />
            <p className='text-[18px] font-semibold text-black'>Worldwide Shipping</p>
            <p className='text-center text-black'>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className='text-center'>
        <MdOutlineDiscount className='flex mx-auto text-[40px]' />
            <p className='text-[18px] font-semibold text-black'>Worldwide Shipping</p>
            <p className='text-center text-black'>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className='text-center '>
        <AiOutlineSecurityScan  className='flex mx-auto text-[40px]'/>
            <p className='text-[18px] font-semibold text-text-black'>Worldwide Shipping</p>
            <p className='text-center text-black'>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
      </div>
      <hr className='bg-green-500 border-none h-[1px]'/>
      <p className='p-[20px] md:text-[20px] sm:text-base lg:text-[26px] font-semibold'>SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.</p>
      <hr className='bg-green-500 border-none h-[1px]'/>
      <div className='mb-[36px]'></div>
   </main>
  )
}