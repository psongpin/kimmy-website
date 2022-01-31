import { motion } from "framer-motion";
import { styled } from "stitches.config";

export const SearchPostFrame = styled(motion.div, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 32,

  form: {
    display: "block",
    position: "relative",
    width: "100%",
    maxWidth: 1000,
  },

  input: {
    display: "inline-block",
    backgroundColor: "$offWhite",
    width: "100%",
    height: 40,
    borderRadius: 9999,
    paddingLeft: 20,
    paddingRight: 50,
    paddingY: 0,
    fontSize: 16,
    color: "$purple",
    fontFamily: "$fredokaOne",

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

    "@md": {
      height: 72,
      fontSize: 24,
      paddingLeft: 40,
      paddingRight: 80,
    },
  },
});

export const SearchError = styled("span", {
  display: "block",
  marginTop: 10,
  color: "$pink",
  textAlign: "center",
});
