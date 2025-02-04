 import useImageFadeIn from '../hooks/useImageFadeIn';

 const Montage = () => {

   useImageFadeIn();

   return (

      <section className="montage">
         <div className="montage-col-1">
            <img 
               src="/img/everton.webp" 
               alt="Everton" 
               className="montage-image everton image-fade-in"
            />
            <img 
               src="/img/wcb.webp" 
               alt="FIFA World Cup 2010" 
               className="montage-image wcb image-fade-in"
            />
         </div>
         <div className="montage-col-2">
            <img 
               src="/img/united.webp" 
               alt="Manchester United" 
               className="montage-image united image-fade-in"
            />
            <img 
               src="/img/ftctc.webp" 
               alt="From the Caribbean 2 Coventry" 
               className="montage-image ftc2c image-fade-in"
            />
            <img 
               src="/img/city.webp" 
               alt="Manchester City" 
               className="montage-image city image-fade-in"
            />
         </div>
      </section>

   );
}

export default Montage;