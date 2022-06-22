import { FunctionComponent } from 'react';
import { StyledSection } from './section.style';
import {
  SectionHeading,
  SectionSubheading,
  SectionContent,
  SectionHeadingContainer,
} from './section.style';

export type SectionProps = {
  children: React.ReactNode;
  heading: string;
  subheading: string;
};

const Section: FunctionComponent<SectionProps> = ({
  heading,
  children,
  subheading,
}) => {
  return (
    <StyledSection>
      <SectionHeadingContainer>
        <SectionHeading>{heading}</SectionHeading>
        <SectionSubheading>{subheading}</SectionSubheading>
      </SectionHeadingContainer>

      <SectionContent>{children}</SectionContent>
    </StyledSection>
  );
};

export default Section;
