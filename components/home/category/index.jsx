import Image from "next/image";
import Link from "next/link";
import catMenu from "@/json-api/catMenu.json";
import { useState } from "react";
import { Element } from "react-scroll";
import scrollImg from "@/json-api/scroll-img.json"
const Category = ()=>{
  console.log(scrollImg);
  const [display ,setDisplay] = useState('block')
  return (
      <section className="relative container w-[86%] mx-auto -top-16">
      <Element name="scrollContainer" className="justify-around flex gap-10 overflow-scroll w-full">
      {catMenu &&
        catMenu.map((menu, index) => (
          <Element key={index} name={`menu-${index}`} className="w-fit flex flex-col justify-center items-center gap-y-2">
            <div className="w-[110px] h-[110px] rounded-full bg-white shadow-lg relative cursor-pointer">
              <Image src={menu.path} alt={menu.label} layout="fill" objectFit="cover" className="p-2 rounded-full" />
            </div>
            <Link href={menu.route}>
              <button className="uppercase font-bold">{menu.label}</button>
            </Link>
          </Element>
        ))}
    </Element>

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
