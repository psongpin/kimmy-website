import { styled } from "stitches.config";

export const PageLinksHead = styled("div", {
  marginBottom: 40,
  position: "relative",
  textAlign: "center",
  height: 120,
  overflow: "hidden",

  "@md": {
    height: 200,
    marginBottom: 60,
  },

  "@lg": {
    height: 280,
  },

  h1: {
    color: "$yellow",
    fontSize: 20,
    position: "relative",

    "@md": {
      fontSize: 38,
    },
  },

  p: {
    fontSize: 25,
    fontFamily: "$fredokaOne",

    position: "relative",
    paddingTop: 20,
    marginBottom: 10,

    a: {
      color: "$white",
      textDecoration: "none",
    },

    "@md": {
      fontSize: 47,
      paddingTop: 40,
    },

    "@lg": {
      paddingTop: 70,
    },
  },
});

export const SemiCircle = styled("div", {
  backgroundColor: "$purple",
  backgroundImage: "url(/images/topSparkles.png)",
  backgroundRepeat: "no-repeat",
  backgroundPositionX: "center",
  backgroundPositionY: "90%",
  height: 400,
  borderRadius: "100%",
  position: "absolute",
  inset: 0,
  top: -280,
  zIndex: 0,
  marginX: -22,

  "@md": {
    height: 600,
    top: -400,
  },

  "@lg": {
    height: 800,
    top: -520,
  },
});
