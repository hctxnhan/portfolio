import { StyledSocialMediaItem } from './socialmedia-item.style';
import { FunctionComponent } from 'react';
import {
  SocialMediaItemIcon,
  SocialMediaItemLink,
} from './socialmedia-item.style';
type Props = {
  link: string;
  children: React.ReactNode;
};

const SocialMediaItem: FunctionComponent<Props> = ({ children, link }) => {
  return (
    <StyledSocialMediaItem>
      <SocialMediaItemIcon>{children}</SocialMediaItemIcon>
      <SocialMediaItemLink>{link}</SocialMediaItemLink>
    </StyledSocialMediaItem>
  );
};

export default SocialMediaItem;
