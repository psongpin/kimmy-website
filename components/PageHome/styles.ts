import { styled } from "stitches.config";
import { motion } from "framer-motion";

export const HomeFrame = styled(motion.div, {
  width: "100%",
  maxWidth: "$sm",
  minHeight: "100vh",
  marginX: "auto",
  boxShadow:
    "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  backgroundColor: "$babyBlue",
  display: "flex",
  flexDirection: "column",
});

export const TopContentFrame = styled("div", {
  backgroundColor: "$white",
  backgroundImage: "url(/images/ghost.svg)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "115% 80%",
  backgroundSize: "320px",
  overflow: "hidden",
  paddingBottom: 50,
  borderBottomLeftRadius: 90,
  minHeight: 300,
  position: "relative",
});

export const SemiCircle = styled("div", {
  backgroundColor: "$purple",
  backgroundImage: "url(/images/topSparkles.png)",
  backgroundRepeat: "repeat",
  height: 400,
  marginX: -22,
  marginTop: -280,
  borderRadius: "100%",
});

export const AvatarFrame = styled(motion.div, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: -70,
  marginBottom: 16,
});

export const CreatorInfo = styled("div", {
  textAlign: "center",
  color: "$pink",

  h1: {
    fontSize: 20,
    fontFamily: "$fredokaOne",
    marginBottom: 4,
  },

  p: {
    fontSize: 12,
  },
});

export const BottomContentFrame = styled("div", {
  flex: 1,
});
