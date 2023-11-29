import Image from "next/image";
import Link from "next/link";
import { useState ,useRef } from "react";
import { Button } from "antd"
import scrollImg from "@/json-api/scroll-img.json"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Category = ()=>{
  const catMenu =[
    {
        "label" : "ondc",
        "path" : "/images/ondc.webp",
        "route" :"#"
    },
    {
        "label" : "dine out",
        "path" : "/images/dine.webp",
        "route" :"#"
    },
    {
        "label" : "food delivery",
        "path" : "/images/delivery.webp",
        "route" :"#"
    },
    {
        "label" : "pharmacy",
        "path" : "/images/pharmacy.webp",
        "route" :"#"
    },
    {
        "label" : "faishon",
        "path" : "/images/faishon.webp",
        "route" :"#"
    },
    {
        "label" : "electronics",
        "path" : "/images/electronics.webp",
        "route" :"#"
    },
    {
        "label" : "nightlife",
        "path" : "/images/nightlife.webp",
        "route" :"#"
    },
    {
        "label" : "beauty",
        "path" : "/images/beauty.webp",
        "route" :"#"
    },
    {
        "label" : "corporate",
        "path" : "/images/offer.webp",
        "route" :"#"
    },
    {
      "label" : "corporate",
      "path" : "/images/offer.webp",
      "route" :"#"
  },
  {
    "label" : "corporate",
    "path" : "/images/offer.webp",
    "route" :"#"
}

    
]
  const [display ,setDisplay] = useState('block')
  return (
      <section className="relative container max-md:px-3 md:w-[88%] mx-auto -top-16">
   <Swiper
        slidesPerView={9}
        spaceBetween={5}
    
        breakpoints={{
          '@0.00': {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          '@0.75': {
            slidesPerView: 6,
            spaceBetween: 30,
          },
          '@1.00': {
            slidesPerView: 7,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 9,
            spaceBetween: 5,
          },
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
      {catMenu &&
        catMenu.map((menu, index) => (
          <SwiperSlide style={{backgroundColor:"transparent"}} key={index} name={`menu-${index}`} className="flex border border-transparent bg-green-600 rounded-full w-fit flex-col justify-center items-center gap-y-2">
            <Button  className=" w-[70px] h-[70px] md:w-[110px] md:h-[110px] rounded-full bg-white shadow-lg relative ">
              <Image src={menu.path} alt={menu.label} layout="fill" objectFit="cover" className="p-2 rounded-full " />
            </Button>
            <Link href={menu.route}>
              <button className="uppercase text-[15px] font-bold">{menu.label}</button>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

    <div className={`mt-28  ${display} `}>
     <div className="relative flex justify-center items-center mb-14">
        <h1 className="font-medium text-xl md:text-[45px] text-center">How does this <span className="text-[#ED4489]">magic</span> happen?</h1>
        <button className="absolute right-0" onClick={()=>setDisplay('hidden')}>
         <i className='bx bxs-x-circle text-2xl text-gray-400'></i>
        </button>
     </div>
      <div className="grid md:grid-cols-2">
        <div className="relative h-[270px] md:h-[380px] max-md:border-b  md:border-r">
          <Image src="/images/banner1.png" alt="banner 1" layout="fill" className="md:pr-24 md:pl-10 max-md:pb-10"/>
        </div>
        <div className="relative md:border-l max-md:border-t h-[270px] md:h-[380px]">
      
         <Image src="/images/banner2.png" alt="banner 1" layout="fill" className="md:pl-24 md:pr-10 max-md:pt-10 "/>
        </div>
      </div>
      <div className="overflow-hidden bg-[#FFF6FA] py-4 mt-14 flex">
        <div className="flex  gap-7 logo-slides">
           {
            scrollImg && scrollImg.map((image)=>(
              <Image src={image.path} alt={`scroll ${image.key}`} width={55} height={10} key={image.key} className="w-64 h-8" />
            ))
           }
        </div>
        <div className="flex  gap-7 logo-slides ml-[1600px]">
           {
            scrollImg && scrollImg.map((image)=>(
              <Image src={image.path} alt={`scroll ${image.key}`} width={55} height={10} key={image.key} className="w-64 h-8" />
            ))
           }
        </div>
        
      </div>
    </div>     
 </section>
  )
}

export default Category
