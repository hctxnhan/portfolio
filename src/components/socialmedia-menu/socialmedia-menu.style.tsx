import styled from 'styled-components';

export const StyledSocialMediaMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &::after {
    content: '';
    height: 10rem;
    width: 1px;
    background-color: red;
    margin: 0 auto;
  }
`;
