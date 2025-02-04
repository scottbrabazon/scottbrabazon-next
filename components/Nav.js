import {Consumer} from './Context';
import Link from 'next/link';
import {Fragment} from 'react';
import {useRouter} from 'next/router';
import Image from 'next/image';

const Nav = () => {

   const router = useRouter();
   const currentPage = router.pathname === '/' ? 'home' : router.pathname.split('/')[1];

   return (

      <Fragment>
         
         <nav id="nav" className={`grid-container ${currentPage}`}>

            <div className="nav-container">

               <div className="nav-links">

                  <Link href="/" legacyBehavior >
                     <a className={router.pathname == "/" ? "selected" : ""}>home</a>
                  </Link>

                  <Link href="/work" legacyBehavior >
                     <a className={router.pathname == "/work" ? "selected" : ""}>work</a>
                  </Link>

                  <Link href="/about" legacyBehavior >
                     <a className={router.pathname == "/about" ? "selected" : ""}>about</a>
                  </Link>

               </div>

               <div className="social-links">


                  <Link href="https://www.linkedin.com/in/scottbrabazon/" legacyBehavior >
                     <a target="_blank" rel="noopener noreferrer">
                        <img 
                           src="/img/linkedin.svg" 
                           alt="Linkedin" 
                           priority="true"
                           className="social-logo"
                           width="20"
                           height="20"
                        />
                     </a>
                  </Link>

                  <Link href="mailto:scott.brabazon@googlemail.com" legacyBehavior >
                     <a target="_blank" rel="noopener noreferrer">
                        <img 
                           src="/img/email.svg" 
                           alt="Email" 
                           priority="true"
                           className="social-logo"
                           width="20"
                           height="20"
                        />
                     </a>
                  </Link>

               </div>

            </div>
            
         </nav>

      </Fragment>

   );
}

export default Nav;