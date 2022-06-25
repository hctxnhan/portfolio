import { StyledNavBar, NavbarItemContainer } from './navbar.style';
import NavbarItem from '../navbar-item/navbar-item';

const NavBar = () => {
  return (
    <StyledNavBar>
      <NavbarItemContainer>
        <NavbarItem id='about'>About</NavbarItem>
        <NavbarItem id='education'>Education</NavbarItem>
        <NavbarItem id='skills'>Skills</NavbarItem>
        <NavbarItem id='works'>Works</NavbarItem>
        <NavbarItem id='contact'>Contact</NavbarItem>
      </NavbarItemContainer>
    </StyledNavBar>
  );
};

export default NavBar;
