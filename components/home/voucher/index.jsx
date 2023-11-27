import Image from "next/image"
import Link from "next/link"

Image
const Voucher = ()=>{
  return (
    <section  className="container py-5 mx-auto md:w-[83%] max-md:px-5 pt-16 flex flex-col items-center">
        <div className="text-center">
           <h1 className="text-lg font-semibold ">Download the <span className="font-bold">magicpin app </span>for</h1>
           <h1 className="text-3xl font-semibold">Cashback, Vouchers, Reviews,</h1>
           <h1 className="text-lg font-semibold">and much more wherever you go!</h1>
        </div>
        {/* menu */}
        <div className="border w-[60%] py-1 rounded-full flex justify-evenly">
         <div className="w-fit">
          <Link href="#"> 
           <Image src="/images/dine.webp" alt="f&b" width={50} height={10} />
          </Link>
          <h1 className="uppercase text-center">f&b</h1>
         </div>
         <div className="w-fit">
          <Link href="#"> 
           <Image src="/images/beauty.webp" alt="f&b" width={50} height={10} />
          </Link>
          <h1 className="capitalize text-center">beauty</h1>
         </div>
          
         <div className="w-fit">
          <Link href="#"> 
           <Image src="/images/dine.webp" alt="f&b" width={50} height={10} />
          </Link>
          <h1 className="uppercase text-center">f&b</h1>
         </div>
          
         <div className="w-fit">
          <Link href="#"> 
           <Image src="/images/dine.webp" alt="f&b" width={50} height={10} />
          </Link>
          <h1 className="uppercase text-center">f&b</h1>
         </div>
          
         <div className="w-fit">
          <Link href="#"> 
           <Image src="/images/dine.webp" alt="f&b" width={50} height={10} />
          </Link>
          <h1 className="uppercase text-center">f&b</h1>
         </div>
          
        </div>
    </section>
  )
}
export default Voucher
