import { styled } from "stitches.config";

export const HomeFrame = styled("div", {
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
  overflow: "hidden",
  paddingBottom: 50,
  borderBottomLeftRadius: 90,
  minHeight: 300,
  position: "relative",
});

export const SemiCircle = styled("div", {
  backgroundColor: "$primary",
  height: 400,
  marginX: -22,
  marginTop: -272,
  borderRadius: "100%",
});

export const AvatarFrame = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: -90,
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
