import '../styles/style.css';
import { Provider } from '../components/Context';
import Layout from '../components/Layout';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  return (
    <div className="main-container">
      <div className="gradient-bg"></div>
      <Provider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </div>
  );
}

export default MyApp;
