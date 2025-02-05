import Image from 'next/image';
import useImageFadeIn from '../hooks/useImageFadeIn';

const Clients = () => {

   useImageFadeIn();

   return (

      <section className="client-logos grid-container">

         <div className="content">
            <div>
               <h2>Favourite clients</h2>
            </div>

            <div className="logos-container">
               <div className="logo-container">
                  <Image 
                  src="/img/simplybe.svg" 
                  alt="Simply Be" 
                  className="client-logo image-fade-in"
                  fill={true}
                  sizes="100%, auto"
                  />
               </div>
               <div className="logo-container">
                  <Image 
                  src="/img/united.svg" 
                  alt="Manchester United" 
                  className="client-logo image-fade-in"
                  fill={true}
                  sizes="100%, auto"
                  />
               </div>
               <div className="logo-container">
                  <Image 
                  src="/img/jacamo.svg" 
                  alt="Jacamo" 
                  className="client-logo image-fade-in"
                  fill={true}
                  sizes="100%, auto"
                  />
               </div>
               <div className="logo-container">
                  <Image 
                  src="/img/chelsea.svg" 
                  alt="Chelsea FC" 
                  className="client-logo image-fade-in"
                  fill={true}
                  sizes="100%, auto"
                  />
               </div>
               <div className="logo-container">
                  <Image 
                  src="/img/ftc2c.svg" 
                  alt="From the Caribbean 2 Coventry" 
                  className="client-logo image-fade-in"
                  fill={true}
                  sizes="100%, auto"
                  />
               </div>
               <div className="logo-container">
                  <Image 
                  src="/img/fashionworld.svg" 
                  alt="Fashion World" 
                  className="client-logo image-fade-in"
                  fill={true}
                  sizes="100%, auto"
                  />
               </div>
               <div className="logo-container">
                  <Image 
                  src="/img/city.svg" 
                  alt="Manchester City" 
                  className="client-logo image-fade-in"
                  fill={true}
                  sizes="100%, auto"
                  />
               </div>
               <div className="logo-container">
                  <Image 
                  src="/img/cheshirepixel.svg" 
                  alt="Cheshire Pixel" 
                  className="client-logo image-fade-in"
                  fill={true}
                  sizes="100%, auto"
                  />
               </div>
            </div>
         </div>

      </section>

   );
}

export default Clients;