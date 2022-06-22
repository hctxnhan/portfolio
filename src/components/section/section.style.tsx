import styled from 'styled-components';

export const SectionHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
`;

export const SectionHeading = styled.h1`
  font-family: var(--font-heading);
  font-size: var(--font-size-heading);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const SectionSubheading = styled.p`
  font-family: var(--font-heading);
  letter-spacing: 1.5px;
  font-size: var(--font-size-large);

  &::before {
    content: '/';
    font-size: var(--font-size-large);
    margin-right: 1rem;
    color: red;
  }
`;

export const SectionContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

export const StyledSection = styled('div')`
  padding: 2rem var(--padding-large);
  display: flex;
  flex-direction: column;
  height: 100%;
`;
