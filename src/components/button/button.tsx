import React from 'react';
import { StyledButton } from './button.style';
import { FunctionComponent } from 'react';
import useHover from '../withHover/withHover';
type Props = {
  children: React.ReactNode;
};

const Button: FunctionComponent<Props> = ({ children }) => {
  const hoverEvent = useHover();

  return <StyledButton {...hoverEvent}>{children}</StyledButton>;
};

export default Button;
