import { StyledSocialMediaMenu } from './socialmedia-menu.style';
import SocialMediaItem from '../socialmedia-item/socialmedia-item';
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';
function SocialMediaMenu() {
  return (
    <StyledSocialMediaMenu>
      <SocialMediaItem link='facebook.com/social'>
        <FaFacebook />
      </SocialMediaItem>
      <SocialMediaItem link='github.com/social'>
        <FaGithub />
      </SocialMediaItem>
      <SocialMediaItem link='instagram.com/social'>
        <FaInstagram />
      </SocialMediaItem>
      <SocialMediaItem link='nhan@gmail.com'>
        <FaGoogle />
      </SocialMediaItem>
      <SocialMediaItem link='linkedin.com/social'>
        <FaLinkedin />
      </SocialMediaItem>
    </StyledSocialMediaMenu>
  );
}

export default SocialMediaMenu;
