import type { AppProps } from "next/app";

import Footer from "components/Footer";
import globalStyles from "styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <div>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
