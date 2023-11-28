import { Button} from "antd"
import Image from "next/image"
import { useState , useEffect } from "react"
const ScrollTop = () => {
    const [backToTopBtn , setBackToTopBtn] = useState(false)
    const goToTop = ()=>{
      window.scrollTo({top:0 , left:0 ,behavior : "smooth"})
    }
    useEffect(()=>{
    window.onscroll = ()=>{
    if(window.scrollY > 300)
    return setBackToTopBtn(true)
    setBackToTopBtn(false)
   }
    },[])
  return (
      <button onClick={goToTop} className={`fixed bottom-9 right-9 text-3xl h-10 w-10 ${!backToTopBtn ?"hidden" : "block"} bg-gray-400 rounded-full`}>
        <i className='bx bx-chevron-up  text-white'></i>
      </button>

  )
}

export default ScrollTop
