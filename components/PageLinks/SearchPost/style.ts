import { styled } from "stitches.config";

export const SearchPostFrame = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 32,

  form: {
    display: "block",
    width: "100%",
    maxWidth: 1000,
  },

  input: {
    display: "inline-block",
    backgroundColor: "$offWhite",
    width: "100%",
    height: 72,
    borderRadius: 9999,
    paddingX: 40,
    paddingY: 0,
    fontSize: 24,
    color: "$purple",

    "&::placeholder": {
      color: "$gray",
    },

    "::-webkit-input-placeholder": {
      color: "$gray",
    },

    ":-moz-placeholder": {
      color: "$gray",
      opacity: 1,
    },

    "::-moz-placeholder": {
      color: "$gray",
      opacity: 1,
    },

    ":-ms-input-placeholder": {
      color: "$gray",
    },

    "::-ms-input-placeholder": {
      color: "$gray",
    },

    "::placeholder": {
      color: "$gray",
    },
  },
});

export const SearchError = styled("span", {
  display: "block",
  marginTop: 10,
  color: "$pink",
  textAlign: "center",
});
