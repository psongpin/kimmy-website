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
  theme,
} = createStitches({
  theme: {
    colors: {
      primary: "#524EB7",
      secondary: "#CBACEB",
      white: "#FFFFFF",
      babyBlue: "#DEEAFE",
      pink: "#F2827F",
      babyPink: "#FFE6E8",
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
