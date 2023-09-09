import Link from 'next/link';
import React from 'react';
import { useAppSelector } from 'src/store/reducers';
import { HeaderContainer, Nav, Title } from 'src/styles/global';

function HeaderApp() {
  const user = useAppSelector(state => state.user)

  // Verifique se o objeto user está definido antes de acessar suas propriedades
  const userId = user ? user.id : null;
  const username = user ? user.username : null;

  return (
    <HeaderContainer>
      <Title>Insta</Title>
      <Nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/posts/friends">Amigos</Link>
          </li>
          <li>
            <Link href="/posts/users">Usuários</Link>
          </li>
          {user && ( // Renderize os links relacionados ao usuário somente se o usuário estiver autenticado
            <>
              <li>
                <Link href={`/posts/users/${userId}/${username}`}>Meu Perfil</Link>
              </li>
              <li>
                <Link href="/login">Sair</Link>
              </li>
            </>
          )}
        </ul>
      </Nav>
    </HeaderContainer>
  );
}

export default HeaderApp;
