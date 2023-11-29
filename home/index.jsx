import Footer from "../shared/footer"
import Hero from "./hero"
import FaishoBrand from "./faishon-brand"
import Category from "./category"
import FoodBrand from "./food-brand"
import Voucher from "./voucher"
import Meta from "../shared/meta"
import ScrollTop from "../shared/scroll-top"
import Layout from "../shared/layout"
const Home = ()=>{
  return (
  <>
  <Meta 
   title="magicpin | Local Savings Super"
   description=""
   keywords="this is home page of magicpin"
   />
    <Hero/>
    <Category />
    <FaishoBrand/>
    <FoodBrand />
    <Voucher />
    <Footer/>
    <Layout />
    <ScrollTop />
  </>
  )
}

export default Home
