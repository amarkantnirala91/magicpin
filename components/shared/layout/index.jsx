import Head from 'next/head';
import Image from "next/image";
import Link from "next/link";
import { useState , useRef } from "react";
import { Form , Input ,Select ,Popover ,Button ,Modal} from 'antd';
import { MenuOutlined } from "@ant-design/icons";
import Footer from "../footer";

  const Layout = ({children , title="Page title is empty"})=>{
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputLength, setInputLength] = useState(0);
  const loginRef = useRef();
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
  const login = ()=>{
        showModal()
        }
  const LoginModal = ()=>{                                                        
      return (
        <Modal footer={null} open={isModalOpen} width={430} onOk={handleOk} onCancel={handleCancel}>
         <div className="flex flex-col items-center gap-y-5 px-3 py-3">
           <Image src="/images/phone_login.svg" alt="phone icon" width={80} height={10} />
           <div className="text-center">
            <h1 className="text-lg font-bold">Please enter your mobile number</h1>
            <p>
            Your transactions will be linked to this number. Don’t worry, we’ll never share it.
            </p>
           </div>
           <input type="text" maxLength={10} placeholder="99999999999" className="text-center placeholder:text-gray-300 placeholder:text-2xl text-2xl font-bold py-2 outline-none" onChange={(e)=>onInputChange(e.target.value)} />
            <button className = {`bg-gray-100 text-gray-300 text-lg px-6 py-1 rounded-md`} ref={loginRef} disabled>Send OTP</button>
            <p className="text-sm font-semibold">OR</p>
            <button className="text-white bg-[#EF1C74] py-[6px] px-6 rounded-md">Login with Corporate </button>
            <div className="text-center">
              <p className="text-xs text-gray-600">By clicking ‘Send OTP’, you accept our</p>
              <Link href="#">
                <button className="text-xs text-[#EF1C74] font-bold">Privacy policy</button>
              </Link>
            </div>
         </div>
        </Modal>
      )
    }
    const onInputChange = (value)=>{
      const login = loginRef.current
      if(value.length == 10)
      return (
        login.disabled = false,
        login.classList.remove('text-gray-300'),
        login.classList.add('bg-[#EF1C74]'),
        login.classList.add('text-white')
      )
    login.disabled = true
    login.classList.add('text-gray-300'),
    login.classList.remove('bg-[#EF1C74]','text-[ffffff]')
    }

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
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
        <button className="md:py-[4px] py-1 text-[#EF1C74] text-xs md:text-lg md:px-5 px-4 font-bold rounded-md border border-[#EF1C74]" onClick={login}>Login</button>
        {/* login modal */}
        <LoginModal />
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
