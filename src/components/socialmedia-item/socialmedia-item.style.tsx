import styled from 'styled-components';
import { motion } from 'framer-motion';
export const StyledSocialMediaItem = styled(motion.div)`
  display: flex;
  align-items: center;
`;
export const SocialMediaItemIcon = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
  svg {
    width: 2rem;
    height: 2rem;
  }
`;
export const SocialMediaItemLink = styled(motion.a)`
  position: absolute;
  left: 120%;
  top: 0;
  align-self: center;
  font-size: var(--font-size-secondary);
  background-color: var(--color-primary);
  padding: 0.5rem 1rem;
`;
