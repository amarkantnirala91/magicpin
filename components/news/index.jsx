import Image from "next/image"
import Layout from "../shared/layout"
import ScrollTop from "../shared/scroll-top"
import Social from "../shared/social"
import { useState } from "react"
import { Select ,Input, Pagination } from "antd"
const News = () => {
  const [current, setCurrent] = useState(1);
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };
  const recents = [
    {
      path : "/images/news/cricket.jpg",
      desc : " magicpin to invest up to ₹100 crore on promotional offers during Cricket World Cup 2023 ",
      date : "The Hindu -october 7,2023",
      detail : `With the start of the ICC World Cup 2023, hyperlocal e-commerce company magicpin is all set to ride the wave by unveiling its ambitious 'Super Saver Match Days' campaign. Come October 8, during the India vs Australia match, the company is poised to roll out a slew of tantalising offers on the government-supported Open Network for Digital Commerce (ONDC).
      If you love ordering online, especially when the cricketing action gets intense, magicpin's latest campaign could be your golden ticket. When you spend ₹200 or more, the e-commerce company will give you up to ₹175 off with free delivery.`
    },
    {
      path : "/images/news/ceo.jpg",
      desc : " magicpin to invest up to ₹100 crore on promotional offers during Cricket World Cup 2023 ",
      date : "The Hindu -october 8,2023",
      detail : `Hyperlocal e-commerce firm magicpin on Saturday said it will invest up to ₹100 crore in various promotional offers, including discounts on food orders, for the customers on the ONDC platform during the ongoing World Cup cricket tournament. The company will start its campaign 'Super Saver Match Days' from October 8 with the India versus Australia World Cup match on government-backed Open Network for Digital Commerce (ONDC).`
    },
    {
      path : "/images/news/magic.jpg",
      desc : " magicpin to invest up to ₹100 crore on promotional offers during Cricket World Cup 2023 ",
      date : "The Hindu -october 7,2023",
      detail :`Hyperlocal savings super-app – Magicpin- announced ‘Super Saver Match Day’ campaign starting on October 8 for India vs Australia World Cup cricket match. The campaign, to run during ONDC’s World Cup food delivery sale, will provide consumers to get exciting discounts over and additional incentives during "India’s biggest food delivery sale", it claimed.

      Consumers can avail flat up to Rs 175 discount and free deliveries on orders above Rs 200, Magicpin said in a press release. The company will provide exclusive discounts on popular food chains such as Fassos, Behrouz Biryani, Oven Story, McDonald’s, Wow Momo, Pizza Hut, Barbeque Nation and Barista on delivery orders throughout the day.`
    },
    {
      path : "/images/news/store.jpg",
      desc : " magicpin to invest up to ₹100 crore on promotional offers during Cricket World Cup 2023 ",
      date : "The Hindu -october 9,2023",
      detail : `Hperlocal firm magicpin has partnered with government-backed NCCF to sell groceries, including onions and pulses, through the Open Network for Digital Commerce (ONDC) at low prices, the company said on Friday. The partnership follows a collaboration of magicpin with the National Cooperative Consumers Federation of India (NCCF) for selling tomatoes at Rs 70 per kg when its prices were above Rs 100 a kg in the market.`
    },    {
      path : "/images/news/ceo.jpg",
      desc : " magicpin to invest up to ₹100 crore on promotional offers during Cricket World Cup 2023 ",
      date : "The Hindu -october 8,2023",
      detail :`Hperlocal firm magicpin has partnered with government-backed NCCF to sell groceries, including onions and pulses, through the Open Network for Digital Commerce (ONDC) at low prices, the company said on Friday. The partnership follows a collaboration of magicpin with the National Cooperative Consumers Federation of India (NCCF) for selling tomatoes at Rs 70 per kg when its prices were above Rs 100 a kg in the market.`
    },
    {
      path : "/images/news/magic.jpg",
      desc : " magicpin to invest up to ₹100 crore on promotional offers during Cricket World Cup 2023 ",
      date : "The Hindu -october 7,2023",
      detail :`Hperlocal firm magicpin has partnered with government-backed NCCF to sell groceries, including onions and pulses, through the Open Network for Digital Commerce (ONDC) at low prices, the company said on Friday. The partnership follows a collaboration of magicpin with the National Cooperative Consumers Federation of India (NCCF) for selling tomatoes at Rs 70 per kg when its prices were above Rs 100 a kg in the market.`
    },
    {
      path : "/images/news/burger.jpg",
      desc : " magicpin to invest up to ₹100 crore on promotional offers during Cricket World Cup 2023 ",
      date : "The Hindu -october 9,2023",
      detail :`Hyperlocal e-commerce venture magicpin has kept its pledge and altered its 50-foot office sign to honour the monumental success of Chandrayaan 3's lunar touchdown. Magicpin's revamped sign now displays the inscription "magicISRO: To the moon at 1/10th of the cost.`
    },
    {
      path : "/images/news/tomato.jpg",
      desc : " Magicpin to provide tomato for Rs 50 per kg at select ONDC platforms",
      date : "The Hindu -october 9,2023",
      detail :`The anticipation surrounding Chandrayaan-3's successful landing is a fertile ground for some unique advertisements. One such campaign has come from the hyperlocal e-commerce platform, Magicpin.The start-up on Wednesday said on X (formerly Twitter) that it has pledged to replace its 50-foot office sign from ‘Magician’ to ‘MagicISRO’ if the Chandrayaan-3 makes a successful soft landing on the Moon. The company has an office near the IFFCO chowk in Gurugram where the sign is displayed.`
    },
    {
      path : "/images/news/college.jpg",
      desc : " magicpin to invest up to ₹100 crore on promotional offers during Cricket World Cup 2023 ",
      date : "The Hindu -october 9,2023",
      detail :`Magicpin said that till date, it has facilitated the delivery of approximately 20,000 orders for 40,000 kilograms (kg) of tomatoes across more than 90 pin codes in and around Delhi-NCR in just 4 weeks at Rs 70 per kilogram (Kg), and henceforth, tomato will be shipped at a lower price of Rs 50 per kg.`
    }
  ]
  const option = [
    {
      value: '2009',
      label: '2009',
    },
    {
      value: '2010',
      label: '2010',
    },
    {
      value: '2011',
      label: '2011',
    },
    {
      value: '2012',
      label: '2012',
    },
    {
      value: '2013',
      label: '2013',
    },
    {
      value: '2014',
      label: '2014',
    },
    {
      value: '2015',
      label: '2015',
    },
    {
      value: '2016',
      label: '2016',
    },
    {
      value: '2017',
      label: '2017',
    },
    {
      value: '2018',
      label: '2018',
    },
    {
      value: '2019',
      label: '2019',
    },
    {
      value: '2020',
      label: '2020',
    },
    {
      value: '2021',
      label: '2021',
    },   {
      value: '2022',
      label: '2022',
    },
    {
      value: '2023',
      label: '2023',
    },
  ]
  const onHandleChange = (value)=>{
   console.log(value);
  }
  return (
    <Layout
     title="news Room"
     description=" Magicpin connects users with nearby restaurants, salons, and other establishments, providing a gamified and interactive experience. Users can explore their neighborhoods, discover hidden gems, and share their experiences through reviews and photos. What sets Magicpin apart is its unique rewards system, "
     keywords="latest news magicpin news"
     image={false}
    >
     <section>
        <div className=" h-[100px] md:h-[290px] w-full mb-12" style={{backgroundImage :`url('/images/news/head-banner.jpg')`,backgroundSize : "cover"}}>
        </div>
        <div className=" md:w-[76%] max-md:px-5 container mx-auto">
          <div className="grid md:grid-cols-2 mb-14">
            {/*left section */}
             <div className="flex flex-col gap-y-8">
                <div className="relative  h-[350px]">
                    <Image src="/images/news/burger.jpg" alt="burger" layout="fill" objectFit="cover" className="rounded-md" />
                </div>
                <div className="pl-4 border-l-[6px] border-[#EB0F69]">
                 <p className="text-xs text-gray-500 mb-3"> Mint-October 8,2023</p>
                 <h1 className="md:text-[35px] text-2xl text-gray-500 leading-snug">
                    
                 ICC World Cup 2023: magicpin to spend ₹100 crore for discounts on food orders
                        
                 </h1>
               </div>
             </div>
            {/*right section */}
        <div className="flex flex-col md:pl-9 gap-y-6 overflow-y-scroll h-[540px] md:pr-16  ">
        {
          recents.map((recent,index)=>(
            <div className="grid md:grid-cols-8 border-b-2 pb-6 cursor-pointer " key={index}>
            <div className="relative h-[107px] md:col-span-3 ">
             <Image src={recent.path} alt="cricket" layout="fill" objectFit="cover" className=" rounded-xl md:py-1 " />
            </div>
            <div className=" md:col-span-5 pl-10  ">
             <p className="text-xs  text-gray-500 mb-1">{recent.date}</p>
             <p className="text-[18px] text-gray-500">{recent.desc}</p>
            </div>
           </div>
          ))
        }
              
             </div>
          </div>

         {/*discover more */} 
         <div className="flex flex-col items-center gap-y-10 mb-5">
           <h1 className="text-4xl font-bold text-gray-800">Discover More News</h1>
           <div className=" flex justify-between w-full">
           <Select
            defaultValue="Select a Year"
            onChange={onHandleChange}
            options={option}
            className="w-48 h-10"
           />

           <Input 
            suffix={<i className='bx bx-search text-gray-400 text-2xl '></i>}
            placeholder="Search"
            className="w-[280px]"
           />
           </div>
           <div className="border-b-2 w-full"></div>
           <div className="grid md:grid-cols-3 w-full gap-10">
            {/*news discover */}
             {
              recents.map((recent,index)=>(
                <div className="flex flex-col cursor-pointer gap-y-5" key={index}>
              <div className="relative h-48">
              <Image src={recent.path} alt="fgrg" layout="fill" objectFit="cover" className="rounded-md" />
              </div>
             <p className="text-xs text-gray-500 ">{recent.date}</p>
             <h1 className="text-2xl text-gray-700">{recent.desc}</h1>
            <p className="text-gray-500 pr-8">{recent.detail}</p>
            </div>
              ))
             } 
           </div>
         </div>
         <div className=" flex justify-center mb-5">
         <Pagination current={current} onChange={onChange} total={50} hideOnSinglePage />
         </div>
        </div>

     </section>
 
      <Social data="test" />
     <ScrollTop />
    </Layout>
  )
}

export default News
