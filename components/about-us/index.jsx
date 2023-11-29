import Image from "next/image"
import Layout from "../shared/layout"
import ScrollTop from "../shared/scroll-top"
import Link from "next/link"
import Member from "./member"
import Contact from "./contact"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay } from 'swiper/modules';

const AboutUs = () => {
  const brandImageOne = [
    {
      path : "/images/about/logos-08.jpg",
    },
    {
      path : "/images/about/logos-01.jpg",
    },
    {
      path : "/images/about/logos-03.jpg",
    },
    {
      path : "/images/about/logos-02.jpg",
    },
    {
      path : "/images/about/logos-07.jpg",
    },
    {
      path : "/images/about/logos-04.jpg",
    },{
      path : "/images/about/logos-05.jpg",
    },
    {
      path : "/images/about/logos-06.jpg",
    },
    {
      path : "/images/about/logos-09.jpg",
    },
    {
      path : "/images/about/logos-11.jpg",
    },
    {
      path : "/images/about/logos-10.jpg",
    }

  ]
  const brandImageTwo = [
    {
      path : "/images/about/logos-05.jpg",
    },
    {
      path : "/images/about/logos-06.jpg",
    },
    {
      path : "/images/about/logos-09.jpg",
    },
    {
      path : "/images/about/logos-11.jpg",
    },
    {
      path : "/images/about/logos-10.jpg",
    }

  ]
  const galleries = [
    {
        path : "/images/about/1.jpg"
    },
    {
        path : "/images/about/2.jpg"
    },
    {
        path : "/images/about/3.jpg"
    },
    {
        path : "/images/about/4.jpg"
    },
    {
        path : "/images/about/5.jpg"
    },
    {
        path : "/images/about/6.jpg"
    },
    {
        path : "/images/about/7.jpg"
    },
    {
        path : "/images/about/8.jpg"
    },
    {
        path : "/images/about/9.jpg"
    },
]
  return (
    <Layout title="About Us" description="very desrible" keywords="this is about us page" image={true}>
     <section className="container mx-auto md:w-[85%] py-4">
      <div className=" rounded-full h-[600px] border w-[100%] relative" >
        <Image src="/images/about/about-us.png" alt="about banner image" fill />
      </div>
      {/*about us text*/}
      <div className="pt-12 pb-8 shadow-md rounded-md md:px-36">
        <h1 className="text-[26px] mb-8 font-semibold">About Us</h1>
        <div className="flex flex-col gap-y-3 tracking-tight ">
          <h1 className="text-lg font-bold">Discovery and savings for local shopping. Food, fashion, beauty, pharmacy and more.</h1>
          <div>
            <p className="text-[16.5px]">Since 2015, <span className="text-[#EF1C74]">magicpin</span> has been transforming the offline shopping experience in India. It brings alive the joy of shopping and savings from local stores, which are the lifeblood of the economy. By connecting retailers big and small with customers, magicpin creates value for all in the hyperlocal retail ecosystem and allows them to leverage the fast-growing digital world.</p>
          </div>
          <div>
            <p className="text-[16.5px]">
            magicpin drives the discovery of brands and retailers across categories like <span className="text-[#EF1C74]"> fashion, food, electronics, grocery, pharmacy, home delivery, spa, nightlife,</span> entertainment and more. It builds engagement and visibility for retailers and brands to help boost demand and offers an omnichannel platform to connect with relevant local customers.
            </p>
          </div>
          <div>
            <p className="text-[16.5px]">
            For shopping at local stores, customers are rewarded with savings and magicPoints on their purchase, which they use to shop more at all stores. From the biggest brands to local staples, customers get savings, discounts, vouchers and rewards for simply choosing to shop local.
            </p>
          </div>
          <div>
            <p className="text-[16.5px]">
            magicpin exists to create a marketplace that is more local, relevant and celebrates the thrill of shopping and savings for all. That’s the magic of local.
            </p>
          </div>
        </div>
           {/* brand image */}
      <div className="flex flex-col items-center gap-y-2">
       <p className="font-bold tracking-tight text-gray-700 mt-10 ">Some Of Our Partners</p>
         <div className="flex flex-wrap justify-center w-[90%] gap-x-14 gap-y-7">
          {
            brandImageOne && brandImageOne.map((brandImage,index)=>(
             <Link href="#" key={index}>
               <button>
               <Image src={brandImage.path}  alt={`brand ${index}`} width={110} height={10} key={index} className="rounded-md"/>
               </button>
             </Link>
            ))
          }
         </div>

      </div>
       {/* brand image */}
       <div className="flex flex-col gap-y-4 ">
           <h1 className="font-bold text-center">Our Investors</h1>
           <div className="w-full">
             <h1 className="font-bold ">Backed By The Best</h1>
             <p className="leading-tight text-sm mt-2">magicpin is among the leaders in hyperlocal retail and one of the fastest growing companies in India. It is backed by some of the leading VC firms and startups in the world such as Lightspeed, Waterbridge and Zomato.</p>
           </div>

           <div className="grid md:grid-cols-3 border rounded-md">
             {/* 1st*/}
            <div className="pb-7 pt-12 flex flex-col items-center gap-y-4 border-r md:px-7 text-[14px] ">
              <Image src="/images/about/lightspeed.svg" alt="lightspeed" width={80} height={10} />
              <h1 className="font-semibold text-[18px] tracking-tight">Lightspeed</h1>
              <h1 className="text-center leading-tight">
              Lightspeed Venture Partners is a multi-stage venture capital firm focused on accelerating disruptive innovations and trends in the Enterprise, Consumer, Health, and Fintech sectors. Consumer investments include Snapchat, OYO, BYJU’s, Udaan etc.
              </h1>
            </div>
        {/* 2nd */}
          <div className="py-7 flex flex-col items-center gap-y-2 border-r md:px-7 text-[14px] ">
              <Image src="/images/about/zomato_logo.png" alt="lightspeed" width={60} height={10} />
              <h1 className="font-semibold text-[18px] tracking-tight">Zomato</h1>
              <h1 className="text-center leading-tight">
              Zomato is India’s largest food delivery and restaurant discovery service. The company went public in July 2021.
              </h1>
            </div>
             {/* 3rd */}
             <div className="pb-7 pt-12 flex flex-col items-center gap-y-4 border-r md:px-7 text-[14px] ">
              <Image src="/images/about/waterbridge.svg" alt="lightspeed" width={80} height={10} />
              <h1 className="font-semibold text-[18px] tracking-tight">Waterbridge</h1>
              <h1 className="text-center leading-tight">
              Early stage VC firm: Catalyst for Tech Entrepreneurship in India. Investment Partner/Board Observer/Board of Directors: magicpin, Unacademy, Dataweave, Chalo, 99RetailStreet, ZipLoan, ZopHop.
              </h1>
            </div>
           </div>
       </div>
      </div>
      {/*gallery section */}
      <div className="p-5 shadow-md rounded-md mt-6 flex flex-col gap-y-5 items-center">
      <Swiper
        slidesPerView={2}
        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            
          },
          768: {
            slidesPerView: 4,
           
          },
          1024: {
            slidesPerView: 6,
            
          },
        }}
        modules={[Autoplay]}
        className="mySwiper w-full"
      >
        {
          galleries.map((gallery , index)=>(
            <SwiperSlide key={index}>
             <Image src={gallery.path} alt={`image ${index}` } width={230} height={10} />
            </SwiperSlide>
          ))
        }
      </Swiper>
       <div className="leading-tight md:px-14">
           <h1 className="text-center">Life at magicpin</h1>
        <h1 className="text-center">We are a highly driven team with rich and varied background from IITs, IIMs and other reputed colleges. Between us, we have built and scaled high performance teams from scratch, built technology solutions that impact lives and advised leading corporates on strategy and operations. We have also been an integral part of India’s startup journey having worked in leading VCs and led investments in several early stage startups in India like Delhivery, Housing, TinyOwl, LimeRoad, Freshmenu,</h1>
       <h1 className="text-center">CraftsVilla, OneAssist</h1>
      </div>
      <div className="grid md:grid-cols-3 w-[80%]">
       <div className="border relative group h-[100px] font-bold text-amber-400 text-[20px] flex items-center justify-center">
        <h1>Innovation</h1>
        <div class="hidden w-full h-full bg-[#FF4081] p-4 group-hover:block absolute text-white ">
          <h1 className="text-center">Innovation</h1>
          <h className="text-sm text-center">Question status quo, be creative, think out-of</h>
         </div>
       </div>
       <div className="border relative group h-[100px] font-bold text-amber-400 text-[20px] flex items-center justify-center">
        <h1>Courage</h1>
        <div class="hidden w-full h-full bg-[#FF4081] p-4 group-hover:block absolute text-white ">
          <h1 className="text-center">Courage</h1>
          <h className="text-sm text-center">Say what you think, take hard decisions</h>
         </div>
       </div>
       <div className="border relative group h-[100px] font-bold text-amber-400 text-[20px] flex items-center justify-center">
        <h1>Curisity</h1>
        <div class="hidden w-full h-full bg-[#FF4081] p-4 group-hover:block absolute text-white ">
          <h1 className="text-center">Curisity</h1>
          <h className="text-sm text-center">Question status quo, be creative, think out-of</h>
         </div>
       </div>

       <div className="border relative group h-[100px] font-bold text-amber-400 text-[20px] flex items-center justify-center">
        <h1>Ownership</h1>
        <div class="hidden  w-full h-full bg-[#FF4081] p-4 group-hover:block absolute text-white ">
          <h1 className="text-center">Ownership</h1>
          <h className="text-sm text-center">Take initiatives, own your tasks, get stuff done</h>
         </div>
       </div>
       <div className="border h-[200px] row-span-3 relative"> 
        <Image src="/images/about/magicpin-logo.svg" layout="fill" objectFit="cover" alt="magicpin" />
       </div>

       <div className="border relative group h-[100px] font-bold text-amber-400 text-[20px] flex items-center justify-center">
        <h1>Integrity</h1>
        <div class="hidden w-full h-full bg-[#FF4081] p-4 group-hover:block absolute text-white ">
          <h1 className="text-center">Innovation</h1>
          <h className="text-sm text-center">Do the right thing, be transparent</h>
         </div>
       </div>
       <div className="border relative h-[100px] group font-bold text-amber-400 text-[20px] flex items-center justify-center">
        <h1>Empathy</h1>
        <div class="hidden w-full h-full bg-[#FF4081] p-4 group-hover:block absolute text-white ">
          <h1 className="text-center">Empathy</h1>
          <h1 className="text-sm text-center">Question status quo, be creative, think out-of</h1>
         </div>
       </div>
       <div className="border h-[100px] font-bold text-amber-400 text-[20px] group flex items-center justify-center relative">
        <h1 className="">Team</h1>
        <div class="hidden w-full h-full bg-[#FF4081] p-4 group-hover:block absolute text-white ">
          <h1 className="text-center">Team</h1>
          <h className="text-sm text-center">Question status quo, be creative, think out-of</h>
         </div>
       </div>

       
      </div>
      </div>
     </section>
     <Member />
     <Contact />
    <ScrollTop />
    </Layout>
  )
}

export default AboutUs
