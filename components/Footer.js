import { useEffect } from 'react';

const Footer = () => {
   useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://www.google-analytics.com/analytics.js';
      script.async = true;

      script.onload = () => {
         window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};
         ga.l=+new Date;
         ga('create', 'UA-85329524-1', 'auto');
         ga('send', 'pageview');
      };

      document.body.appendChild(script);
   }, []);

   let year = new Date().getFullYear();

   return (
      <footer>
         <p>&nbsp;&nbsp;&copy; <span>{year}</span> Scott Brabazon</p>
      </footer>
   );
}

export default Footer;
