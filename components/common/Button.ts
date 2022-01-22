import { styled } from "stitches.config";

const Button = styled("button", {
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
});

export default Button;
