import {Fragment} from 'react';
import {Consumer} from '../../components/Context';
import BlogThumbnail from '../../components/BlogThumbnail';
import Head from 'next/head';

export async function getStaticProps() {

  var contentful = require('contentful');
  var client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({content_type: "newsPost"})

  return {
    props: {
      newsposts: res.items
    }
  }
}

// scottbrabazon.com/insights

export default function NewsHomepage({newsposts}) {

  return (

    <Fragment>

      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Insights</title>
        <meta name="description" content="The latest insights in the world of design and front end developemnt." />
        <meta name="author" content="Scott Brabazon" />
        <meta property="og:title" content="Insights" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.scottbrabazon.com/insights" />
        <meta property="og:description" content="The latest insights in the world of design and front end developemnt." />
        {/*<meta property="og:image" content="image.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />*/}
      </Head>

      <header>
        <h1>Insights</h1>
      </header>

      <div>

        {newsposts.map( (newspost, index) =>
          <BlogThumbnail 
            key={newspost.sys.id}
            newspost={newspost}
            index={index}
          />

        )}

      </div>

    </Fragment>

  )
}
