import styled from 'styled-components';

export const StyledSkills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 6rem;
  row-gap: 2rem;
`;

export const NextSkill = styled.p`
  font-style: italic;
  width: 60%;
  align-self: center;
`;
