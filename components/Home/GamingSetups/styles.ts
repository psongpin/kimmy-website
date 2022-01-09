import { styled } from "stitches.config";

export const GamingSetupsSection = styled("section", {
  paddingTop: 40,
});

export const GamingSetupsHeading = styled("h2", {
  color: "$pink",
  fontSize: 20,
  fontFamily: "$fredokaOne",
  marginBottom: 18,
});

export const GamingSetupLinkOverlay = styled("div", {
  position: "absolute",
  inset: 0,
  zIndex: 1,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  opacity: 0,
  transition: "all 0.3s ease-in-out",

  button: {
    height: 36,
    backgroundColor: "$pink",
    color: "$white",
    fontFamily: "$fredokaOne",
    paddingX: 20,
    borderRadius: 30,
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

export const GamingSetupFrame = styled("div", {
  width: "100%",
  height: 300,

  "& > a": {
    display: "block",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 20,
    position: "relative",

    [`&:hover ${GamingSetupLinkOverlay}`]: {
      opacity: 1,
    },
  },
});

export const GamingSetupInfo = styled("div", {
  position: "absolute",
  bottom: 24,
  left: 0,
  right: 0,
  paddingX: 20,
  color: "$white",

  h3: {
    fontFamily: "$fredokaOne",
    fontSize: 18,
    marginBottom: 10,
  },

  span: {
    fontSize: 12,
  },
});
