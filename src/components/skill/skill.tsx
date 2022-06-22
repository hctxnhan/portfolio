import { StyledSkill, SkillName, SkillProgression } from './skill.style';
import { FunctionComponent } from 'react';

type SkillProps = {
  name: string;
  progress: number;
};

const Skill: FunctionComponent<SkillProps> = ({ name, progress }) => {
  return (
    <StyledSkill>
      <SkillName>{name}</SkillName>
      <SkillProgression percentage={progress} />
    </StyledSkill>
  );
};

export default Skill;
