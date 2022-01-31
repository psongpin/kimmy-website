import { motion } from "framer-motion";
import { styled } from "stitches.config";

export const GamingSetupsSection = styled("section", {
  paddingTop: 40,
});

export const GamingSetupsHeading = styled(motion.h2, {
  color: "$pink",
  fontSize: 20,
  fontFamily: "$fredokaOne",
  marginBottom: 18,
});

export const GamingSetupLinkOverlay = styled("div", {
  position: "absolute",
  inset: 0,
  zIndex: 3,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  opacity: 0,
  transition: "all 0.3s ease-in-out",
});

export const GamingSetupFrame = styled(motion.div, {
  width: "100%",
  height: 300,

  "& > a": {
    display: "block",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 20,
    position: "relative",

    "&:before": {
      content: "",
      display: "block",
      position: "absolute",
      inset: 0,
      zIndex: 1,
      background:
        "linear-gradient(0deg, rgba(0,0,0,0.5) 5%, rgba(0,0,0,0) 40%)",
    },

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
  zIndex: 1,
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

export const GamingSetupsCarouselFrame = styled("div", {
  position: "relative",
});

export const GamingSetupsNoData = styled("p", {
  color: "$pink",
});
