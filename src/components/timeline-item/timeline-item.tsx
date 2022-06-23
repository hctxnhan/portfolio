import {
  StyledTimelineItem,
  TimelineItemContent,
  TimelineItemDate,
  TimelineItemDescription,
  TimelineItemHeading,
  TimelineItemContainer,
} from './timeline-item.style';
import { FunctionComponent } from 'react';
type Props = {
  heading: string;
  description: string;
  date: string;
  right: boolean;
};

const TimelineItem: FunctionComponent<Props> = ({
  date,
  description,
  heading,
  right,
}) => {
  const variants = {
    init: {
      x: right ? 200 : -200,
      opacity: 0,
    },
    inView: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <StyledTimelineItem>
      <TimelineItemContainer
        variants={variants}
        initial={'init'}
        whileInView={'inView'}
        transition={{ duration: 0.8, type: 'tween' }}
      >
        <TimelineItemDate>{date}</TimelineItemDate>
        <TimelineItemContent>
          <TimelineItemHeading>{heading}</TimelineItemHeading>
          <TimelineItemDescription>{description}</TimelineItemDescription>
        </TimelineItemContent>
      </TimelineItemContainer>
    </StyledTimelineItem>
  );
};

export default TimelineItem;
