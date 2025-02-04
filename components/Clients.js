import useImageFadeIn from '../hooks/useImageFadeIn';

const Clients = () => {

   useImageFadeIn();

   return (

      <section className="client-logos grid-container">

         <div className="content">
            <div>
               <h2>Favourite clients</h2>
            </div>

            <div className="logo-container">
               <img 
               src="/img/simplybe.svg" 
               alt="Simply Be" 
               className="client-logo image-fade-in"
               />
               <img 
               src="/img/united.svg" 
               alt="Manchester United" 
               className="client-logo image-fade-in"
               />
               <img 
               src="/img/jacamo.svg" 
               alt="Jacamo" 
               className="client-logo image-fade-in"
               />
               <img 
               src="/img/chelsea.svg" 
               alt="Chelsea FC" 
               className="client-logo image-fade-in"
               />
               <img 
               src="/img/ftc2c.svg" 
               alt="From the Caribbean 2 Coventry" 
               className="client-logo image-fade-in"
               />
               <img 
               src="/img/fashionworld.svg" 
               alt="Fashion World" 
               className="client-logo image-fade-in"
               />
               <img 
               src="/img/city.svg" 
               alt="Manchester City" 
               className="client-logo image-fade-in"
               />
               <img 
               src="/img/cheshirepixel.svg" 
               alt="Cheshire Pixel" 
               className="client-logo image-fade-in"
               />
            </div>
         </div>

      </section>

   );
}

export default Clients;