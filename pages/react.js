import {Fragment} from 'react';
import Gallery from '../components/Gallery';
import Head from 'next/head';

// scottbrabazon.com/react

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

export default function React({newsposts}) {

  return (

    <Fragment>

      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>React</title>
        <meta name="description" content="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Here are some examples of React projects I have recently completed." />
        <meta name="author" content="Scott Brabazon" />
        <meta property="og:title" content="React" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.scottbrabazon.com/react" />
        <meta property="og:description" content="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Here are some examples of React projects I have recently completed." />
        {/*<meta property="og:image" content="image.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />*/}
      </Head>

      <header>
         <h1>React</h1>
      </header>

      <Gallery 
        newsposts={newsposts} 
      />

    </Fragment>

  )
}
