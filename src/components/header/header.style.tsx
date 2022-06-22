import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 7rem;
  padding: var(--padding-small);
  z-index: 10;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
`;
