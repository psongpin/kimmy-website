import { styled } from "stitches.config";

export const HomeFrame = styled("div", {
  width: "100%",
  maxWidth: "$sm",
  minHeight: "100vh",
  marginX: "auto",
  boxShadow:
    "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  display: "flex",
  flexDirection: "column",
});

export const BottomContentFrame = styled("div", {
  backgroundColor: "$babyBlue",
  flex: 1,
});
