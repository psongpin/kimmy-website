import { styled } from "stitches.config";

export const LinksLoader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const LinkPostError = styled("p", {
  textAlign: "center",
  color: "$pink",
});

export const LinksGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  columnGap: 10,
  rowGap: 20,
  marginBottom: 40,
  position: "relative",

  "@md": {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    columnGap: 26,
    rowGap: 26,
  },

  "@xl": {
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  },

  variants: {
    hasNextPage: {
      true: {
        "&:after": {
          content: "",
          width: "100%",
          height: 300,
          display: "block",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          background:
            "linear-gradient(0deg, rgba(255,255,255,0.9) 40%, rgba(255,255,255,0) 100%)",
        },
      },
    },
  },
});

export const LinkPostOverlay = styled("div", {
  position: "absolute",
  inset: 0,
  zIndex: 1,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  opacity: 0,
  transition: "all 0.3s ease-in-out",
});

export const LinkPostFrame = styled("div", {
  "& > a": {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",

    overflow: "hidden",
    borderRadius: 20,
    position: "relative",
    textDecoration: "none",

    [`&:hover ${LinkPostOverlay}`]: {
      opacity: 1,
    },
  },
});

export const LinkPostImage = styled("div", {
  height: 180,
  width: "100%",
  position: "relative",

  "@sm": {
    height: 240,
  },

  "@md": {
    height: 350,
  },

  "@xl": {
    height: 400,
  },

  "@xxl": {
    height: 450,
  },
});

export const LinkPostInfo = styled("div", {
  backgroundColor: "$babyPurple",
  paddingX: 14,
  paddingY: 8,
  marginTop: "auto",
  flex: 1,

  "@md": {
    paddingX: 32,
    paddingY: 26,
  },
});

export const LinkPostTitle = styled("h2", {
  color: "$white",
  fontSize: 13,
  fontFamily: "$fredokaOne",

  "@md": {
    fontSize: 26,
  },
});

export const LinkPostSublinkCount = styled("p", {
  color: "$white",
  fontSize: 10,
  marginTop: 4,

  "@md": {
    fontSize: 24,
    marginTop: 10,
  },
});

export const TagsFrame = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  padding: 10,
  rowGap: 4,

  "@md": {
    padding: 20,
  },
});

export const Tag = styled("div", {
  color: "$white",
  fontSize: 10,
  paddingX: 6,
  paddingY: 4,
  borderRadius: 9999,

  "span:first-child": {
    marginRight: 8,
  },

  "@md": {
    fontSize: 12,
    paddingX: 10,
    paddingY: 6,
  },
});
