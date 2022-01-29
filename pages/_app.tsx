import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { DefaultSeo } from "next-seo";

import { AppFrame, ContentFrame } from "components/AppLayout";
import { useApollo } from "lib/apolloClient";
import globalStyles from "styles/global";
import seoConfig from "next-seo.config";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  const apolloClient = useApollo(pageProps);

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <AppFrame>
          <ContentFrame>
            <DefaultSeo {...seoConfig} />
            <Component {...pageProps} />
          </ContentFrame>
        </AppFrame>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
