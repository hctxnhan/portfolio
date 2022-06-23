import React from 'react';
import { StyledButton } from './button.style';
import { FunctionComponent } from 'react';
import useHover from '../useHover/withHover';
type Props = {
  children: React.ReactNode;
};

const variants = {
  hover: {
    backgroundColor: 'red',
  },
};

const Button: FunctionComponent<Props> = ({ children }) => {
  const hoverEvent = useHover();

  return (
    <StyledButton
      variants={variants}
      whileHover={'hover'}
      transition={{ duration: 10 }}
      {...hoverEvent}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
