import {Fragment} from 'react';
import Gallery from '../components/Gallery';
import Head from 'next/head'
import Script from 'next/script';

// scottbrabazon.com/projects

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

export default function Development({newsposts}) {
  return (

    <Fragment>

      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Development</title>
        <meta name="description" content="Writing clean code is crucial for creating quick, interactive user interfaces. Clean, well-organised code makes the project easier to read, easier to maintain, and ensures it loads quickly in the browser. This practice not only enhances performance but also simplifies future development and debugging." />
        <meta name="author" content="Scott Brabazon" />
        <meta property="og:title" content="Projects" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.scottbrabazon.com/development" />
        <meta property="og:description" content="Writing clean code is crucial for creating quick, interactive user interfaces. Clean, well-organised code makes the project easier to read, easier to maintain, and ensures it loads quickly in the browser. This practice not only enhances performance but also simplifies future development and debugging." />
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
         <h1>Development</h1>
      </header>

      <Gallery 
        newsposts={newsposts} 
      />

    </Fragment>

  )
}
