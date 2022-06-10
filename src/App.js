import {Navbar, Main, Footer} from './components/Layout';
import { ContactMe, Projects, Services, Skills } from './components/Section';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Skills />
      <Projects />
      <Services />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
