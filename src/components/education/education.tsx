import { StyledEducation, EducationContainer } from './education.style';
import Section from '../section/section';
import Timeline from '../timeline/timeline';
function Education() {
  return (
    <StyledEducation id='education'>
      <Section heading='Education' subheading='What am I doing right now?'>
        <EducationContainer>
          <Timeline />
        </EducationContainer>
      </Section>
    </StyledEducation>
  );
}

export default Education;
