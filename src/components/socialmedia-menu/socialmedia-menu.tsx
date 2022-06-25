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
      <SocialMediaItem
        link='https://www.facebook.com/nhan2947'
        text='facebook.com/nhan2947'
      >
        <FaFacebook />
      </SocialMediaItem>
      <SocialMediaItem
        link='https://www.github.com/hctxnhan'
        text='github.com/hctxnhan'
      >
        <FaGithub />
      </SocialMediaItem>
      <SocialMediaItem
        link='https://www.instagram.com/_hctnhan_'
        text='instagram.com/_hctnhan_'
      >
        <FaInstagram />
      </SocialMediaItem>
      <SocialMediaItem link='https://www.' text='hctxnhan@gmail.com'>
        <FaGoogle />
      </SocialMediaItem>
      <SocialMediaItem
        link='https://www.linkedin.com/in/hctnhan/'
        text='linkedin.com/in/hctnhan/'
      >
        <FaLinkedin />
      </SocialMediaItem>
    </StyledSocialMediaMenu>
  );
}

export default SocialMediaMenu;
