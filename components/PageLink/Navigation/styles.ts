import { styled } from "stitches.config";

export const NavigationFrame = styled("div", {
  height: 66,
  backgroundColor: "$purple",
});

export const NavigationText = styled("button", {
  color: "$white",
  backgroundColor: "transparent",
  cursor: "pointer",
  fontSize: 22,
  fontFamily: "$fredokaOne",

  "& > *": {
    verticalAlign: "middle",
  },
});
