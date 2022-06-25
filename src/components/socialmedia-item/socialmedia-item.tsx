import { StyledSocialMediaItem } from './socialmedia-item.style';
import { FunctionComponent, useState } from 'react';
import useHover from '../useHover/withHover';
import {
  SocialMediaItemIcon,
  SocialMediaItemLink,
} from './socialmedia-item.style';
type Props = {
  link: string;
  text: string;
  children: React.ReactNode;
};

const SocialMediaItem: FunctionComponent<Props> = ({
  children,
  link,
  text,
}) => {
  const hoverEvent = useHover();
  const [isHover, setHover] = useState(false);
  return (
    <StyledSocialMediaItem
      {...hoverEvent}
      whileHover={{
        scale: 1.8,
      }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      <SocialMediaItemIcon href={link}>{children}</SocialMediaItemIcon>
      <SocialMediaItemLink
        initial={{ opacity: 0 }}
        animate={{ opacity: isHover ? 1 : 0 }}
        transition={{
          duration: 0.2,
        }}
      >
        {text}
      </SocialMediaItemLink>
    </StyledSocialMediaItem>
  );
};

export default SocialMediaItem;
