import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className = "text-white hover:text-yellow-500">Learn React</h1></a>
        <div>
          <button className="border-2 rounded bg-black hover:bg-blue-400 hover:text-blue-900 mx-5 my-5 px-2 py-1  transform motion-safe:hover:scale-110">Click Me!!</button>
        </div>
        
      </header>
    </div>
  );
}

export default App;
