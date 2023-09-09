import { useEffect, useState } from 'react';
import HeaderApp from 'src/components/Header';
import MetaTitle from 'src/components/MetaTitle';
import UsersList from 'src/components/UsersList';
import UsersContainer from 'src/styles/pages/users';

function Friends(): JSX.Element {

  const [users, setUsers] = useState(null);

  const getusers = async () => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/user/friends', {
        method: 'GET',
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (response.ok) {
        const data = await response.json()

        setUsers(data.payload)
      } else {
        const data = await response.json()
        console.error('Erro ao autenticar usuário.', data);
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
    }
  }

  useEffect(() => {
    getusers()
  }, [])

  return (
    users?<>
      <MetaTitle page="Amigos" />
      <HeaderApp />
      <UsersContainer>
        <UsersList users={users} remove={true} />
      </UsersContainer>
    </>:<>carregando</>
  );
}

export default Friends;
