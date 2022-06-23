import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const inputStyle = css`
  font-family: var(--font-styled-text);
  width: 100%;
  font-size: var(--font-size-large);
  border: none;
  padding: 1rem 2rem;
  &:focus {
    outline: 1px solid red;
  }
`;

export const StyledFormInput = styled(motion.input)`
  ${inputStyle}
`;

export const EmailFormInput = styled(StyledFormInput).attrs(() => ({
  type: 'email',
}))``;

export const MessageFormInput = styled(StyledFormInput)`
  height: 30rem;
`;
