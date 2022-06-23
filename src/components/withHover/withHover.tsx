import MouseHoverContext from '../../context/hover/hover';
import React, { Fragment, useContext } from 'react';
type Props = {
  children: React.ReactNode;
};

function withHover<T extends Props>(Element: React.FunctionComponent<T>) {
  return (props: T) => {
    const { setHover } = useContext(MouseHoverContext);

    const handleOnMouseEnter = (e: React.MouseEvent): void => {
      setHover?.(true);
    };
    const handleOnMouseLeave = (e: React.MouseEvent): void => {
      setHover?.(false);
    };

    return (
      <div onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
        <Element {...(props as T)}>{props.children}</Element>
      </div>
    );
  };
}

export default withHover;
