import type { AppProps } from "next/app";
import { opinionated } from "stitches-normalize-css";

import { globalCss, config } from "../stitches.config";

const globalStyles = globalCss(...opinionated, {
  "html, body": {
    fontFamily: config.theme.fonts.poppins,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return <Component {...pageProps} />;
}

export default MyApp;
