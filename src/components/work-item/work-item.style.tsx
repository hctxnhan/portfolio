import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledWorkItem = styled(motion.div)`
  position: relative;
  width: 100%;
  flex-shrink: 0;
  flex-grow: 0;
`;
export const WorkItemAnchor = styled.a`
  position: absolute;
  top: 2rem;
  right: 2rem;
  text-decoration: none;
  color: inherit;

  svg {
    width: 2rem;
    height: 2rem;
  }
`;
export const WorkItemImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  pointer-events: none;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
export const WorkItemTitle = styled.h2`
  font-size: 4rem;
  font-family: var(--font-heading);
`;
export const WorkItemDescription = styled.p``;
export const WorkItemContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;
export const WorkItemInfo = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 50%;
  bottom: 0;
  padding: 4rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
`;
export const WorkItemTech = styled.p`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;
`;
export const WorkItemTechName = styled.span`
  display: inline-block;
  font-family: var(--font-text);
  font-size: var(--font-size-secondary);
  margin-right: 1rem;
  text-transform: uppercase;
  font-weight: var(--font-weight-bold);
  color: var(--color-grey);
`;

export const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 50%;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.9);
`;
