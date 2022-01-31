import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { DefaultSeo } from "next-seo";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

import { AppFrame, ContentFrame } from "components/AppLayout";
import { useApollo } from "lib/apolloClient";
import globalStyles from "styles/global";
import seoConfig from "next-seo.config";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  const apolloClient = useApollo(pageProps);
  const router = useRouter();

  console.log(router);

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <AppFrame>
          <ContentFrame>
            <DefaultSeo {...seoConfig} />
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} key={router.pathname} />
            </AnimatePresence>
          </ContentFrame>
        </AppFrame>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
