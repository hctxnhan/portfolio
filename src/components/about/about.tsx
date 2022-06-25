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
    <StyledAbout id='about'>
      <AboutInfo>
        <AboutInfoHeading>Hello.</AboutInfoHeading>
        <AboutInfoSubHeading>
          I have a passion for becoming a part of your project.
        </AboutInfoSubHeading>
        <AboutInfoSubHeading>
          What do you expect from a intern developer?
        </AboutInfoSubHeading>
        <AboutButtonContainer>
          <a href='#contact'>
            <Button>Contact me</Button>
          </a>
        </AboutButtonContainer>
      </AboutInfo>
      <AboutImage>
        <img
          src='https://steamuserimages-a.akamaihd.net/ugc/1461932727948717834/9896854B4F6ABA0DCBA86E02AD7E66E5F6DBF5B1/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
          alt=''
        />
      </AboutImage>
    </StyledAbout>
  );
};

export default About;
