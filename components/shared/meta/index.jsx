import Head from "next/head"
const Meta =({title="page title is empty" , description="" ,keywords=""})=>{
  return (
    <>
    <Head>
       <link rel="icon" href="/images/favicon.ico" />
            <title>{title} - {process.env.NEXT_PUBLIC_DOMAIN}</title>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
            <meta name="robots" content="index,follow"/>
            <meta property="og:title" content={process.env.NEXT_PUBLIC_BRAND_NAME}/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content={process.env.NEXT_PUBLIC_BRAND_LOGO}/>
            <meta property="og:url" content="website"/>
      </Head>
    </>
  )
}

export default Meta
