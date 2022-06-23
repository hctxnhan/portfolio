import styled from 'styled-components';
import { motion } from 'framer-motion';
export const StyledContact = styled.div``;
export const ContactFormContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  z-index: 1000;
`;
export const ContactOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
  pointer-events: none;
  backdrop-filter: blur(20px);
  z-index: 999;
`;
