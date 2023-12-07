import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Banner } from './components/Banner/Banner';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Footer } from './components/Footer/Footer';
import { Contact } from './components/Contact/Contact';
import { About } from './components/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
