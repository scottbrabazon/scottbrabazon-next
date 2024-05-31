import Link from 'next/link';
import Image from 'next/image';

const BlogThumbnail = ({newspost, index}) => {

   const {url, newsTitle, newsMainImage, newsContent} = newspost.fields

   return (

      <Link href={"/insights/" + url} passHref>
         <div className="primary-content fade-in">
            <h2>{newsTitle}</h2>
            <Image src={"https:" + newsMainImage.fields.file.url} alt={newsTitle} width="728" height="294" />
            <p>{newsContent.content[0].content[0].value}</p>
            <p className="read-more">Read more</p>
         </div>
      </Link>

   );
}

export default BlogThumbnail;