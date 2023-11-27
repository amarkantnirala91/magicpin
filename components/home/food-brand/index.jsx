import Image from "next/image"
import Link from "next/link"
import food from "@/json-api/food-brand.json"
const FoodBrand = () => {
  return (
    <section className="container py-5 mx-auto md:w-[83%] max-md:px-5">
       <h1 className="text-[27px] font-bold text-gray-700 mb-5">Top Food Brands</h1>
       <div className="grid grid-cols-3 md:grid-cols-5 max-md:gap-6 md:gap-y-7 lg:grid-cols-8">
       {
           food && food.map((faishon)=>(
                <div className="w-[90px] h-[90px]  md:w-[120px] md:h-[120px] rounded-full bg-white border-2 relative cursor-pointer" key={faishon.key}>
                <Link href={faishon.route}>
                 <Image src={faishon.path} alt={`faishon ${faishon.key}`} layout="fill" objectFit="cover" className=" rounded-full" />
                </Link>
             </div>
            ))
         }
       </div>
    </section>
  )
}

export default FoodBrand
