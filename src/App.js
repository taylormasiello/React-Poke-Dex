import logo from './pokeLogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img alt="pokeLogo" className="logo" src={logo} />
      </header>

      <main>
        <div className="search-container">
          <input className="search-box" type="text" placeholder="Search..." />
        </div>
      </main>
    </div>
  );
}

export default App;
