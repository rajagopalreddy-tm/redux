import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';

function App() {
  return (
    <>
    <Navbar/>
    <div className="App">
      <header className="App-header">
        <h1>Hello Redux</h1>
        <Shop/>
      </header>
    </div>
    </>
  );
}

export default App;
