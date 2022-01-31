import { Variants } from "framer-motion";

export const fadeDownVariants: Variants = {
  hidden: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.8,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};
