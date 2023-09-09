import MetaTitle from '../../components/MetaTitle';
import { FormGroup, Label } from 'src/styles/global';
import PostsContainer, { ButtonPost, CustomFileInput, FileInput, PostForm, TextDescriptionPost } from '../../styles/pages/posts';
import { useEffect, useState } from 'react';
import Timeline from 'src/components/Timeline';
import HeaderApp from 'src/components/Header';

function Posts(): JSX.Element {

  const [selectedFile, setSelectedFile] = useState<File>(null);
  const [description, setDescription] = useState<string>("");
  const [posts, setPosts] = useState([]); // Inicialize com uma matriz vazia []

  const setFile = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const createPost = async () => {
    if (!localStorage.getItem('token')) {
      window.alert("Faça login para criar uma postagem.");
      return;
    }

    const fd = new FormData()
    fd.append('description', description)
    if (selectedFile) {
      fd.append('file', selectedFile, selectedFile.name)
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/post', {
          method: 'POST',
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          },
          body: fd,
        });

        if (response.ok) {
          getTimeline()
          setDescription("")
          setSelectedFile(null)
        } else {
          const data = await response.json()
          console.error('Erro ao criar postagem.', data);
        }
      } catch (error) {
        console.error('Erro na solicitação:', error);
      }
    } else {
      window.alert("Insira uma imagem para criar uma postagem.");
    }
  }

  const getTimeline = async () => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/post/all', {
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
        console.error('Erro ao obter a linha do tempo.', data);
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
    }
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getTimeline()
    }
  }, [])

  return (
    <>
      <MetaTitle page="posts" />
      <HeaderApp />
      <PostsContainer>
        <PostForm>
          <FormGroup>
            <Label>O que você está pensando?</Label>
            <TextDescriptionPost value={description} onChange={(e) => setDescription(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <CustomFileInput>
              Inserir Imagem
              <FileInput
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e)}
              />
            </CustomFileInput>
            <ButtonPost onClick={() => createPost()} >Postar</ButtonPost>
          </FormGroup>
        </PostForm>
      </PostsContainer>
      {posts.length === 0 ? <p>Nenhuma postagem disponível.</p> : <Timeline posts={posts} />}
    </>
  );
}

export default Posts;
