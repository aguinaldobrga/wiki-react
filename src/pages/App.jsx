import github from "../assets/logogithub.png";
import { Container } from './style';
import Input from '../components/Input';
import Button from '../components/Button';
import ItenRepo from "../components/ItenRepo";
import { useState } from "react";
import { api } from '../services/api';

export function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]); 

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);

    if (data.id) {
      const isExist = repos.find(repo => repo.id === data.id);

      if(!isExist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo(''); 
        return;
      }
    }
    alert('Repositório não encontrado ou já adicionado!');
  };

  const handleRemoveRepo = (id) => {
    const newRepos = repos.filter(repo => repo.id !== id);
    setRepos(newRepos);
  };

 

  return (
    <Container>
      <img src={github} width="50px" alt="logo github" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => 
      <ItenRepo 
      key={repo.id} 
      repo={repo} 
      handleRemoveRepo={handleRemoveRepo}
      />)}
    </Container>
  );
}
