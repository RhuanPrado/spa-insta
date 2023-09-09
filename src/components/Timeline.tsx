import React from 'react';
import styled from 'styled-components';
import PostBlock from './PostBlock';

const TimelineContainer = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  width: 100vh;
`;

function Timeline({ posts }): JSX.Element {
  return (
    <TimelineContainer>
      <div>
        {posts?.map((post) => (
          <PostBlock key={post?.id} post={post} />
        ))}
      </div>
    </TimelineContainer>
  );
}

export default Timeline;
