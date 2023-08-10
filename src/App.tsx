import Layout from './components/Layout/Layout';
import GamePage from './pages/GamePage';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <GamePage />
      </Layout>
    </>
  );
}

export default App;
