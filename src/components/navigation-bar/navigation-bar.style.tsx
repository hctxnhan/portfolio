import styled from 'styled-components';
import useHover from '../useHover/withHover';
export const StyledNavigationBar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
`;
const StyledNavigationBarDot = styled.div`
  content: '';
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 1px solid var(--color-secondary);

  &:nth-child(3) {
    background-color: red;
  }
`;

export function NavigationBarDot() {
  const hoverEvent = useHover();
  return <StyledNavigationBarDot {...hoverEvent} />;
}
