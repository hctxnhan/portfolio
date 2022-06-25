import { StyledNavbarItem } from './navbar-item.style';
import { FunctionComponent } from 'react';
import useHover from '../useHover/withHover';
type Props = {
  children: React.ReactNode;
  id: string;
};

const NavbarItem: FunctionComponent<Props> = ({ children, id }) => {
  const hoverEvent = useHover();

  return (
    <StyledNavbarItem
      href={`#${id}`}
      whileHover={{
        fontWeight: 'var(--font-weight-bold)',
      }}
      {...hoverEvent}
    >
      {children}
    </StyledNavbarItem>
  );
};

export default NavbarItem;
