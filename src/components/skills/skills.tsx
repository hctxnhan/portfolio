import { StyledSkills } from './skills.style';

import Section from '../section/section';
import { SkillsContainer, NextSkill } from './skills.style';
import Skill from '../skill/skill';

function Skills() {
  return (
    <Section heading='Skills' subheading={`What've I learned all that time?`}>
      <StyledSkills>
        <SkillsContainer>
          <Skill name='HTML' progress={95} />
          <Skill name='CSS' progress={90} />
          <Skill name='JAVASCRIPT' progress={80} />
          <Skill name='REACT' progress={75} />
          <Skill name='TYPESCRIPT' progress={65} />
          <Skill name='REDUX' progress={75} />
          <Skill name='GIT' progress={50} />
          <Skill name='FRAMER MOTION' progress={80} />
          <Skill name='STYLED COMPONENT' progress={80} />
          <Skill name='SASS' progress={90} />
          <Skill name='GRAPHQL' progress={75} />
          <Skill name='FIREBASE' progress={65} />
        </SkillsContainer>
        <NextSkill>
          I always try to fulfill my lack of knowledge by keep learning new
          things everyday. I will try my best to catch up with your project.
          That's is my guarantee.
        </NextSkill>
      </StyledSkills>
    </Section>
  );
}

export default Skills;
