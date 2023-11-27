import Head from "next/head"
import Footer from "../shared/footer"
import Hero from "./hero"
import FaishoBrand from "./faishon-brand"
import Category from "./category"
import FoodBrand from "./food-brand"
import Voucher from "./voucher"
const Home = ()=>{
  return (
  <>
    <Head>
        <title>magicpin | Local Savings SuperApp</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
    <Hero/>
    <Category />
    <FaishoBrand/>
    <FoodBrand />
    <Voucher />
    <Footer/>
  </>
  )
}

export default Home
