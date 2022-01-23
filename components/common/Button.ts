import { styled } from "stitches.config";

const Button = styled("button", {
  color: "$white",
  fontFamily: "$fredokaOne",
  paddingX: 20,
  borderRadius: 30,
  border: "2px solid",
  display: "inline-block",
  opacity: 1,
  transition: "all 0.3s ease-in-out",

  "&:hover": {
    opacity: 0.6,
  },

  variants: {
    size: {
      sm: {
        height: 32,
        fontSize: 16,
      },
      md: {
        height: 56,
        fontSize: 16,
      },
    },
    color: {
      pink: {
        backgroundColor: "$pink",
        borderColor: "$pink",
      },
      green: {
        backgroundColor: "$green",
        borderColor: "$green",
      },
      blue: {
        backgroundColor: "$blue",
        borderColor: "$blue",
      },
      yellow: {
        backgroundColor: "$yellow",
        borderColor: "$yellow",
      },
      purple: {
        backgroundColor: "$purple",
        borderColor: "$purple",
      },
    },
    outlined: {
      true: {
        backgroundColor: "transparent",
      },
    },
  },

  compoundVariants: [
    {
      color: "pink",
      outlined: true,
      css: {
        color: "$pink",
      },
    },
    {
      color: "green",
      outlined: true,
      css: {
        color: "$green",
      },
    },
    {
      color: "blue",
      outlined: true,
      css: {
        color: "$blue",
      },
    },
    {
      color: "yellow",
      outlined: true,
      css: {
        color: "$yellow",
      },
    },
    {
      color: "purple",
      outlined: true,
      css: {
        color: "$purple",
      },
    },
  ],

  defaultVariants: {
    size: "md",
    color: "pink",
  },
});

export default Button;
