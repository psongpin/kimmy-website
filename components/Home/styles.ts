import { styled } from "stitches.config";

export const HomeFrame = styled("div", {
  width: "100%",
  maxWidth: "$sm",
  minHeight: "100vh",
  marginX: "auto",
  boxShadow:
    "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  display: "flex",
  flexDirection: "column",
});

export const BottomContentFrame = styled("div", {
  backgroundColor: "$babyBlue",
  flex: 1,
});
