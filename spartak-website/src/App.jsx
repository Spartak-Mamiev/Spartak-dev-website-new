import { Header } from './components/header/Header';
import { Introduction } from './components/introduction/Introduction';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Introduction />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
