import {Consumer} from './Context';
import Link from 'next/link';
import HeaderImg from './Animation/HeadlineImage';
import ReactImg from './Animation/ReactImg';
import EcommerceImg from './Animation/EcommerceImg';
import EmailImg from './Animation/EmailImg';
import DesignImg from './Animation/DesignImg';
import Image from 'next/image';

const Home = ({match}) => {
   
   return (

      <div className="home fade-in">

         <header>
            <div>
               <HeaderImg />
            </div>
            <div>
               <div className="header-decoration">
                  <Image src="/img/home/header-decoration.svg" alt="Scott Brabazon" width={160} height={30} />
               </div>
               <h1>Scott Brabazon</h1>
               <h2>Frontend developer & designer</h2>
               <p>Hello, I&rsquo;m Scott. As an experienced frontend developer and designer, I help businesses offer their customers and clients high quality digital experiences and engaging concepts. I craft user interfaces using modern frontend technologies and make sure they get attention. I have worked in the Manchester creative industry for over 2 decades and during that time, I have worked on some on the very biggest names in the business.</p>
               <p>As a lifelong learner, I believe skills can be taught, however the willingness to keep improving and having that all important inquisitive mindset is a part of my personality. I’m never satisfied to just come up with ideas. Instead I have an almost impulsive need to act on them.</p>
               <p>I’m a fast learner, able to pick up new skills and juggle different projects and roles with relative ease. I currently work remotely or within the northwest of England and I am open for new opportunities.</p>
            </div>
         </header>

         <div className="quote">
            <p>A successful website does three things. It attracts the right kinds of visitors, guides them to the main services or products you offer, and collects contact details for future ongoing relations.</p>
         </div>

         <div className="catagories">

            <Link href="/react" passHref>
               <div className="react">
                  <ReactImg />
                  <h2>React</h2>
                  <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Here are some examples of React projects I have recently completed.</p>
                  <p className="cta">Take a look</p>
               </div>
            </Link>

            <Link href="/ecommerce" passHref>
               <div className="ecommerce">
                  <EcommerceImg />
                  <h2>Ecommerce</h2>
                  <p>It’s estimated that there are now 2.14 billion global digital buyers. That’s a lot of potential customers. In fact, with an expected global population of 7.87 billion people, that’s about 27.2 percent of the world’s population shopping online. What’s more, this number has been rising rapidly over the years and is expected to continue doing so. I’ve worked with some of the major retailers in the UK and can help you maximise your results.</p>
                  <p className="cta">Take a look</p>
               </div>
            </Link>

            <Link href="/email" passHref>
               <div className="email">
                  <EmailImg />
                  <h2>Email</h2>
                  <p>The global e-mail marketing market was valued at £5.42 billion in 2020 and is projected to increase to almost £13 billion by 2027. There are 4 billion daily email users accross the world and this number is expected to climb to 4.6 billion by 2025. If your traffic could do with a boost, take at look at some of the campaigns i’ve been involved in.</p>
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

         </div>
      </div>

   );
}

export default Home;