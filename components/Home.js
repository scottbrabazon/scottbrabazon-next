import Link from 'next/link';
import Image from 'next/image';
import FeaturedProjects from './FeaturedProjects';
import HomeIntro from './HomeIntro';
import Montage from './Montage';
import Clients from './Clients';

const Home = ({match}) => {
   
   return (

      <div className="home">
         <HomeIntro />
         <FeaturedProjects />
         <Montage />
         <Clients />
      </div>

   );
}

export default Home;