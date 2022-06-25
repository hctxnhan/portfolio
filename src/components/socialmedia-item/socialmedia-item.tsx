import { StyledSocialMediaItem } from './socialmedia-item.style';
import { FunctionComponent } from 'react';
import useHover from '../useHover/withHover';
import {
  SocialMediaItemIcon,
  SocialMediaItemLink,
} from './socialmedia-item.style';
type Props = {
  link: string;
  children: React.ReactNode;
};

const SocialMediaItem: FunctionComponent<Props> = ({ children, link }) => {
  const hoverEvent = useHover();
  return (
    <StyledSocialMediaItem
      {...hoverEvent}
      whileHover={{
        scale: 1.8,
      }}
    >
      <SocialMediaItemIcon>{children}</SocialMediaItemIcon>
    </StyledSocialMediaItem>
  );
};

export default SocialMediaItem;
