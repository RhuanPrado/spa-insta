import React from 'react';
import styled from 'styled-components';

const PostWrapper = styled.div`
  margin: 16px;
  border: 1px solid #ccc;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Description = styled.p`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 20px;
`

const Timestamp = styled.p`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 15px;
`

function PostBlock({ post }) {

  return (
    <PostWrapper>
      <Description>{post.description}</Description>
      <Image src={`data:image/*;base64, ${post?.file}`} alt="Post" />
      <Timestamp>{new Date(post?.created_at).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}</Timestamp>
    </PostWrapper>
  );
}

export default PostBlock;
