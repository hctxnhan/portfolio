import styled from 'styled-components';

export const StyledTimeline = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    height: 100%;
    background-color: red;
  }
`;
