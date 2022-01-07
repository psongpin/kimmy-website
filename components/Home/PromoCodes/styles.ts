import { styled } from "stitches.config";

export const PromoCodesSection = styled("section", {
  paddingY: 40,
});

export const PromoCodesHeading = styled("h2", {
  color: "$pink",
  fontSize: 20,
  fontFamily: "$fredokaOne",
  marginBottom: 18,
});

export const PromoCodeFrame = styled("div", {
  paddingX: 20,
  paddingY: 16,
  backgroundColor: "$white",
  borderRadius: 20,
  fontFamily: "$fredokaOne",
});

export const PromoCodeInfo = styled("div", {
  display: "flex",
  alignItems: "center",
  marginBottom: 24,
});

export const Discount = styled("div", {
  backgroundColor: "$babyPink",
  border: "1px solid $pink",
  borderRadius: 8,
  paddingX: 18,
  paddingY: 12,

  p: {
    fontSize: 16,
    color: "$pink",
  },
});

export const SponsorInfo = styled("div", {
  color: "$pink",
  paddingLeft: 20,

  "p:first-child": {
    marginBottom: 8,
  },

  a: {
    textDecoration: "none",
    color: "$pink",

    "&:hover": {
      textDecoration: "underline",
    },

    svg: {
      marginLeft: 4,
    },
  },
});

export const CopyButton = styled("button", {
  height: 36,
  backgroundColor: "$pink",
  color: "$white",
  width: "100%",
  paddingX: 20,
  borderRadius: 30,
  opacity: 1,
  transition: "all 0.3s ease-in-out",

  "&:hover": {
    opacity: 0.8,
  },

  "&:focus": {
    opacity: 0.6,
  },
});
