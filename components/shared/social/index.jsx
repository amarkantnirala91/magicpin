import { Button } from 'antd'
import Image from 'next/image'
import React from 'react'
import ScrollTop from '../scroll-top'

const Social = ({data=""}) => {
  return (
    <section>
    <div className='group fixed right-9 bottom-[190px] flex gap-y-6 flex-col'>
    <div className=" hidden group-hover:block ">
        <div className='flex flex-col gap-y-6'>
        <Button 
          icon={<i className='bx bxl-facebook text-2xl text-white' ></i>} 
          className='bg-blue-500 rounded-full  hover:translate-x-[-5px] border-none'
          style={{width:"40px" , height:"40px"}}
          />
          <Button 
          icon={<i className='bx bxl-twitter text-2xl text-white' ></i>} 
          className='bg-blue-400 rounded-full  hover:translate-x-[-5px] border-none'
          style={{width:"40px" , height:"40px"}}
          />   
        </div>
       </div>
      <Button 
       icon={<i className ='bx bxl-whatsapp text-white text-3xl' ></i>} 
       className='bg-green-500 rounded-full  hover:translate-x-[-5px] border-none'
       style={{width:"40px" , height:"40px"}}
      /> 
       <Button className='bg-gray-400 h-[50px] border-none fixed bottom-28 z-40 rounded-full w-[50px] right-8 ' type='default' >
       <Image src="/images/social-share.svg" layout='fill' objectFit='cover' alt='social' className=' hover:rotate-180 group-hover:rotate-180 duration-200 p-3' /> 
      </Button>
    </div>
      
    </section>
  )
}

export default Social
