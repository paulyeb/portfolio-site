import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
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
