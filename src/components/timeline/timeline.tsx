import { StyledTimeline } from './timeline.style';
import TimelineItem from '../timeline-item/timeline-item';
import { timeline } from '../../data';
function Timeline() {
  return (
    <StyledTimeline>
      {timeline.map((item, index) => (
        <TimelineItem
          date={item.date}
          heading={item.heading}
          description={item.description}
        />
      ))}
    </StyledTimeline>
  );
}

export default Timeline;
