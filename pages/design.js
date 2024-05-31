import {Fragment} from 'react';
import Gallery from '../components/Gallery';
import Head from 'next/head';
import Script from 'next/script';


// scottbrabazon.com/design

export async function getStaticProps() {

  var contentful = require('contentful');
  var client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const newsPosts = await client.getEntries({content_type: "newsPost"})

  return {
    props: {
      newsposts: newsPosts.items,
    }
  }
}


export default function Design({newsposts}) {

  return (

    <Fragment>

      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Design</title>
        <meta name="description" content="In a survey of 500 consumers, half said that website design is important to a business’s overall brand. That suggests businesses should prioritize website design (or a redesign) to meet consumers’ expectations and strengthen their brand identity. Find out more about some of my recent campaigns." />
        <meta name="author" content="Scott Brabazon" />
        <meta property="og:title" content="Design" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.scottbrabazon.com/design" />
        <meta property="og:description" content="In a survey of 500 consumers, half said that website design is important to a business’s overall brand. That suggests businesses should prioritize website design (or a redesign) to meet consumers’ expectations and strengthen their brand identity. Find out more about some of my recent campaigns." />
        {/*<meta property="og:image" content="image.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />*/}
      </Head>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-TG1PM9QJQ3"
        strategy="afterInteractive"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TG1PM9QJQ3');
        `}
      </Script>

      <header>
         <h1>Design</h1>
      </header>
      
      <Gallery 
        newsposts={newsposts} 
      />

    </Fragment>

  )
}
