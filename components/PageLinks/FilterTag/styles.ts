import { motion } from "framer-motion";
import { styled } from "stitches.config";

export const TagsGrid = styled(motion.div, {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "flex-start",
  rowGap: 10,
  columnGap: 20,
  marginBottom: 52,

  "& > *": {
    display: "inline-block",
    textDecoration: "none",

    "&:last-item": {
      marginRight: 0,
    },
  },

  "@md": {
    justifyContent: "center",
  },
});
