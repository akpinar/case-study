import Layout from "@/components/UI/Layout/Layout";
import ProductProvider from "@/context/ProductContext/ProductProvider";
import "@/styles/globals.css";
import "primeicons/primeicons.css";

export default function App({ Component, pageProps }) {
  return (
    <ProductProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProductProvider>
  );
}
