import {Fragment} from 'react';
import Gallery from '../components/Gallery';
import Head from 'next/head'

// scottbrabazon.com/email

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

export default function Email({newsposts}) {
  return (

    <Fragment>

      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Email</title>
        <meta name="description" content="The global e-mail marketing market was valued at £5.42 billion in 2020 and is projected to increase to almost £13 billion by 2027. There are 4 billion daily email users accross the world and this number is expected to climb to 4.6 billion by 2025. If your traffic could do with a boost, take at look at some of the campaigns i’ve been involved in." />
        <meta name="author" content="Scott Brabazon" />
        <meta property="og:title" content="Email" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.scottbrabazon.com/email" />
        <meta property="og:description" content="The global e-mail marketing market was valued at £5.42 billion in 2020 and is projected to increase to almost £13 billion by 2027. There are 4 billion daily email users accross the world and this number is expected to climb to 4.6 billion by 2025. If your traffic could do with a boost, take at look at some of the campaigns i’ve been involved in." />
        {/*<meta property="og:image" content="image.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />*/}
      </Head>

      <header>
         <h1>Email</h1>
      </header>

      <Gallery 
        newsposts={newsposts} 
      />

    </Fragment>

  )
}
