import Image from "next/image"
import Link from "next/link"
import { Dropdown,Select,Input } from "antd";
import { useState,useRef } from "react";
import LoginSingup from "@/components/shared/login-signup";
const Hero = ()=>{
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    const onChange = (value) => {
      console.log(`${value}`);
      };
     const onSearch = (value) => {
         console.log( value);
       };
      
    const items = [
        {
          key: '1',
          label: (
            <Link href="/">
             Register As a Merchant
            </Link>
          ),
        },
        {
          key: '2',
          label: (
            <Link href="/">
            Register As Brand
           </Link>
          ),
        },
        {
          key: '3',
          label: (
            <Link href="/">
             Magicpin for Corporates
           </Link>
          ),
        },
      ];
   const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());  
  const city = [
    {
      value: 'patna',
      label: 'Patna',
    },
    {
      value: 'delhi',
      label: 'Delhi',
    },
    {
      value: 'mumbai',
      label: 'Mumbai',
    },
    {
      value: 'nasriganj',
      label: 'Nasriganj',
    },
    {
      value: 'jina',
      label: 'Jina',
    },
    {
      value: 'sasaram',
      label: 'Sasaram',
    },
  ]

  return (
    <div>
      <section
      style={{ backgroundImage: `url('/building.svg')` , backgroundSize:'contain', backgroundRepeat:'no-repeat',backgroundPosition:'bottom'}}
       className="bg-[#2E108E] bg-opacity-[99%] pt-6 h-[500px] w-[100%] relative"
       >
       <div className="container max-md:px-5 md:w-[83%] mx-auto">
       <div className=" flex items-center justify-between">
         <Link href="/">
         <Image 
            src="/logo.png" alt="magicpin log" width={140} height={10}
            className="cursor-pointer transition-transform  transform hover:scale-110 max-md:w-16"
        />
         </Link>
         <div className="flex items-center gap-x-10">
            <Link href="/about-us">
             <button className="uppercase max-md:hidden text-white font-semibold text-[15px]">about us</button>
            </Link>
            <Link href="#">
             <button className="uppercase  max-md:hidden text-white font-semibold text-[15px]">news room</button>
            </Link>
            <Link href="#">
             <button className="uppercase  max-md:hidden text-white font-semibold text-[15px]">blog</button>
            </Link>
            <Dropdown menu={{items,}} placement="bottomLeft" arrow >
            <button className="uppercase text-white font-semibold text-[15px]  max-md:hidden">business
            <i className='bx bxs-chevron-down'></i>
            </button>
            </Dropdown>
            {/* download app store  */}
            <div className="flex items-center gap-1  max-md:hidden">
             <span className="text-white text-sm"> Get app:</span>
             <Link href="#">
              <Image 
                src="/images/android.svg" alt="magicpin log" width={23} height={10}
                className="cursor-pointer"
               />
             </Link>
             <Link href="#">
              <Image 
                src="/images/apple.svg" alt="magicpin log" width={23} height={10}
                className="cursor-pointer"
               />
             </Link>
            </div>
            <button className="text-white bg-[#EF1C71] py-3 font-semibold px-6 rounded-md" onClick={showModal}>Sign in/UP</button>
                {/* login modal */}
         <LoginSingup  isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} />
         </div>
        </div>
        <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center gap-y-9">
          <p className="text-white font-bold text-4xl  max-md:hidden tracking-tight">Super Savings at million<span className="text-[#EF1C71] font-extrabold">+ </span>stores around you!</p>
          <div className="relative flex w-[95%]">
          <Image src='/images/favicon.ico' alt="magicpin icon" width={18} height={18} className="absolute top-[14px] left-5 z-30" />
      <Select
     
      showSearch
      placeholder="Search location"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={filterOption}
      options={city}
      bordered={false}
      className=" bg-white rounded-l-md h-11 custom-select pl-9 md:w-[240px]"
    
    />

      <Input 
        placeholder="Search for places, cuisines, and more"
        className="w-[40%]max-md:hidden " 
        style={{ border: '1px solid #d9d9d9', outline: 'none',borderRadius: 0 , borderTopRightRadius :'5px',borderBottomRightRadius :'5px'}}
        id="custom-input-id"
       />
          </div>
        </div>
       </div>
       

      </section>
    </div>
  )
}

export default Hero
