import { StyledWorks, WorksContainer } from './works.style';
import Section from '../section/section';
import WorkItem from '../work-item/work-item';
import { works } from '../../data';
import { useEffect, useRef, useState } from 'react';
function Works() {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.scrollWidth - ref.current.offsetWidth);
    }
  }, []);

  return (
    <StyledWorks id='works'>
      <Section heading='WORKS' subheading={`What've I done so far?`}>
        <WorksContainer
          ref={ref}
          drag='x'
          dragConstraints={{
            right: 0,
            left: -width,
          }}
        >
          {works.map((work, index) => (
            <WorkItem key={index} work={work} />
          ))}
        </WorksContainer>
      </Section>
    </StyledWorks>
  );
}

export default Works;
