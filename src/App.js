import logo from './logo.svg';
import './App.css';
import {buttons} from './EleItems.js'

function App(props) {
  const result = false;
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
          {(result)?"XXX":"Learn React"}
        </a>
      </header>
      <div>
        {buttons(5)}
      </div>
      <p>{props.children}</p>
    </div>
  );
}

export default App;
