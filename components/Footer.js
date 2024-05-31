const Footer = () => {

   let year = new Date().getFullYear();

   return (
      <footer>
            <p>&nbsp;&nbsp;&copy; <span>{year}</span> Scott Brabazon</p>
      </footer>
   );
}

export default Footer;