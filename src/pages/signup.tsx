import { useState } from 'react';
import MetaTitle from '../components/MetaTitle';
import SignupContainer from '../styles/pages/signup';
import { useRouter } from 'next/router';
import { LinksContainer, LinkStyled, Button, Form, FormGroup, Input, Label } from 'src/styles/global';

function Signup(): JSX.Element {

  const router = useRouter();

  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const [errorP, setErrorP] = useState<boolean>(false)

  const signup = async () => {

    const data = {
      username,
      password
    }

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push('/login')
      } else {
        console.error('Erro ao autenticar usuário.');
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
    }
  };

  function verifyPassword() {
    return password !== confirmPassword ? setErrorP(true) : setErrorP(false)
  }

  return (
    <SignupContainer>
      <MetaTitle page="Signup" />
      <Form>
        <h2>SingUp</h2>

        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input type="text" value={username} onChange={(e) => setUsername(e.target.value.toString())} />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Senha</Label>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value.toString())} />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="confirm password">Confirmar senha</Label>
          <Input type="password" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value.toString()); setErrorP(!(password === e.target.value.toString())) }} onBlur={() => verifyPassword()} />
          {errorP && <p className="error">Senhas são diferentes</p>}
        </FormGroup>

        <Button onClick={() => { signup() }} disabled={errorP}>Inscrever</Button>

        <LinksContainer>
          <LinkStyled href="/login">Voltar</LinkStyled>
        </LinksContainer>
      </Form>
    </SignupContainer>
  );
}

export default Signup;
