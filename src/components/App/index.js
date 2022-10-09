// == Import
// npm
import { useState } from 'react';
import { Image } from 'semantic-ui-react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
// Assests
import logo from 'src/assets/images/logo-github.png';
import './styles.scss';
// Composants
import SearchBar from '../SearchBar';
import ReposResults from '../ReposResults';
import Message from '../Message';
import NavBar from '../NavBar';
import FAQ from '../FAQ';

// == Composant
function App() {
  const [search, setSearch] = useState('');
  const [repos, setRepos] = useState([]);
  const [count, setCount] = useState(0);

  const cleanRepos = (dirtyRepos) => {
    const cleanedRepos = dirtyRepos.map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      owner: {
        login: repo.owner.login,
        avatar_url: repo.owner.avatar_url,
      },
      html_url: repo.html_url,
    }));
    return cleanedRepos;
  };

  const loadRepos = () => {
    axios.get(`https://api.github.com/search/repositories?q=${search}`)
      .then((response) => {
        setCount(response.data.total_count);
        const cleanedRepos = cleanRepos(response.data.items);
        setRepos(cleanedRepos);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setSearch('');
      });
  };

  return (
    <div className="app">
      <header>
        <Image src={logo} size="small" centered />
      </header>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <SearchBar value={search} setValue={setSearch} loadRepos={loadRepos} />
              <Message count={count} />
              <ReposResults repos={repos} />
            </>
          )}
        />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
