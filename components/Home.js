import {Consumer} from './Context';
import Link from 'next/link';
import HeaderImg from './Animation/HeadlineImage';
import DevelopmentImg from './Animation/DevelopmentImg';
import RetailImg from './Animation/RetailImg';
import EmailImg from './Animation/EmailImg';
import DesignImg from './Animation/DesignImg';
import Image from 'next/image';

const Home = ({match}) => {
   
   return (

      <div className="home fade-in">

         <header>
            {/*<div>
               <HeaderImg />
            </div>*/}
            <div>
               <div className="header-decoration">
                  {/*<Image src="/img/home/header-decoration.svg" alt="Scott Brabazon" width={160} height={30} />*/}
                  <Image src="/img/signiture.svg" alt="Scott Brabazon" width={372} height={104} />
               </div>
               <h1>Scott Brabazon</h1>
               <h2>Frontend developer and designer</h2>
               <p>Hello, I&rsquo;m Scott. As an experienced frontend developer and designer, I help businesses offer their customers and clients high quality digital experiences and engaging concepts. I craft user interfaces using modern frontend technologies and make sure they get attention. I have worked in the Manchester creative industry for over 2 decades and during that time, I have worked on some on the very biggest names in the business.</p>
               <p>As a lifelong learner, I believe skills can be taught, however the willingness to keep improving and having that all important inquisitive mindset is a part of my personality. I’m never satisfied to just come up with ideas. Instead I have an almost impulsive need to act on them.</p>
               <p>I’m a fast learner, able to pick up new skills and juggle different projects and roles with relative ease. I currently work remotely or within the northwest of England and I am open for new opportunities.</p>
            </div>
         </header>

         <div className="quote">
            <p>A successful website does three things. It attracts the right kinds of visitors, guides them to the main services or products you offer, and collects contact details for future ongoing relations.</p>
         </div>

         <div className="catagories">

            <Link href="/development" passHref>
               <div className="development">
                  <DevelopmentImg />
                  <h2>Development</h2>
                  <p>Writing clean code is crucial for creating quick, interactive user interfaces. Clean, well-organised code makes the project easier to read, easier to maintain, and ensures it loads quickly in the browser. This practice not only enhances performance but also simplifies future development and debugging.</p>
                  <p className="cta">Take a look</p>
               </div>
            </Link>

            <Link href="/design" passHref>
               <div className="design">
                  <DesignImg />
                  <h2>Design</h2>
                  <p>In a survey of 500 consumers, half said that website design is important to a business’s overall brand. That suggests businesses should prioritize website design (or a redesign) to meet consumers’ expectations and strengthen their brand identity. Find out more about some of my recent campaigns.</p>
                  <p href="/design" className="cta">Take a look</p>
               </div>
            </Link>

            <Link href="/retail" passHref>
               <div className="retail">
                  <RetailImg />
                  <h2>Retail</h2>
                  <p>It's estimated that there are now 2.14 billion digital buyers worldwide, representing about 27.2 percent of the global population. This number has been rising rapidly and is expected to continue growing. I’ve worked with some major UK retailers and can help you maximize your results, leveraging this expanding market.</p>
                  <p className="cta">Take a look</p>
               </div>
            </Link>

         </div>
      </div>

   );
}

export default Home;