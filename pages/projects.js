import {Fragment} from 'react';
import Gallery from '../components/Gallery';
import Head from 'next/head'

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

export default function Projects({newsposts}) {
  return (

    <Fragment>

      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Projects</title>
        <meta name="description" content="XXXXX" />
        <meta name="author" content="Scott Brabazon" />
        <meta property="og:title" content="Projects" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.scottbrabazon.com/projects" />
        <meta property="og:description" content="XXXXXX" />
        {/*<meta property="og:image" content="image.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />*/}
      </Head>

      <header>
         <h1>Projects</h1>
      </header>

      <Gallery 
        newsposts={newsposts} 
      />

    </Fragment>

  )
}
