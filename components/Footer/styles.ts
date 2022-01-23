import { styled } from "stitches.config";

export const FooterFrame = styled("footer", {
  textAlign: "center",
  color: "$purple",
  paddingY: 28,
});

export const CopyrightText = styled("p", {
  fontSize: "10px",
});

export const FooterLinks = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 16,
});

export const FooterLink = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginX: 8,
  color: "$purple",
  opacity: 1,
  transition: "all 0.3s ease-in-out",

  "&:hover": {
    opacity: 0.6,
  },

  "&:focus": {
    opacity: 0.4,
  },
});
