import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledCustomMouse = styled(motion.div)`
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  mix-blend-mode: difference;
`;

export const MouseContainer = styled.div`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background-color: red;
`;
