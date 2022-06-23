import styled from 'styled-components';
import { motion } from 'framer-motion';
export const StyledTimelineItem = styled(motion.div)`
  width: 50%;
  text-align: right;
  padding: 0rem 2rem;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -0.55rem;
    width: 1rem;
    height: 1rem;
    transform: rotate(45deg);
    background-color: var(--color-primary);
    box-sizing: border-box;
    border: 1px solid red;
  }

  &:nth-child(2n) {
    text-align: left;
    transform: translateX(100%);
    &::after {
      right: unset;
      left: -0.45rem;
    }
  }
`;

export const TimelineItemContainer = styled(motion.div)`
  background-color: var(--color-primary-light);
  padding: 2rem 3rem;
  border-radius: 5px;
`;

export const TimelineItemDate = styled.p`
  font-size: var(--font-size-primary);
  font-weight: var(--font-weight-light);
  text-transform: uppercase;
  font-family: var(--font-heading);
  color: #8c8c8c;
`;
export const TimelineItemContent = styled.div``;
export const TimelineItemHeading = styled.h1`
  font-family: var(--font-heading);
  font-size: 3rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;
export const TimelineItemDescription = styled.p`
  font-size: 1.4rem;
  color: #8c8c8c;
  font-family: 'Inter';
`;
