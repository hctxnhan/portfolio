import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledSkill = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const SkillName = styled.p`
  flex-basis: 50%;
  font-size: var(--font-size-large);
`;
export const SkillProgression = styled(motion.div)`
  flex-basis: 50%;
  width: 100%;
  height: 2rem;
  border: 1px solid var(--color-secondary);
  position: relative;
`;

export const SkillProgressionFill = styled(motion.div)`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: red;
`;

export const SkillPercentage = styled(motion.div)`
  position: absolute;
  pointer-events: none;
  font-size: 5rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
