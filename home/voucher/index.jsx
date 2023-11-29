import Image from "next/image"
import Link from "next/link"
import {Form , Input ,Button} from "antd"
const Voucher = ()=>{
    const rightImage = [
        {
            path : "/images/wataburger-logo.png"
        },
        {
            path : "/images/vapour-logo.png"
        },
        {
            path : "/images/molecule-logo.png"
        },
        {
            path : "/images/mudpipe-logo.png"
        },
        {
            path : "/images/bindals-logo.png"
        },

    ]
    const leftImage = [
        {
            path : "/images/pcj-logo.png"
        },
        {
            path : "/images/mcd-logo.png"
        },
        {
            path : "/images/bira-logo.png"
        },
        {
            path : "/images/mudpipe-logo.png"
        },

    ]
  return (
    <section  className="container mx-auto md:w-[83%] max-md:px-5 flex flex-col items-center gap-y-6 relative top-24">
        <div className="text-center">
           <h1 className="text-lg font-semibold ">Download the <span className="font-bold">magicpin app </span>for</h1>
           <h1 className="text-[26px] font-bold tracking-wide">Cashback, Vouchers, Reviews,</h1>
           <h1 className="text-lg font-semibold">and much more wherever you go!</h1>
        </div>
        {/* menu */}
        <div className="border w-[100%] md:w-[60%] py-1 rounded-full flex justify-evenly">
         <div className="w-fit">
          <Link href="#"> 
           <Image src="/images/dine.webp" alt="f&b" width={50} height={10} />
          </Link>
          <h1 className="text-center uppercase cursor-default hover:text-black text-[18px] text-gray-500">f&b</h1>
         </div>
         <div className="w-fit">
          <Link href="#"> 
           <Image src="/images/beauty.webp" alt="f&b" width={50} height={10} />
          </Link>
          <h1 className="text-center text-[18px] cursor-default hover:text-black  text-gray-500">Beauty</h1>
         </div>
          
         <div className="w-fit">
          <Link href="#"> 
           <Image src="/images/faishon.webp" alt="f&b" width={50} height={10} />
          </Link>
          <h1 className=" text-center text-[18px] hover:text-black cursor-default text-gray-500">Faishon</h1>
         </div>
          
         <div className="w-fit flex flex-col  items-center">
          <Link href="#"> 
           <Image src="/images/pharmacy.webp" alt="f&b" width={50} height={10} />
          </Link>
          <h1 className="text-center text-[18px] text-gray-500 hover:text-black cursor-default">Pharmacy</h1>
         </div>
          
         <div className="w-fit">
          <Link href="#"> 
           <Image src="/images/basket.webp" alt="f&b" width={50} height={10} />
          </Link>
          <h1 className=" text-center text-[18px] text-gray-500 hover:text-black cursor-default">Grocery</h1>
         </div>
          
        </div>
        <p className="">Get the app download link via SMS and start using our app today. Ready to get started?</p>
      
        <Form className="flex gap-4 items-center">
            <Form.Item name="phone" rules={[{required : true,message:'Please enter valid phone no'}]}>
            <Input
                addonBefore={<h1 className="">+91 </h1>}
                placeholder="Enter Mobile number"
                size="large"
                style={{ placeholder: { color: 'text-gray-800' }}}
                className=" md:w-[310px]"
                />

            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" type="text" className="bg-[#EF1C74] h-10 w-fit text-[14px] tracking-tighter text-white"  >
                    Share now
                </Button>
            </Form.Item>
        </Form>
     
        <div className="flex items-center gap-x-9 -mt-5">
          <Link href ="#">
          <button >
                <Image src="/images/googleplay.webp" alt="google play" width={120} height={10}/>
            </button>
          </Link>
          <Link href ="#">
          <button >
                <Image src="/images/appstore.webp" alt="google play" width={120} height={10}/>
            </button>
          </Link>
        </div>
        <div className="md:w-[80%] shadow-md border  rounded-md bg-white grid max-md:gap-y-5 decoration-violet-50 md:grid-cols-2 py-5">
         <div className="flex flex-col items-center md:border-r max-md:border-b px-4 md:px-10 gap-y-3">
           <div className="flex gap-3 max-md:hidden ">
             {
                leftImage && leftImage.map((image,index)=>(
                    <Link href="#" key={index}>
                        <button>
                            <Image src={image.path} alt={`footer image ${index}`} width={40} height={20}/>
                        </button>
                    </Link>
                ))
             }
            </div> 
            <Link href="#">
                <button className="text-[#EF1C74] font-bold">magicpin for Brands</button>
            </Link>
            <p className="text-xs text-gray-500 text-center"> 
			   Try the most powerful platform to drive consumer engagement, offline commerce and 
			   generate actionable insights. 
			</p>
           <Link href="#">
           <Button type="text"  className="rounded-full h-[40px] w-[40px] relative" >
            <Image src="/images/arrow-right-pink-bg.svg" alt="left arrow" layout="fill" />
           </Button>
           </Link>
         </div>
         {/*second */}
         <div className="flex flex-col items-center  gap-y-3 px-4 md:px-10">
         <div className="flex gap-3 border-l max-md:hidden">
             {
                rightImage && rightImage.map((image,index)=>(
                    <Link href="#" key={index}>
                        <button>
                            <Image src={image.path} alt={`footer image ${index}`} width={40} height={20}/>
                        </button>
                    </Link>
                ))
             }
            </div> 
                <Link href="#">
                    <button className="text-[#EF1C74] font-bold">magicpin for SME retailers</button>
                </Link>
            <p className="text-xs text-gray-500 text-center"> 
                Promote your business with a platform designed to attract the right audience based on 
                location, spending pattern, gender, and more.	
			</p>
           <Link href="#">
           <Button type="text" className="rounded-full h-[40px] w-[40px] relative" >
            <Image src="/images/arrow-right-pink-bg.svg" alt="left arrow" layout="fill" />
           </Button>
           </Link>
         </div>
        </div>
    </section>
  )
}
export default Voucher
