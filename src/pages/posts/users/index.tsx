import { useEffect, useState } from 'react';
import HeaderApp from 'src/components/Header';
import MetaTitle from 'src/components/MetaTitle';
import UsersList from 'src/components/UsersList';
import UsersContainer from 'src/styles/pages/users';

function Users(): JSX.Element {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/users', {
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
        console.error('Erro ao obter lista de usuários.', data);
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
    } finally {
      setLoading(false); // Indica que o carregamento está completo
    }
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getUsers()
    }
  }, [])

  return (
    <>
      <MetaTitle page="Usuários" />
      <HeaderApp />
      {loading ? <p>Carregando...</p> : (
        <UsersContainer>
          {users.length === 0 ? <p>Nenhum usuário disponível.</p> : <UsersList users={users} remove={false} />}
        </UsersContainer>
      )}
    </>
  );
}

export default Users;
