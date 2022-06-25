import {
  StyledSkill,
  SkillName,
  SkillProgression,
  SkillProgressionFill,
  SkillPercentage,
} from './skill.style';
import { FunctionComponent } from 'react';
import { useState } from 'react';
import { SkillItemType } from '../../data';

type SkillProps = {
  skill: SkillItemType;
};

const Skill: FunctionComponent<SkillProps> = ({
  skill: { name, progress },
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <StyledSkill>
      <SkillName>{name}</SkillName>
      <SkillProgression
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        whileHover={{
          rotateX: 0,
        }}
        transition={{
          type: 'tween',
          duration: 0.2,
        }}
      >
        <SkillProgressionFill
          initial={{ width: 0 }}
          viewport={{ once: true }}
          whileInView={{
            width: `${progress}%`,
          }}
          transition={{
            duration: 1,
          }}
        />
        <SkillPercentage
          style={{
            opacity: 0,
          }}
          animate={{
            opacity: isHover ? 1 : 0,
          }}
        >
          {progress}
        </SkillPercentage>
      </SkillProgression>
    </StyledSkill>
  );
};

export default Skill;
