import "@/assets/styles/global.css"
import "@/assets/styles/reset.css"
import "@/assets/styles/styles.css"

import Layout from "@/components/Layout";


export default function App({ Component, pageProps }) {

  return (
    <Layout>
      
    <Component {...pageProps} />

    </Layout>

  );
  
 
}
