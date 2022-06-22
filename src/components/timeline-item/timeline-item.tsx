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
};

const TimelineItem: FunctionComponent<Props> = ({
  date,
  description,
  heading,
}) => {
  return (
    <StyledTimelineItem>
      <TimelineItemContainer>
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
