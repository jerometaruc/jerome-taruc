import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Credits from './components/Credits';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutMe />
      <Projects />
      <Credits />
    </div>
  );
}

export default App;
