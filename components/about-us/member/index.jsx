import { Card ,Tooltip ,Popover  } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
const { Meta } = Card;
const Member = ()=>{
  const clients = [
    {
      path : "/images/about/anshoo.jpg",
      title : "anshoo",
      description : "Anshoo has 20 years of professional experience in investing, consulting and tech roles across India and USA. Before magicpin, he was the second person on Lightspeed's India team where he spent 6 years. Prior to Lightspeed, Anshoo was at Bain & Co for 4 years in Boston and India with clients across consumer, tech and financial services sectors. Anshoo is a graduate from IIM-Ahmedabad.",
      role : "Co-founder and CEO",
      placement : 'right'
    },
    {
      path : "/images/about/brij.jpg",
      title : "brij bhushan",
      description : "Brij has spent a large part of his professional life closely involved in the startup ecosystem with Nexus as an investor and leadership role at early stage startup before that. He also spent 4 years at Bain & Co's India and USA office after graduating from IIM Bangalore and had been in tech roles prior to that. He is passionate about solving problems, building things from scratch and developing people. Startups provide such opportunities in abundance. Outside of living his dream of building magicpin, he likes spending time with his family, traveling and reading.",
      role : "Co-founder and COO",
      placement : 'right'
    },
    {
      path : "/images/about/chunky.jpg",
      title : "chunky shah",
      description : "Chunky brings over 15 years of experience in investment banking and strategic finance. He will lead M&A, equity investments, and investor relations at magicpin. Chunky has worked with firms like Credit Suisse, Kotak Investment Banking and KPMG.",
      role : "VP, Corp Dev & Financ",
      placement : 'right'
    },
    {
      path : "/images/about/aniket-shukla.jpg",
      title : "aniket shukla",
      description : "Aniket Shuka is VP for Brands Business and is responsible for onboarding National Brands on the platform. Before joining magicpin, he undertook multiple roles in Sales, Channel Management & Strategy at Texas Instruments. He pursued his MBA from IIM Ahmedabad & B.E. from NSIT, Delhi." ,
      role : "VP, Large Enterprises",
      placement : 'left'
    },
    {
      path : "/images/about/ankit-kumar.jpg",
      title : "ankit kumar",
      description : "Ankit has been a part of building some of India's most well known brands including Make in India and Royal Enfield. After spending close to a decade in advertising, he has more recently been working with tech startups and VCs in India, helping bringing their products to life via enduring brand narratives.",
      role : "Head, Marketing",
      placement : 'right'
    },
    {
      path : "/images/about/rahul-vij.jpg",
      title : "rahul vij",
      description : "Anshoo has 20 years of professional experience in investing, consulting and tech roles across India and USA. Before magicpin, he was the second person on Lightspeed's India team where he spent 6 years. Prior to Lightspeed, Anshoo was at Bain & Co for 4 years in Boston and India with clients across consumer, tech and financial services sectors. Anshoo is a graduate from IIM-Ahmedabad.",
      role : "VP, Large Enterprises",
      placement : 'right'
    },
    {
      path : "/images/about/naman.jpg",
      title : "naman mawandia",
      description : "Naman has 9 years of professional experience in investment banking and consulting. Prior to joining magicpin, he worked with Langham Capital, a boutique advisory firm focused on M&A and private equity for seven years closing transactions in sectors including technology, consumer, renewable energy and restaurants. He worked with McKinsey & Company focused on consumer sector before securing his MBA from Faculty of Management Studies (FMS), with a major in Finance. An alumnus of Shri Ram College of Commerce (SRCC), he graduated amongst the top 1% of Delhi University. Naman enjoys reading, investing in public markets and spending time with his son.",
      role : "SVP, Business",
      placement : 'right'
    },
    {
      path : "/images/about/abhishek.jpg",
      title : "Abhishek Arora",
      description : "Abhishek has spent a decade at startups at different stages, and varied industries as a founder, and as a technology and product leader. An engineer from DCE, he has built products used by tens of millions at ixigo, solved data science problems for banks at his startup LoanCircle, built the world’s most data intensive housing research product at ZeroDown and has a string of big and small side projects.",
      role : "SVP, Business",
      placement : 'left'
    },
    {
      path : "/images/about/naman.jpg",
      title : "Amar",
      description : "Naman has 9 years of professional experience in investment banking and consulting. Prior to joining magicpin, he worked with Langham Capital, a boutique advisory firm focused on M&A and private equity for seven years closing transactions in sectors including technology, consumer, renewable energy and restaurants. He worked with McKinsey & Company focused on consumer sector before securing his MBA from Faculty of Management Studies (FMS), with a major in Finance. An alumnus of Shri Ram College of Commerce (SRCC), he graduated amongst the top 1% of Delhi University. Naman enjoys reading, investing in public markets and spending time with his son.nal brings rich experience in developing and scaling technology solutions. He is a seasoned technical leader with more than 15 years of experience in technology leadership roles including companies like AppDynamics, Cisco and Domino Data.",
      role : "SVP, Business",
      placement : 'right'
    },


  ]
  return (
    <section className="container mx-auto md:w-[85%] max-md:px-5 py-5 mb-7 shadow-md rounded-md">
      <div className="flex flex-col items-center gap-y-5 px-5 ">
       <div>
        <h1 className='text-center'>Our Team</h1>
        <h1 className="text-center">From starting from scratch to scaling up, magicpin’s phenomenal growth journey has been helmed by a leadership team on a mission to redefine hyperlocal retail. The team is committed to make magicpin a customer-centric hyperlocal marketplace, linking retailers to customers in a way that revolutionises commerce.</h1>
       </div>
         
      <div className='flex flex-wrap justify-center  gap-x-5 gap-y-3 w-[80%] px-3.5'>
      {
          clients.map((client ,index)=>(
          <Tooltip 
            title={<div className='h-[260px] max-md:hidden w-[400px] rounded-md px-4 py-2 overflow-y-auto bg-[#338AED]'> <p>{client.description}</p></div>}
             placement={client.placement}
             arrow = {false}  
             color='transparent'
             zIndex = {40}     
             key={index}
             >
            <Card
             hoverable
             size='small'
             style={{
             width: 200,            
             }}
             className='shadow-lg'
             cover={<Image src={client.path} alt={client.title} width={300} height={10} className='p-4 transform hover:scale-110 delay-100' />}
             >
           <Meta title={<h1 className='text-center capitalize font-bold'>{client.title}</h1>} description={<h1 className='text-center capitalize '>{client.role}</h1>}/>
          </Card>    
        </Tooltip>
           
          ))
         }
      </div>
      {/*join us*/} 
      <div className='bg-[#FF9800] px-8 rounded-md text-white text-[20px] font-semibold gap-y-4 flex flex-col items-center p-3'>
      <div>
        <h1 className='text-center text-[21px] tracking-tighter '>Bring Questions. Build Answers</h1>
          <h1 className='text-center leading-tight'>magicpin is proud to have smart, motivated and switched-on talent in every function. With a diversity of skills and experience, our employees innovate and execute with a laser focus on the future. If you’re passionate about ushering in the next evolution of local commerce, we’d love to hear from you.JOIN US</h1>
        </div>
         <Link href="#">
           <button className='bg-white px-3 rounded-md text-[16px] py-1 text-[#FF9800]'>JOIN US</button>
         </Link>   
      </div> 

 {/*read now*/} 
  <div className='bg-[#338AED] w-full md:px-20 rounded-md text-white text-[20px] font-semibold gap-y-4 flex flex-col items-center p-3'>
      <div>
        <h1 className='text-center text-[21px] tracking-tighter'>What Are We Up To?</h1>
          <h1 className='text-center leading-tight'>From breaking news to headline-worthy stories, exciting happenings, and major magicpin milestones, stay in the loop for all things magic!</h1>
        </div>
         <Link href="#">
           <button className='bg-white px-3 rounded-md text-[16px] py-1 text-[#338AED]'>JOIN US</button>
         </Link>   
      </div> 
      </div>
    </section>
  )
}

export default Member