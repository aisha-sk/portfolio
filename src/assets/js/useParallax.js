import { useSpring, useTransform } from "framer-motion";


export const useParallax = (stiffness = 500, damping = 20, force = 100) => {
  const x = useSpring(0, { stiffness, damping });
  const y = useSpring(0, { stiffness, damping });
  const primaryX = useTransform(x, (event) => event / force);
  const primaryY = useTransform(y, (event) => event / force);
  const secondaryX = useTransform(x, (event) => event / -force);
  const secondaryY = useTransform(y, (event) => event / -force);

  const onMouseMoveHandler = (event) => {
    x.set(event.clientX / 1.5);
    y.set(event.clientY / 1.5);
  };

  const onMouseLeaveHandler = () => {
    x.set(0);
    y.set(0);
  };

  return {
    primaryX,
    primaryY,
    secondaryX,
    secondaryY,
    onMouseMoveHandler,
    onMouseLeaveHandler
  };
};
