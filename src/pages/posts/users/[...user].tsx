import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Timeline from "src/components/Timeline";
import HeaderApp from "src/components/Header";
import { Title } from "src/styles/global";

function UsersProfile(): JSX.Element {

  const { query } = useRouter()
  const { user } = query

  const [posts, setPosts] = useState(null)

  const getusers = async () => {
    try {
      const response = await fetch(`http://localhost:3003/post/${user[0]}`, {
        method: 'GET',
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (response.ok) {
        const data = await response.json()

        setPosts(data.payload)
      } else {
        const data = await response.json()
        console.error('Erro ao autenticar usuário.', data);
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
    }
  }

  useEffect(() => {
    if (user && user.length >= 2) {
      getusers()
    }
  }, [user])

  return (
    posts === null ? <>loading...</> : <>
      <HeaderApp />
      <Title>Publicações de {user ? user[1] : ''}</Title>
      <Timeline posts={posts} />
    </>
  );

}

export default UsersProfile
