import { styled } from "../../stitches.config";

const Container = styled("div", {
  width: "100%",
  paddingX: "1rem",
  marginX: "auto",

  "@sm": {
    maxWidth: "$sm",
  },
  "@md": {
    maxWidth: "$md",
  },
  "@lg": {
    maxWidth: "$lg",
  },
  "@xl": {
    maxWidth: "$xl",
  },
  "@xxl": {
    maxWidth: "$xxl",
  },
});

export default Container;
