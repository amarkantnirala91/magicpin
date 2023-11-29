import Image from "next/image"
import Link from "next/link"

const Contact = () => {
  return (
    <section className='container mx-auto md:w-[85%] max-md:px-5 py-4 mb-8 shadow-md rounded-md '>
      <div className="flex flex-col items-center gap-y-4">
         <h1 className="font-bold text-[18px]">Contact us</h1>
         <div className="grid md:grid-cols-2 border w-[80%]">
           <div className="border flex flex-col items-center gap-y-3 py-7 md:px-40">
             <h1 className="font-bold">Gurgaon Office</h1>
             <h1 className="text-center text-sm">
                Samast Technologies Pvt Ltd,
                Plot - 379 & 380, Sector - 29,
                Near IFFCO Chowk Metro Station
                Gurgaon - 122001
            </h1>
            </div>
            <div className="border flex flex-col items-center gap-y-3 py-7 md:px-40">
             <h1 className="font-bold">Bangalore Office</h1>
             <h1 className="text-center text-sm">
             388, Bluemoon Prime, 2nd Floor,
            9th Main Road, Sector - 7,
            HSR Layout,
            Bangalore - 560102
            </h1>
            </div>

            <div className="border flex flex-col items-center gap-y-3 py-7 md:px-40">
             <h1 className="font-bold">Pune Office</h1>
             <h1 className="text-center text-sm">
            Survey no.270,
            Row House No. 4,
            Runwal Shrusthi, Baner,
            Pune, Maharashtra 411045
            </h1>
            </div>
        
            <div className="border flex flex-col items-center gap-y-3 py-7 md:px-40">
             <h1 className="font-bold">Mumbai Office</h1>
              <h1 className="text-center text-sm">
                Co-inside Space Solutions LLP 26th Floor,
                Haware Infotech Park,Sector 30A,
                Vashi,
                Navi Mumbai - 400703
            </h1>
            </div>
      
         </div>
         <div className="flex justify-evenly gap-12 items-baseline">
           <div>
            <span className="text-sm font font-semibold">User:</span>
            <Link href="#"><button className="text-[#338AEE]">care@magicpin.in</button> </Link>
           </div>
            <Image src="/images/about/message.svg" alt="message" width={35} height={10} />
           <div>
            <span className="text-sm font font-semibold">Patner:</span>
            <Link href="#"><button className="text-[#338AEE]">partner@magicpin.in</button> </Link>
           </div>
         </div>
      </div>
    </section>
  )
}

export default Contact
