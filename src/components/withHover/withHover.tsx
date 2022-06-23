import MouseHoverContext from '../../context/hover/hover';
import { useContext } from 'react';

type MouseHoverEventProps = {
  onMouseEnter: React.MouseEventHandler;
  onMouseLeave: React.MouseEventHandler;
};

function useHover(): MouseHoverEventProps {
  const { setHover } = useContext(MouseHoverContext);

  const handleOnMouseEnter = (e: React.MouseEvent): void => {
    setHover?.(true);
  };
  const handleOnMouseLeave = (e: React.MouseEvent): void => {
    setHover?.(false);
  };

  return {
    onMouseEnter: handleOnMouseEnter,
    onMouseLeave: handleOnMouseLeave,
  };
}

export default useHover;
