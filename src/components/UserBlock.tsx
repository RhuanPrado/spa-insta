import { useRouter } from 'next/router';
import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/store/reducers';
import { setUser } from 'src/store/slices/userSlice';
import { Button, LinkButton } from 'src/styles/global';
import styled from 'styled-components';

const UserWrapper = styled.div`
  margin: 16px;
  border: 1px solid #ccc;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
`;

function UserBlock({ userData, remove }) {

  const router = useRouter()
  const user = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()

  const addFriend = async (id) => {
    try {

      let friends
      if (remove) {
        friends = user.friends.filter((f) => f !== id)
      } else {
        friends = user?.friends ? [...user.friends, id] : [id]
      }
      const response = await fetch(`${process.env.API_URL}/user/friends`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ friends }),
      });

      if (response.ok) {
        dispatch(setUser({ ...user, friends }))
        if (remove) {
          router.push('/posts/users')
        } else {
          router.push('/posts/friends')
        }

      } else {
        const data = await response.json()
        console.error("Erro ao autenticar usuário.", data);
      }
    } catch (error) {
      console.error("Erro na solicitação:", error);
    }
  }

  return (
    <UserWrapper>
      <LinkButton onClick={() => router.push(`/posts/users/${userData?.id}/${userData?.username}`)}>{userData?.username}</LinkButton>
      <Button onClick={() => addFriend(userData?.id)}>{remove ? 'Remover' : 'Adicionar'}</Button>
    </UserWrapper>
  );
}

export default UserBlock;
