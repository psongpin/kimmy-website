import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";

import { AppFrame, ContentFrame } from "components/AppLayout";
import Footer from "components/Footer";
import { useApollo } from "lib/apolloClient";
import globalStyles from "styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <AppFrame>
        <ContentFrame>
          <Component {...pageProps} />
        </ContentFrame>
        <Footer />
      </AppFrame>
    </ApolloProvider>
  );
}

export default MyApp;
