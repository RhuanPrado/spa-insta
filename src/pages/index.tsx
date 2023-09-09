import MetaTitle from '../components/MetaTitle';

import HomeContainer, { StartLink, LinksContainer } from '../styles/pages/home';

function Home(): JSX.Element {
  return (
    <HomeContainer>
      <MetaTitle page="Home" />
      <h1>Bem-vindo ao Insta</h1>
      <LinksContainer>
        <StartLink href="/login">Começar</StartLink>
      </LinksContainer>
    </HomeContainer>
  );
}

export default Home;
