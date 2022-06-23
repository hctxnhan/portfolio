import React from 'react';
import { StyledButton } from './button.style';
import { FunctionComponent } from 'react';
import withHover from '../withHover/withHover';
type Props = {
  children: React.ReactNode;
};

const Button: FunctionComponent<Props> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default withHover<Props>(Button);
