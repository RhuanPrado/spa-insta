import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const LinksContainer = styled.div`
  text-align: center; /* Alinha os links no centro horizontalmente */
`;
const StartLink = styled.a`
  display:block;
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  margin-right: 20px;

  &:hover {
    text-decoration: underline;
  }

`

export default HomeContainer;

export {
  StartLink,
  LinksContainer
}
