import Main from './components/Main';
import Navbar from './components/Navbar';
import { Projects, Skills } from './components/Section';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
