import { StyledSocialMediaItem } from './socialmedia-item.style';
import { FunctionComponent } from 'react';
import withHover from '../withHover/withHover';
import { useState } from 'react';
import {
  SocialMediaItemIcon,
  SocialMediaItemLink,
} from './socialmedia-item.style';
type Props = {
  link: string;
  children: React.ReactNode;
};

const SocialMediaItem: FunctionComponent<Props> = ({ children, link }) => {
  const [isHover, setHover] = useState(false);
  return (
    <StyledSocialMediaItem
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
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

export default withHover(SocialMediaItem);
