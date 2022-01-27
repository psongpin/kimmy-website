import { styled } from "stitches.config";

export const BannerFrame = styled("div", {
  width: "100%",
  maxWidth: 1100,
  minHeight: 450,
  marginX: "auto",
  marginY: 120,
  borderRadius: 50,
  display: "flex",
  alignItems: "stretch",
  justifyContent: "center",
  overflow: "hidden",
});

export const BannerImageFrame = styled("div", {
  width: "40%",
  position: "relative",
});

export const BannerContentFrame = styled("div", {
  flex: 1,
  width: "100%",
  paddingX: 40,
  paddingY: 30,
  backgroundImage: "url(/images/white-sparkle.svg)",
  backgroundRepeat: "no-repeat",
  backgroundPositionX: "95%",
  backgroundPositionY: "80%",
});

export const BannerContentTop = styled("div", {
  color: "$white",
  fontSize: 42,
  fontFamily: "$fredokaOne",
  marginBottom: 50,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
});

export const BannerContentTitle = styled("h1", {
  color: "$white",
  fontSize: 55,
  fontFamily: "$fredokaOne",
  marginBottom: 10,
});

export const BannerContentSubLinkNum = styled("h2", {
  color: "$yellow",
  fontSize: 26,
});

export const BannerContentAvatar = styled("div", {
  position: "relative",
  display: "flex",
  marginLeft: 10,
});
