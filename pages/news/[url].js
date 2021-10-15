import {Fragment} from 'react';
import Image from 'next/image';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Head from 'next/head';
import BlogThumbnail from '../../components/BlogThumbnail';

const contentful = require('contentful');
var client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: 'newsPost'
  })
  const paths = res.items.map(item => {
    return {
      params: {url: item.fields.url}
    }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const {items} = await client.getEntries({
    content_type: 'newsPost',
    'fields.url': params.url
  })
  const res = await client.getEntries({content_type: "newsPost"})
  return {
    props: { 
      newsPost: items[0],
      newsposts: res.items
    }
  }
}

export default function NewsPostpage({newsPost, newsposts}) {

  const {url, newsTitle, newsMainImage, newsContent} = newsPost.fields

  return (
    <Fragment>

      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{newsTitle}</title>
        <meta name="description" content={newsContent.content[0].content.[0].value} />
        <meta name="author" content="Scott Brabazon" />
        <meta property="og:title" content={newsTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={"https:" + newsMainImage.fields.file.url} />
        <meta property="og:description" content={newsContent.content[0].content.[0].value} />
        {/*<meta property="og:image" content="image.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />*/}
      </Head>

      <div className="postContainer">

        <div className="blog-post fade-in">
          <h1>{newsTitle}</h1>
          <Image src={"https:" + newsMainImage.fields.file.url} alt={newsTitle} width="728" height="294" />
          <section>{documentToReactComponents(newsContent)}</section>
        </div>

        <div className="sidebar">
            <div>
              <h2>You may like...</h2>
              {newsposts.filter((i, index) => (index < 3)).map((newspost, index) =>
                <BlogThumbnail 
                  key={newspost.sys.id}
                  newspost={newspost}
                  index={index}
                />
              )}
            </div>
         </div>

       </div>

    </Fragment>
  )
}