import styled from 'styled-components';

const PostsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
`;

const PostForm = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 100vh;
  height: 160px;
`
const TextDescriptionPost = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  resize: none;
`

const UploadContainer = styled.div`
  align-items: center;
  gap: 10px;
`;

const FileInput = styled.input`
  display: none;
`;

const CustomFileInput = styled.label`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  flex-direction: column;
  &:hover {
    background-color: #0056b3;
  }
`;

const ButtonPost = styled.button`
  flex-direction: column;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 10px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;


export default PostsContainer;

export {
  PostForm,
  TextDescriptionPost,
  UploadContainer,
  FileInput,
  CustomFileInput,
  ButtonPost
}
