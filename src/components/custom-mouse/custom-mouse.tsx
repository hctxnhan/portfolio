import { StyledCustomMouse, MouseContainer } from './custom-mouse.style';
import { useEffect, useState, useContext } from 'react';
import MouseHoverContext from '../../context/hover/hover';
type Position = {
  x: number;
  y: number;
};

const CustomMouse = () => {
  const { isHover } = useContext(MouseHoverContext);

  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <StyledCustomMouse
      style={{
        originX: 0,
        originY: 0,
      }}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        scale: isHover ? 1.6 : 1,
      }}
      transition={{
        scale: { duration: 0.05 },
        default: {
          type: 'tween',
          duration: 0,
        },
      }}
    >
      <MouseContainer />
    </StyledCustomMouse>
  );
};

export default CustomMouse;
