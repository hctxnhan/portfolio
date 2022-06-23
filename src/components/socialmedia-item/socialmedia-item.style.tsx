import styled from 'styled-components';
import { motion } from 'framer-motion';
export const StyledSocialMediaItem = styled(motion.div)`
  display: flex;
  align-items: center;
  backdrop-filter: blur(10px);
`;
export const SocialMediaItemIcon = styled.div`
  svg {
    width: 2rem;
    height: 2rem;
  }
`;
export const SocialMediaItemLink = styled(motion.p)`
  position: absolute;
  left: 120%;
  top: 0;
  align-self: center;
  font-size: var(--font-size-secondary);
  background-color: var(--color-primary);
  padding: 0.5rem 1rem;
`;
