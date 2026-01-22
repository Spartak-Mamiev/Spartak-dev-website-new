import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Introduction } from './components/introduction/Introduction';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            index
            element={<Introduction />}
          />
          {/*         <Route
            path="/about"
            element={<About />}
          /> */}
          <Route
            path="/projects"
            element={<Projects />}
          />
          <Route
            path="/skills"
            element={<Skills />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
