import Image from 'next/image';

const Footer = () => {

   let year = new Date().getFullYear();

   return (
      <footer>
            <a href="https://github.com/scottbrabazon" target="blank">
               <Image src="/img/github.svg" alt="Github" width="22" height="22" />
            </a>
            &nbsp;&nbsp;
            <a href="https://uk.linkedin.com/in/scottbrabazon" target="blank">
               <Image src="/img/linkedin.svg" alt="LinkedIn" width="22" height="22" />
            </a>
            <p>&nbsp;&nbsp;&copy; <span>{year}</span> Scott Brabazon</p>
      </footer>
   );
}

export default Footer;