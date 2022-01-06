import type { AppProps } from "next/app";

import { AppFrame } from "components/AppLayout";
import Footer from "components/Footer";
import globalStyles from "styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <AppFrame>
      <Component {...pageProps} />
      <Footer />
    </AppFrame>
  );
}

export default MyApp;
