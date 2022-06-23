import styled from 'styled-components';
import { motion } from 'framer-motion';
export const StyledButton = styled(motion.button)`
  padding: 1rem 3rem;
  font-family: var(--font-styled-text);
  text-transform: uppercase;
  font-weight: var(--font-weight-bold);
  border: 1px solid var(--color-secondary);
  color: var(--color-secondary);
  font-size: var(--font-size-regular);
  background: transparent;
`;
