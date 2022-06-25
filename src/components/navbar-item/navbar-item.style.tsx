import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledNavbarItem = styled(motion.a)`
  display: block;
  text-decoration: none;
  color: inherit;
  font-size: var(--font-size-primary);
  font-family: var(--font-styled-text);
  font-weight: var(--font-weight-semi-bold);
  text-transform: uppercase;
  padding: 0.2rem 1rem;
`;

export const NavbarItemAnchor = styled.a``;
