import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { space, SpaceProps, layout, LayoutProps } from 'styled-system';

export interface TimelineItemProps extends SpaceProps, LayoutProps {
  title: string;
  description?: string;
  date: string;
}

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TimelineItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const TimelineItemContent = styled.div`
  margin-left: 16px;
`;

const TimelineItemTitle = styled.h3`
  margin: 0;
`;

const TimelineItemDate = styled.span`
  font-size: 14px;
  color: #888;
`;

export interface TimelineProps {
  items: TimelineItemProps[];
}

const Timeline: FC<TimelineProps> = ({ items }) => {
  return (
    <TimelineContainer>
      {items.map((item, index) => (
        <TimelineItemContainer key={index}>
          <div>{item.date}</div>
          <TimelineItemContent>
            <TimelineItemTitle>{item.title}</TimelineItemTitle>
            {item.description && <p>{item.description}</p>}
          </TimelineItemContent>
        </TimelineItemContainer>
      ))}
    </TimelineContainer>
  );
};


export default Timeline;