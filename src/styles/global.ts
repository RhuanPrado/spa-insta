import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  *{

    box-sizing: border-box;

    padding: 0;
    margin: 0;
  }

  :root {

    font-family: sans-serif;
    font-size: 62.5%;
  }

  body {

    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};

    display: flex;
    justify-content: center;

    min-height: 100vh;
  }

  .error{
    margin: 10px;
    color: red;
  }
`;

const Form = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const LinkStyled = styled.a`
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

const HeaderContainer = styled.header`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  width: 100vh;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 32px;
  margin: 5px;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0px 5px;
    display: flex;
    gap: 20px;
  }

  li {
    margin: 0;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 15px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const LinkButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  padding: 0;
  margin: 0;
  outline: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #0056b3;
  }
`;

export default GlobalStyles;

export {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  LinkStyled,
  LinksContainer,
  HeaderContainer,
  Title,
  Nav,
  LinkButton
}
