import {
  StyledWorkItem,
  WorkItemAnchor,
  WorkItemContainer,
  WorkItemDescription,
  WorkItemImage,
  WorkItemTitle,
  WorkItemInfo,
  WorkItemTech,
  WorkItemTechName,
  Overlay,
} from './work-item.style';
import { WorkItemType } from '../../data';
import { FunctionComponent } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';

type Props = {
  work: WorkItemType;
};

const WorkItem: FunctionComponent<Props> = ({ work }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <StyledWorkItem
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      initial={{
        outline: 'none',
      }}
      whileHover={{
        outline: '1px solid red',
      }}
    >
      <WorkItemContainer>
        <WorkItemImage
          animate={{
            scale: isHover ? 1.2 : 1,
          }}
          transition={{
            duration: 2,
          }}
          src={work.image}
          alt={work.name}
        />
        <Overlay
          initial={{ opacity: 1 }}
          animate={{
            opacity: isHover ? 1 : 0,
          }}
          transition={{
            duration: 0.1,
          }}
        />
        {isHover && (
          <WorkItemInfo>
            <WorkItemTitle>{work.name}</WorkItemTitle>
            <WorkItemDescription>{work.description}</WorkItemDescription>
            <WorkItemAnchor href={work.link} target='_blank'>
              <FaExternalLinkAlt />
            </WorkItemAnchor>
            <WorkItemTech>
              {work.technologies.map((tech, index) => (
                <WorkItemTechName key={index}>{tech}</WorkItemTechName>
              ))}
            </WorkItemTech>
          </WorkItemInfo>
        )}
      </WorkItemContainer>
    </StyledWorkItem>
  );
};

export default WorkItem;
