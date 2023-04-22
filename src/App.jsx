import Navbar from './pages/navbar';
import Slide from './pages/slide';
import About from './pages/about';
import Experience from './pages/experience';
import Skill from './pages/skill';
import Contact from './pages/contact';
import Footer from './pages/footer';

function App() {
  return (
    <div className="App bg-neutral-800 font-mono text-white">
      <div>
        <Navbar />
        <Slide />
        <About />
        <Experience />
        <Skill />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
