import React from 'react';
import { StyledButton } from './button.style';
import { FunctionComponent } from 'react';
type Props = {
  children: React.ReactNode;
};

const Button: FunctionComponent<Props> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
