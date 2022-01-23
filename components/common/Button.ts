import { styled } from "stitches.config";

const btnColors = ["pink", "green", "blue", "yellow", "purple"];

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
        borderColor: "$pink",
      },
      green: {
        borderColor: "$green",
      },
      blue: {
        borderColor: "$blue",
      },
      yellow: {
        borderColor: "$yellow",
      },
      purple: {
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
    ...btnColors.map((color) => ({
      color,
      outlined: true,
      css: {
        color: `$${color}`,
      },
    })),

    ...btnColors.map((color) => ({
      color,
      outlined: false,
      css: {
        backgroundColor: `$${color}`,
      },
    })),
  ],

  defaultVariants: {
    size: "md",
    color: "pink",
  },
});

export default Button;
