import Image from "next/image";
import Link from "next/link";
const Footer = ({padding})=>{
      const social = [
        {
         icon : "bx bxl-facebook"
        },
         {
          icon : "bx bxl-instagram"
         },
         {
            icon : "bx bxl-linkedin"
        },
        {
            icon : "bx bxl-twitter"
        },
      ]
      const footerMenu =[
        {
            label:"restaurants",
            href : "#"
        },
        {
            label:"beauty",
            href : "#"
        },
        {
            label:"fashion",
            href : "#"
        },
        {
            label:"grocery",
            href : "#"
        },
        {
            label:"fitness",
            href : "#"
        },
        {
            label:"electronics",
            href : "#"
        },
        {
            label:"hotel",
            href : "#"
        },
        {
            label:"pharmacy",
            href : "#"
        },
        {
            label:"other",
            href : "#"
        },
      ]
      const cities = [
        {
            label : 'pune',
            href : '#'
        },
        {
            label : 'banglore',
            href : '#'
        },
        {
            label : 'new delhi',
            href : '#'
        },
        {
            label : 'mumbai',
            href : '#'
        },
        {
            label : 'hyderabad',
            href : '#'
        },
        {
            label : 'kolkata',
            href : '#'
        },
        {
            label : 'gurgaon',
            href : '#'
        },
        {
            label : 'noida',
            href : '#'
        },

      ]
      
      const localities = [
        {
            label : 'kothrud,pune',
            href : '#'
        },
        {
            label : 'kalyan nagar,banglore',
            href : '#'
        },
        {
            label : 'connaught place,new delhi',
            href : '#'
        },
        {
            label : 'chembur,mumbai',
            href : '#'
        },
        {
            label : 'wakad,hyderabad',
            href : '#'
        },
        {
            label : 'kormangla,kolkata',
            href : '#'
        },
        {
            label : 'sector 29,gurgaon',
            href : '#'
        },
        {
            label : 'new bel road,noida',
            href : '#'
        },

      ]
      
      const pharmacies = [
        {
            label : 'jyotiba medical',
            href : '#'
        },
        {
            label : 'omkar medical and general store',
            href : '#'
        },
        {
            label : 'ash chemist',
            href : '#'
        },
        {
            label : 'new purvi medical stores',
            href : '#'
        },
        {
            label : 'giriraj pharmacy',
            href : '#'
        },
        {
            label : 'pooja medical & general stores',
            href : '#'
        },
        {
            label : 'apollo pharmacy',
            href : '#'
        },
        {
            label : 'pavitra medical',
            href : '#'
        },

      ]
      
      const dines = [
        {
            label : 'teraco grill',
            href : '#'
        },
        {
            label : 'caffe azzure',
            href : '#'
        },
        {
            label : 'ecstasy bar and fantasy',
            href : '#'
        },
        {
            label : 'cheb bar',
            href : '#'
        },
        {
            label : 'gillys rabotar',
            href : '#'
        },
        {
            label : 'the trace at gillys redefined',
            href : '#'
        },
        {
            label : 'sherelocks pub',
            href : '#'
        },
        {
            label : 'hotel kunal',
            href : '#'
        },

      ]
      
      const fhubs = [
        {
            label : 'shoppers stop',
            href : '#'
        },
        {
            label : 'allen solly',
            href : '#'
        },
        {
            label : 'helios',
            href : '#'
        },
        {
            label : 'lenskart',
            href : '#'
        },
        {
            label : 'shoppers stop',
            href : '#'
        },
        {
            label : 'U.S. Polo Assn.',
            href : '#'
        },
        {
            label : 'wildcraft',
            href : '#'
        },
        {
            label : 'allen solly',
            href : '#'
        },

      ]

      const deliveries = [
        {
            label : 'Wow! Momo',
            href : '#'
        },
        {
            label : 'Madras Cafe',
            href : '#'
        },
        {
            label : 'La Pinoz Pizza',
            href : '#'
        },
        {
            label : 'House of Paratha',
            href : '#'
        },
        {
            label : 'Ganeshwaram',
            href : '#'
        },
        {
            label : 'Starboy Pizza & Shakes',
            href : '#'
        },
        {
            label : 'Jija Pure Veg',
            href : '#'
        },
        {
            label : 'Chinese Wok - Wok Express',
            href : '#'
        },

      ]
      
      const bottomMenu =[
        {
            label:"news room",
            href : "#"
        },
        {
            label:"about is",
            href : "#"
        },
        {
            label:"vouchers",
            href : "#"
        },
        {
            label:"arround you",
            href : "#"
        },
        {
            label:"blog",
            href : "#"
        },
        {
            label:"near me",
            href : "#"
        },
        {
            label:"terms & conditions",
            href : "#"
        },
        {
            label:"sitemap",
            href : "#"
        },
        {
            label:"partner",
            href : "#"
        },
        {
            label:"brands",
            href : "#"
        },
        {
            label:"magicpin for corporate",
            href : "#"
        }
      ]
  return (
    <section 
    className={` pb-12`} 
    style={{ backgroundImage: `url('/images/footer-bg.svg')`, backgroundSize : 'cover' ,paddingTop : `${padding||'140px'}`}}
    >
     <div className="container mx-auto max-md:px-2 md:w-[89%] flex flex-col gap-y-5">
      <div className="flex justify-between items-center max-md:flex-col max-md:gap-y-5">
         <div className="flex gap-3 items-center ">
          <Image alt="otder here" src="/images/orderhere-logo.svg" width={30} height={30} />
          <Link href="#">
           <button className="text-lg text-[#EF1C7D] font-semibold underline">Create your free online dukaan</button>
          </Link>
         </div>
         <div className="flex gap-5">
         {
          social.map((item,index)=>(
           <button key={index} className="w-8 h-8 text-xl bg-[#EF1C7D] rounded-full text-white ">
             <i className={item.icon} ></i>
           </button>
          ))
         }
         </div>
      </div>
        {/* Footer menu */}
      <div className="flex gap-4 max-md:flex-col "> 
        <span className="text-[#EF1C7D] uppercase font-semibold"> categories : </span> 
        <div className="flex gap-x-6 max-md:flex-wrap">
            {
              footerMenu.map((item,index)=>(
                    <Link href={item.href} key={index}>
                        <button className="text-white capitalize font-semibold">{item.label}</button>
                    </Link>
                ))
            }
        </div>
      </div>
      {/* address */}
      <div className="text-white text-sm">
         <div>
            <span>Name of the Company:</span> <span className="uppercase">SAMAST TECHNOLOGIES PRIVATE LIMITED</span>
         </div>
         <div>
            <span className="uppercase">cin:</span> <span className="uppercase">U74140HR2015PTC073829</span>
         </div>
         <div>
            <span>Registered Office Address: </span> <span >Plot No.379 & 380, Sector - 29, Near IFFCO Chowk Metro Station, Gurugram, Haryana-122001, India</span>
         </div>
      </div>
        {/* footer middle menu */}
        <div className="grid md:grid-cols-6">
              {/* first menu */}
           <div className="flex flex-col gap-y-6">
             <h1 className="uppercase font-semibold text-[#EF1C7D]">popular cities</h1>
             <div className="text-white flex flex-col text-sm capitalize">
                {
                 cities.map((city,index)=>(
                    <Link href={city.href} key={index}>
                        {city.label}
                    </Link>
                 ))
                }
             </div>
           </div>
             {/* second menu */}
             <div className="flex flex-col gap-y-6">
             <h1 className="uppercase font-semibold text-[#EF1C7D]">popular localities</h1>
             <div className="text-white flex flex-col text-sm capitalize">
                {
                 localities.map((locality,index)=>(
                    <Link href={locality.href} key={index}>
                        {locality.label}
                    </Link>
                 ))
                }
             </div>
           </div>
             {/* third menu */}
             <div className="flex flex-col gap-y-6">
             <h1 className="uppercase font-semibold text-[#EF1C7D]">popular dines-in</h1>
             <div className="text-white flex flex-col text-sm capitalize">
                {
                 dines.map((dine,index)=>(
                    <Link href={dine.href} key={index}>
                        {dine.label}
                    </Link>
                 ))
                }
             </div>
           </div>
             {/* fourth menu */}
             <div className="flex flex-col gap-y-6">
             <h1 className="uppercase font-semibold text-[#EF1C7D]">popular pharmacies</h1>
             <div className="text-white flex flex-col text-sm capitalize">
                {
                 pharmacies.map((pharmacy,index)=>(
                    <Link href={pharmacy.href} key={index}>
                        {pharmacy.label}
                    </Link>
                 ))
                }
             </div>
           </div>
             {/* fifth menu */}
             <div className="flex flex-col gap-y-6">
             <h1 className="uppercase font-semibold text-[#EF1C7D]">popular fashion hubs</h1>
             <div className="text-white flex flex-col text-sm capitalize">
                {
                 fhubs.map((fhub,index)=>(
                    <Link href={fhub.href} key={index}>
                        {fhub.label}
                    </Link>
                 ))
                }
             </div>
           </div>
             {/* sixth menu */}
             <div className="flex flex-col gap-y-6">
             <h1 className="uppercase font-semibold text-[#EF1C7D]">popular delivery restaurants</h1>
             <div className="text-white flex flex-col text-sm capitalize">
                {
                 deliveries.map((delivery,index)=>(
                    <Link href={delivery.href} key={index}>
                        {delivery.label}
                    </Link>
                 ))
                }
             </div>
           </div>
        </div>
        {/* footer bottom menu */}
        <div className="border-t border-b flex max-md:flex-wrap justify-center gap-5  mt-6 text-slate-50 capitalize text-sm font-semibold py-2 ">
           {
            bottomMenu.map((menu,index)=>(
                <Link key={index} href={menu.href}>
                    {menu.label}
                </Link>
            ))
           }
        </div>
        <h1 className="text-center uppercase font-semibold text-[#EF1C7D]">directory</h1>
        <div className="flex justify-center max-md:flex-wrap gap-5">
            <Link href="#">
            <button className="text-sm uppercase text-white">a</button>
            </Link> 
            <Link href="#">
            <button className="text-sm uppercase text-white">b</button>
            </Link> 
            <Link href="#">
            <button className="text-sm uppercase text-white">c</button>
            </Link>   
            <Link href="#">
            <button className="text-sm uppercase text-white">d</button>
            </Link> 
            <Link href="#">
            <button className="text-sm uppercase text-white">e</button>
            </Link> 
            <Link href="#">
            <button className="text-sm uppercase text-white">f</button>
            </Link> 
            <Link href="#">
            <button className="text-sm uppercase text-white">g</button>
            </Link> 
            <Link href="#">
            <button className="text-sm uppercase text-white">h</button>
            </Link> 
            <Link href="#">
            <button className="text-sm uppercase text-white">i</button>
            </Link> 
            <Link href="#">
            <button className="text-sm uppercase text-white">j</button>
            </Link> 
            <Link href="#">
            <button className="text-sm uppercase text-white">k</button>
            </Link> 
            <Link href="#">
            <button className="text-sm uppercase text-white">l</button>
            </Link> 
            <Link href="#">
            <button className="text-sm uppercase text-white">m</button>
            </Link> 
            <Link href="#">
            <button className="text-sm uppercase text-white">n</button>
            </Link> 
            <Link href="#">
            <button className="text-sm uppercase text-white">o</button>
            </Link> 
            <Link href="#">
            <button className="text-sm uppercase text-white">p</button>
            </Link> 
            <Link href="#">
            <button className="text-sm uppercase text-white">q</button>
            </Link> 
            <Link href="#">
            <button className="text-sm uppercase text-white">r</button>
            </Link> <Link href="#">
            <button className="text-sm uppercase text-white">s</button>
            </Link> <Link href="#">
            <button className="text-sm uppercase text-white">t</button>
            </Link> <Link href="#">
            <button className="text-sm uppercase text-white">u</button>
            </Link> <Link href="#">
            <button className="text-sm uppercase text-white">v</button>
            </Link> <Link href="#">
            <button className="text-sm uppercase text-white">w</button>
            </Link> <Link href="#">
            <button className="text-sm uppercase text-white">x</button>
            </Link> 
            <Link href="#">
            <button className="text-sm uppercase text-white">y</button>
            </Link> <Link href="#">
            <button className="text-sm uppercase text-white">z</button>
            </Link> 
            <Link href="#">
            <button className="text-sm capitalize text-white">others</button>
            </Link> 
        </div>
        <div className="flex justify-center gap-5">
            <Link href="#">
             <Image src="/images/googleplay.webp" alt="googleplay" width={110} height={10}></Image>
            </Link>
            <Link href="#">
             <Image src="/images/appstore.webp" alt="googleplay" width={110} height={10}></Image>
            </Link>
            <Link href="#">
             <Image src="/images/chromeweb.webp" alt="googleplay" width={110} height={10}></Image>
            </Link>
        </div>
     </div>
    </section>
  )
}
export default Footer
