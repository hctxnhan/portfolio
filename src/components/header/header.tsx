import { FunctionComponent } from 'react';
import { StyledHeader } from './header.style';
import NavBar from '../navbar/navbar';
import HeaderHeading from '../header-heading/header-heading';
const Header: FunctionComponent = () => {
  return (
    <StyledHeader>
      <HeaderHeading />
      <NavBar />
    </StyledHeader>
  );
};

export default Header;
