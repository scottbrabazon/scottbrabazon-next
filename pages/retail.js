import {Fragment} from 'react';
import Gallery from '../components/Gallery';
import Head from 'next/head';
import Script from 'next/script';

// scottbrabazon.com/ecommerce

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

export default function Ecommerce({newsposts}) {
  return (

    <Fragment>

      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Retail</title>
        <meta name="description" content="It’s estimated that there are now 2.14 billion global digital buyers. That’s a lot of potential customers. In fact, with an expected global population of 7.87 billion people, that’s about 27.2 percent of the world’s population shopping online. What’s more, this number has been rising rapidly over the years and is expected to continue doing so. I’ve worked with some of the major retailers in the UK and can help you maximise your results." />
        <meta name="author" content="Scott Brabazon" />
        <meta property="og:title" content="Retail" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.scottbrabazon.com/retail" />
        <meta property="og:description" content="It’s estimated that there are now 2.14 billion global digital buyers. That’s a lot of potential customers. In fact, with an expected global population of 7.87 billion people, that’s about 27.2 percent of the world’s population shopping online. What’s more, this number has been rising rapidly over the years and is expected to continue doing so. I’ve worked with some of the major retailers in the UK and can help you maximise your results." />
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
         <h1>Retail</h1>
      </header>

      <Gallery 
        newsposts={newsposts} 
       />

    </Fragment>

  )
}
