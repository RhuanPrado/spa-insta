import { useState } from 'react';
import { useRouter } from 'next/router';

import { setUser } from 'src/store/slices/userSlice';
import { useAppDispatch } from 'src/store/reducers';
import MetaTitle from '../components/MetaTitle';
import LoginContainer, { SingupLink } from '../styles/pages/login';
import { Button, Form, FormGroup, Input, Label, LinksContainer } from '../styles/global';

function Login(): JSX.Element {

  const router = useRouter();
  const dispatch = useAppDispatch()

  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [errorP, setErrorP] = useState<boolean>(false)

  const login = async () => {

    const data = {
      username,
      password,
    }

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/authorization', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setErrorP(false)
        const data = await response.json()
        localStorage.setItem('token', data?.payload?.token)
        dispatch(setUser({ ...data.payload.user }))
        router.push('/posts')
      } else {
        const data = await response.json()
        if (response.status === 401) {
          setErrorP(true)
        }
        console.error('Erro ao autenticar usuário.', data);
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
    }
  }

  return (
    <LoginContainer>
      <MetaTitle page="Login" />
      <Form>
        <h2>Login</h2>

        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input type="text" value={username} onChange={(e) => setUsername(e.target.value.toString())} />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Senha</Label>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value.toString())} />
          {errorP && <p className="error">Senha ou Usuário inválido</p>}

        </FormGroup>

        <Button onClick={() => login()} >Entrar</Button>

        <LinksContainer>
          <SingupLink href="/signup">Inscrever-se</SingupLink>
        </LinksContainer>
      </Form>
    </LoginContainer>
  );
}

export default Login;
