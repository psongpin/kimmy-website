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

export const PromoCodesCarouselFrame = styled("div", {
  position: "relative",
});

export const PromoCodesNoData = styled("p", {
  color: "$pink",
});
