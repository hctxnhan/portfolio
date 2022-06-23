import { StyledSocialMediaItem } from './socialmedia-item.style';
import { FunctionComponent } from 'react';
import useHover from '../withHover/withHover';
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
        scale: 1.5,
      }}
    >
      <SocialMediaItemIcon>{children}</SocialMediaItemIcon>
      {/* <SocialMediaItemLink
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 5,
        }}
      >
        {link}
      </SocialMediaItemLink> */}
    </StyledSocialMediaItem>
  );
};

export default SocialMediaItem;
