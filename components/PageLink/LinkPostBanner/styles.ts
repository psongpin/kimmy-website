import { styled } from "stitches.config";

export const BannerFrame = styled("div", {
  width: "100%",
  maxWidth: 1100,
  minHeight: 180,
  marginX: "auto",
  marginY: 40,
  borderRadius: 20,
  display: "flex",
  alignItems: "stretch",
  justifyContent: "center",
  overflow: "hidden",

  "@md": {
    marginY: 50,
    minHeight: 300,
    borderRadius: 30,
  },

  "@lg": {
    marginY: 60,
    minHeight: 400,
    borderRadius: 40,
  },
});

export const BannerImageFrame = styled("div", {
  width: "35%",
  position: "relative",

  "@md": {
    paddingX: 40,
    paddingY: 30,
  },
});

export const BannerContentFrame = styled("div", {
  width: "65%",
  paddingX: 20,
  paddingY: 20,
  backgroundImage: "url(/images/white-sparkle.svg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "25%",
  backgroundPositionX: "95%",
  backgroundPositionY: "80%",

  "@md": {
    paddingX: 40,
    paddingY: 30,
  },
});

export const BannerContentTop = styled("div", {
  color: "$white",
  fontSize: 16,
  fontFamily: "$fredokaOne",
  marginBottom: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  svg: {
    width: 16,
    height: 16,
  },

  "@md": {
    fontSize: 32,
    marginBottom: 20,

    svg: {
      width: 30,
      height: 30,
    },
  },

  "@lg": {
    fontSize: 42,
    marginBottom: 30,

    svg: {
      width: 45,
      height: 45,
    },
  },
});

export const BannerContentTitle = styled("h1", {
  color: "$white",
  fontSize: 20,
  fontFamily: "$fredokaOne",
  marginBottom: 10,

  "@md": {
    fontSize: 40,
  },

  "@lg": {
    fontSize: 55,
  },
});

export const BannerContentSubLinkNum = styled("h2", {
  color: "$yellow",
  fontSize: 12,
  marginBottom: 20,

  "@md": {
    fontSize: 20,
    marginBottom: 40,
  },

  "@lg": {
    fontSize: 26,
  },
});

export const BannerContentAvatar = styled("div", {
  position: "relative",
  display: "flex",
  marginLeft: 10,
  width: 40,

  "@md": {
    width: 60,
  },

  "@lg": {
    width: 80,
  },
});

export const BannerViewLink = styled("div", {
  a: {
    textDecoration: "none",
  },
});
