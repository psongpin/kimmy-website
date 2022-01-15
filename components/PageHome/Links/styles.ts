import { styled } from "stitches.config";

export const LinksGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  columnGap: 30,
  rowGap: 30,
  textAlign: "center",
  maxWidth: 420,
  marginX: "auto",
  marginTop: 30,
});

export const LinkGridItem = styled("div", {
  a: {
    display: "block",
    textDecoration: "none",
    opacity: 1,
    transition: "all 0.3s ease-in-out",

    "&:hover": {
      opacity: 0.6,
    },

    "&:focus": {
      opacity: 0.4,
    },
  },
});

export const LinksGridText = styled("span", {
  fontFamily: "$fredokaOne",
});

export const LinksGridIcon = styled("div", {
  width: 64,
  height: 64,
  borderRadius: "100%",
  marginBottom: 16,
  marginX: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
