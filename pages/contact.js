import {Fragment} from 'react';
import Contact from '../components/Contact';
import Head from 'next/head'

// scottbrabazon.com/contact

export default function Design() {
  return (

    <Fragment>

      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Contact</title>
        <meta name="description" content="XXXXXX" />
        <meta name="author" content="Scott Brabazon" />
        <meta property="og:title" content="Contact" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.scottbrabazon.com/contact" />
        <meta property="og:description" content="XXXXXXX" />
        {/*<meta property="og:image" content="image.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />*/}
      </Head>

      <header>
         <h1>Contact</h1>
      </header>

      <Contact />

    </Fragment>

  )
}
