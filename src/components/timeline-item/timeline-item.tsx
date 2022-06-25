import {
  StyledTimelineItem,
  TimelineItemContent,
  TimelineItemDate,
  TimelineItemDescription,
  TimelineItemHeading,
  TimelineItemContainer,
} from './timeline-item.style';
import { FunctionComponent } from 'react';
import { TimelineItemType } from '../../data';

type Props = {
  timelineItem: TimelineItemType;
  right?: boolean;
};

const TimelineItem: FunctionComponent<Props> = ({
  timelineItem: { date, description, heading },
  right = false,
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
        viewport={{ once: true }}
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
