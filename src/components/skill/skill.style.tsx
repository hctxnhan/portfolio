import styled from 'styled-components';

type SkillProgressionProps = {
  percentage: number;
};

export const StyledSkill = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const SkillName = styled.p`
  flex-basis: 50%;
  font-size: var(--font-size-large);
`;
export const SkillProgression = styled.div<SkillProgressionProps>`
  flex-basis: 50%;
  width: 100%;
  height: 2rem;
  border: 1px solid var(--color-secondary);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: red;
    clip-path: ${(props) =>
      `polygon(0 0, ${props.percentage}% 0, ${props.percentage}% 100%, 0% 100%)`};
  }
`;
