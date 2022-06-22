import styled from 'styled-components';

export const StyledNavBar = styled.nav`
  ul {
    font-size: var(--font-size-primary);
    font-family: var(--font-styled-text);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    list-style: none;
    font-weight: var(--font-weight-semi-bold);
    text-transform: uppercase;
  }
`;
