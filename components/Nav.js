import {Consumer} from './Context';
import Link from 'next/link';
import {Fragment} from 'react';
import {useRouter} from 'next/router';

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

   const closeMenu = () => {
      if (pos === -600) {
         clearInterval(id);
      } else {
         pos -= 6;
         elem.style.top = pos + 'px';
      }
   }

   const slideMenu = () => {
      elem = document.getElementById("nav");
      button = document.getElementById("nav-button");
      button.classList.toggle("open");
      if (pos === -600) {
         id = setInterval(openMenu, 1);
         openMenu()

      } else {
         clearInterval(id);
         id = setInterval(closeMenu, 1);
         closeMenu()
      }
   }

   const closeOnSelection = () => {
      elem = document.getElementById("nav");
      button = document.getElementById("nav-button");
      button.classList.toggle("open");
      clearInterval(id);
      id = setInterval(closeMenu, 1);
      closeMenu()
   }

   return (

      <Fragment>

         <button id="nav-button" onClick={slideMenu} aria-label="Burger menu" />

         <div id="nav-container">
            <nav id="nav">

               <Link href="/" >
                  <a onClick={() => closeOnSelection()} className={router.pathname == "/" ? "selected" : ""}>Home</a>
               </Link>

               <Link href="/projects" >
                  <a onClick={() => closeOnSelection()} className={router.pathname == "/projects" ? "selected" : ""}>Projects</a>
               </Link>

               <Link href="/react" >
                  <a onClick={() => closeOnSelection()} className={router.pathname == "/react" ? "selected" : ""}>React</a>
               </Link>

               <Link href="/ecommerce" >
                  <a onClick={() => closeOnSelection()} className={router.pathname == "/ecommerce" ? "selected" : ""}>Ecommerce</a>
               </Link>

               <Link href="/email" >
                  <a onClick={() => closeOnSelection()} className={router.pathname == "/email" ? "selected" : ""}>Email</a>
               </Link>

               <Link href="/design" >
                  <a onClick={() => closeOnSelection()} className={router.pathname == "/design" ? "selected" : ""}>Design</a>
               </Link>

               <Link href="/news" >
                  <a onClick={() => closeOnSelection()} className={router.pathname == "/news/[url]" || router.pathname == "/news" ? "selected" : ""}>News</a>
               </Link>

               <Link href="/contact" >
                  <a onClick={() => closeOnSelection()} className={router.pathname == "/contact" ? "selected" : ""}>Contact</a>
               </Link>
               
            </nav>
         </div>

      </Fragment>

   );
}

export default Nav;