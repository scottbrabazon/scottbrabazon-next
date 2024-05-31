import {Fragment} from 'react';
import Home from '../components/Home';
import Head from 'next/head';

// scottbrabazon.com/

export default function HomePage() {

  return (

    <Fragment>

      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Scott Brabazon | Frontend Developer | Manchester</title>
        <meta name="description" content="Hello, I'm Scott. As an experienced frontend developer and designer, I help businesses offer their customers and clients high quality digital experiences and engaging concepts. I craft user interfaces using modern frontend technologies and make sure they get attention. I have worked in the Manchester creative industry for over 2 decades and during that time, I have worked on some on the very biggest names in the business." />
        <meta name="author" content="Scott Brabazon" />
        <meta property="og:title" content="Scott Brabazon | Frontend Developer | Manchester" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.scottbrabazon.com/" />
        <meta property="og:description" content="Hello, I'm Scott. As an experienced frontend developer and designer, I help businesses offer their customers and clients high quality digital experiences and engaging concepts. I craft user interfaces using modern frontend technologies and make sure they get attention. I have worked in the Manchester creative industry for over 2 decades and during that time, I have worked on some on the very biggest names in the business." />
        {/*<meta property="og:image" content="image.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />*/}
      </Head>

      <Home />

    </Fragment>

  )
}
