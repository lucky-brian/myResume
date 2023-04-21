import Navbar from './pages/navbar'
import Slide from './pages/slide';
import About from './pages/about';

function App() {
  return (
    <div className="App bg-neutral-800 font-mono text-white">
      <div>
        <Navbar />
        <Slide />
        <About />
      </div>
    </div>
  );
}

export default App;
