import '../styles/style.css';
import {Provider} from '../components/Context';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {

  return (
    <div className="main-container">
      <Provider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </div>
  )
}

export default MyApp
