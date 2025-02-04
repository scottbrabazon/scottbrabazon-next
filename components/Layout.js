import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import {Fragment} from 'react';

const Layout = ({children}) => {

   return (

      <Fragment>
         <Nav />
         <Header />
         {children}
         <Footer />
      </Fragment>

   );
}

export default Layout;