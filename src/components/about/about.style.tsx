import styled from 'styled-components';

export const AboutImage = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  right: 0;
  bottom: 0;
  z-index: -1;
  flex-basis: 40%;
  backdrop-filter: blur(5px);
  overflow: hidden;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 0.4;
  }
`;

export const AboutInfoHeading = styled.p`
  font-family: var(--font-heading);
  font-size: 8rem;
  font-weight: var(--font-weight-bold);
`;

export const AboutInfoSubHeading = styled.p`
  font-family: var(--font-heading);
  font-size: 2.4rem;
`;

export const AboutInfo = styled.div`
  line-height: 1.8;
  padding: 4rem 4rem 4rem var(--padding-large);
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledAbout = styled.div`
  grid-area: 'about';
  font-family: var(--font-styled-text);
  font-weight: var(--font-weight-light);
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const AboutButtonContainer = styled.div`
  margin-top: 2rem;
`;
