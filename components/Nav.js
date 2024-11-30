import {Consumer} from './Context';
import Link from 'next/link';
import {Fragment} from 'react';
import {useRouter} from 'next/router';
import Image from 'next/image';

const Nav = () => {

   const router = useRouter();

   // MOBILE NAVIGATION BURGER TOGGLE

   let id = null; 
   let pos = -600;
   let elem = "";
   let button = "";

   const openMenu = () => {
      if (pos === 0) {
         clearInterval(id);
      } else {
         pos += 6;
         elem.style.top = pos + 'px';
      }
   }

   // const closeMenu = () => {
   //    if (pos === -600) {
   //       clearInterval(id);
   //    } else {
   //       pos -= 6;
   //       elem.style.top = pos + 'px';
   //    }
   // }

   const slideMenu = () => {
      elem = document.getElementById("nav-container");
      button = document.getElementById("nav-button");
      button.classList.toggle("open");
      elem.classList.toggle("open");
   }


   const closeOnSelection = () => {
      elem = document.getElementById("nav-container");
      button = document.getElementById("nav-button");
      button.classList.remove("open");
      elem.classList.remove("open");
   }

   return (

      <Fragment>

         <button id="nav-button" onClick={slideMenu} aria-label="Burger menu" />

         <div id="nav-container">
            <nav id="nav">

               <Link href="/" legacyBehavior >
                  <a onClick={() => closeOnSelection()} className={router.pathname == "/" ? "selected" : ""}>Home</a>
               </Link>

               <Link href="/development" legacyBehavior >
                  <a onClick={() => closeOnSelection()} className={router.pathname == "/development" ? "selected" : ""}>Development</a>
               </Link>

               <Link href="/design" legacyBehavior >
                  <a onClick={() => closeOnSelection()} className={router.pathname == "/design" ? "selected" : ""}>Design</a>
               </Link>

               <Link href="/retail" legacyBehavior >
                  <a onClick={() => closeOnSelection()} className={router.pathname == "/retail" ? "selected" : ""}>Retail</a>
               </Link>

               <Link href="/insights" legacyBehavior >
                  <a onClick={() => closeOnSelection()} className={router.pathname == "/insights/[url]" || router.pathname == "/insights" ? "selected" : ""}>Insights</a>
               </Link>

               <Link href="/contact" legacyBehavior >
                  <a onClick={() => closeOnSelection()} className={router.pathname == "/contact" ? "selected" : ""}>Contact</a>
               </Link>
               
            </nav>
         </div>

         <div className="nav-contact-links">
            <a href="https://github.com/scottbrabazon" target="blank">
                  <Image src="/img/github.svg" alt="Github" width="22" height="22" />
               </a>
               <a href="https://uk.linkedin.com/in/scottbrabazon" target="blank">
                  <Image src="/img/linkedin.svg" alt="LinkedIn" width="22" height="22" />
               </a>
               <a href="mailto:scott.brabazon@googlemail.com" target="blank">
                  <Image src="/img/email.svg" alt="LinkedIn" width="22" height="22" />
               </a>
         </div>

      </Fragment>

   );
}

export default Nav;