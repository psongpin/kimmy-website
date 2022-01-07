import type { AppProps } from "next/app";

import { AppFrame, ContentFrame } from "components/AppLayout";
import Footer from "components/Footer";
import globalStyles from "styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <AppFrame>
      <ContentFrame>
        <Component {...pageProps} />
      </ContentFrame>
      <Footer />
    </AppFrame>
  );
}

export default MyApp;
