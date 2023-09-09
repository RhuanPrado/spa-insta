import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

`;


const SingupLink = styled.a`
  display:block;
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  margin-right: 20px;

  &:hover {
    text-decoration: underline;
  }
`
const LinksContainer = styled.div`
  text-align: center; /* Alinha os links no centro horizontalmente */
  margin: 10px;
`;

export default LoginContainer;

export {
  LinksContainer,
  SingupLink
}
