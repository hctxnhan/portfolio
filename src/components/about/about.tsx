import { FunctionComponent } from 'react';
import {
  StyledAbout,
  AboutImage,
  AboutInfo,
  AboutInfoHeading,
  AboutInfoSubHeading,
  AboutButtonContainer,
} from './about.style';

import Button from '../button/button';

const About: FunctionComponent = () => {
  return (
    <StyledAbout>
      <AboutInfo>
        <AboutInfoHeading>Hello.</AboutInfoHeading>
        <AboutInfoSubHeading>
          I have a passion for becoming a part of your project.
        </AboutInfoSubHeading>
        <AboutInfoSubHeading>
          What do you expect from a intern developer?
        </AboutInfoSubHeading>
        <AboutButtonContainer>
          <Button>Contact me</Button>
        </AboutButtonContainer>
      </AboutInfo>
      <AboutImage>
        <img
          src='https://i.pinimg.com/736x/26/12/73/261273da88b3732c008a871d0284642b--men-photography-portrait-male-photography.jpg'
          alt=''
        />
      </AboutImage>
    </StyledAbout>
  );
};

export default About;
