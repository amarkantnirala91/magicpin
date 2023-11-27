import Image from "next/image";
import { Modal} from "antd";
import Link from "next/link";
import { useRef } from "react";
const LoginSingup = ({ isModalOpen, handleOk, handleCancel })=>{  
    const loginRef = useRef();
    const onInputChange = (value)=>{
      const login = loginRef.current
      if(value.length == 10)
      return (
        login.disabled = false,
        login.classList.remove('text-gray-300','bg-gray-100'),
        login.classList.add('bg-[#EF1C74]','text-white')
      )
    login.disabled = true
    login.classList.add('text-gray-300','bg-gray-100'),
    login.classList.remove('bg-[#EF1C74]','text-white')
    }                                                      
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
  export default LoginSingup