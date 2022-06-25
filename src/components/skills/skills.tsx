import { StyledSkills } from './skills.style';

import Section from '../section/section';
import {
  SkillsContainer,
  NextSkill,
  SkillsSectionContainer,
} from './skills.style';
import Skill from '../skill/skill';
import { skills } from '../../data';
function Skills() {
  return (
    <StyledSkills id='skills'>
      <Section heading='Skills' subheading={`What've I learned all that time?`}>
        <SkillsSectionContainer>
          <SkillsContainer>
            {skills.map((skill, index) => (
              <Skill key={index} skill={skill} />
            ))}
          </SkillsContainer>
          <NextSkill>
            I always try to fulfill my lack of knowledge by keep learning new
            things everyday. I will try my best to catch up with your project.
            That's is my guarantee.
          </NextSkill>
        </SkillsSectionContainer>
      </Section>
    </StyledSkills>
  );
}

export default Skills;
