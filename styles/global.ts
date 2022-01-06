import { opinionated } from "stitches-normalize-css";

import { globalCss, config } from "stitches.config";

const globalStyles = globalCss(...opinionated, {
  ":where(html, body)": {
    fontFamily: config.theme.fonts.poppins,
    fontSize: config.theme.fontSizes.base,
  },
  ":where(*, :after, :before)": {
    boxSizing: "border-box",
    border: "0 solid",
  },
  ":where(blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre)": {
    margin: 0,
  },
});

export default globalStyles;
