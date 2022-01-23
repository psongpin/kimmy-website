import { createStitches } from "@stitches/react";

const sizes = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1536px",
};

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  keyframes,
  theme,
} = createStitches({
  theme: {
    colors: {
      purple: "#524EB7",
      babyPurple: "#CBACEB",
      white: "#FFFFFF",
      blue: "#91C3FC",
      babyBlue: "#DEEAFE",
      pink: "#F2827F",
      babyPink: "#FFE6E8",
      darkPink: "#DA6486",
      green: "#A4E5DF",
      yellow: "#FED47E",
      offWhite: "#F8F8FC",
      gray: "#707070",
    },
    space: {},
    sizes,
    fontSizes: {
      base: "16px",
    },
    fonts: {
      fredokaOne: "'Fredoka One', cursive",
      poppins: "'Poppins', sans-serif",
    },
  },
  utils: {
    marginX: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    sm: `(min-width: ${sizes.sm})`,
    md: `(min-width: ${sizes.md})`,
    lg: `(min-width: ${sizes.lg})`,
    xl: `(min-width: ${sizes.xl})`,
    xxl: `(min-width: ${sizes.xxl})`,
  },
});
