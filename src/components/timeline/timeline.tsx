import { StyledTimeline } from './timeline.style';
import TimelineItem from '../timeline-item/timeline-item';
import { timeline } from '../../data';
function Timeline() {
  return (
    <StyledTimeline>
      {timeline.map((item, index) => (
        <TimelineItem
          right={index % 2 === 0 ? false : true}
          key={item.id}
          timelineItem={item}
        />
      ))}
    </StyledTimeline>
  );
}

export default Timeline;
