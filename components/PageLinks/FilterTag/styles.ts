import { styled } from "stitches.config";

export const TagsGrid = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "flex-start",
  rowGap: 10,
  columnGap: 20,
  marginBottom: 52,

  "& > *": {
    display: "inline-block",

    "&:last-item": {
      marginRight: 0,
    },
  },

  "@md": {
    justifyContent: "center",
  },
});
