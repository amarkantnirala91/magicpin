import Head from 'next/head';
import Image from "next/image";
import Link from "next/link";
import {useState } from "react";
import { Input ,Select ,Popover } from 'antd';
import { MenuOutlined } from "@ant-design/icons";
import Footer from "../footer";
import LoginSingup from '../login-signup';
import Meta from '../meta';
  const Layout = ({children , title ="page title Empty" ,description="" ,keywords=""})=>{
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
  const onChange = (value) => {
   console.log(`${value}`);
   };
  const onSearch = (value) => {
      console.log( value);
    };
    
  const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
  const popoverContent = (
        <div className="flex flex-col gap-y-1 px-2 shadow-md ">
          <Link href="/">
          <button className="capitalize text-[16px] text-gray-700 font-medium">home</button>
          </Link>
          <Link href="#">
          <button className="capitalize text-[16px] text-gray-700 font-medium">around you</button>
          </Link>
          <Link href="#">
          <button className="capitalize text-[16px] text-gray-700 font-medium">blog</button>
          </Link>
          <Link href="#">
          <button className="capitalize text-[16px] text-gray-700 font-medium">my transition</button>
          </Link>
        </div>
      );
  return (
    <>
     <Meta 
   title={title}
   description={description}
   keywords={keywords}
   />
    <section className=" py-1 md:py-4 shadow-lg  bg-white z-50 sticky top-0">
     <div className="container mx-auto max-md:px-3 md:w-[85%] flex justify-between items-center ">
      <div className="flex max-md:flex-col md:gap-10 w-full">
        <Link href="/">
         <Image src="/logo-v1.svg" alt="magicpin" width={130} height={10}
          className="cursor-pointer transition-transform  transform hover:scale-110 max-md:w-16"
         />
        </Link>
      <div className="relative max-md:-left-4">
        <Image src='/images/favicon.ico' alt="magicpin icon" width={18} height={18} className="absolute top-[9px] left-3" />
      <Select
     
     showSearch
     placeholder="Search location"
     optionFilterProp="children"
     onChange={onChange}
     onSearch={onSearch}
     filterOption={filterOption}
     options={city}
     bordered={false}
     className="md:border md:shadow-sm rounded-md h-9 custom-select pl-5 md:w-[230px]"
   
    />
      </div>
       <Input 
        className="w-[40%] -ml-4 max-md:hidden" 
        prefix={<i className='bx bx-search text-lg  text-gray-500'></i>}
        placeholder="Search for places, cuisines, and more"
        style={{ border: '1px solid #d9d9d9', outline: 'none'  }}
        id="custom-input-id"
       />
       
      </div>
      <div className="flex items-center gap-3 md:gap-6" >
        <button className="md:py-[4px] py-1 text-[#EF1C74] text-xs md:text-lg md:px-5 px-4 font-bold rounded-md border border-[#EF1C74]" onClick={showModal}>Login</button>
        {/* login modal */}
         <LoginSingup  isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} />
        <button className="md:hidden mt-1">
          <i className='bx bx-search text-xl text-gray-400'></i>
        </button>
        <Popover  content={popoverContent} trigger="click" arrow={false}>
        <MenuOutlined className="text-gray-400 text-xl cursor-pointer" />
     </Popover>
      </div>
     </div>
    </section>
 <div>
  {
    children
  }
 </div>

   <Footer padding="40px"/>
    </>
  )
}

export default Layout
