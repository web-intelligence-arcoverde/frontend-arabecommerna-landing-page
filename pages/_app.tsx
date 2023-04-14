import { DefaultSeo } from "next-seo";
import SEO from "../next-seo-config";
import { GlobalStyle } from "../styles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
