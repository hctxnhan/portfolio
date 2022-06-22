import styled from 'styled-components';

export const StyledHeaderHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  font-size: var(--font-size-primary);
`;

export const HeaderHeadingH1 = styled.h1`
  font-family: var(--font-heading);
  align-self: center;
`;

export const HeaderHeadingP = styled.p`
  font-style: italic;
  position: relative;
  padding-left: 1.5rem;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    height: 100%;
    background: red;
  }
`;
