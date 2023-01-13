import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../component/layout';
import { useEffect } from "react";



function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
