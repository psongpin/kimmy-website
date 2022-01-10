import { keyframes, styled } from "stitches.config";

export const CarouselLoaderOverlay = styled("div", {
  backgroundColor: "rgba(255, 255, 255, 0.4)",
  position: "absolute",
  inset: 0,
  zIndex: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const foldCube = keyframes({
  "0%, 10%": {
    transform: "perspective(140px) rotateX(-180deg)",
    opacity: 0,
  },
  "25%, 75%": {
    transform: "perspective(140px) rotateX(0deg)",
    opacity: 1,
  },
  "90%, 100%": {
    transform: "perspective(140px) rotateY(180deg)",
    opacity: 0,
  },
});

const LoaderFrame = styled("div", {
  margin: "0",
  width: "50px",
  height: "50px",
  position: "relative",
  transform: "rotateZ(45deg)",
});

const Cube = styled("div", {
  float: "left",
  width: "50%",
  height: "50%",
  position: "relative",
  transform: "scale(1.1)",

  "&:before": {
    content: "",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "$primary",
    animation: `${foldCube} 2.4s infinite linear both`,
    transformOrigin: "100% 100%",
  },

  "&.sk-cube2": {
    transform: "scale(1.1) rotateZ(90deg)",
  },
  "&.sk-cube3": {
    transform: "scale(1.1) rotateZ(180deg)",
  },
  "&.sk-cube4": {
    transform: "scale(1.1) rotateZ(270deg)",
  },
  "&.sk-cube2:before": {
    animationDelay: "0.3s",
  },
  "&.sk-cube3:before": {
    animationDelay: "0.6s",
  },
  "&.sk-cube4:before": {
    animationDelay: "0.9s",
  },
});

export const Loader: React.FC = () => {
  return (
    <LoaderFrame>
      <Cube className="sk-cube1" />
      <Cube className="sk-cube2" />
      <Cube className="sk-cube4" />
      <Cube className="sk-cube3" />
    </LoaderFrame>
  );
};
