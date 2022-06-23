import {
  StyledSkill,
  SkillName,
  SkillProgression,
  SkillProgressionFill,
  SkillPercentage,
} from './skill.style';
import { FunctionComponent } from 'react';
import { useState } from 'react';
import { useViewportScroll } from 'framer-motion';

type SkillProps = {
  name: string;
  progress: number;
};

const Skill: FunctionComponent<SkillProps> = ({ name, progress }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <StyledSkill>
      <SkillName>{name}</SkillName>
      <SkillProgression
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        whileHover={{
          rotateY: 40,
          rotateX: -5,
          scale: 1.5,
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
