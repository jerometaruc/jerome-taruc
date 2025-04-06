import './App.css';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <footer>
        <p>© {new Date().getFullYear()} Jerome Taruc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
