import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/US_%245_Series_2006_obverse.jpg" className="App-logo" alt="logo" />
        <p>
          Fiver <span className="Money">💲</span> Fiver
        </p>
        <p className="small">
          Click the link below to find out more
        </p>
        <p>
          <a
            className="App-link"
            href="https://www.patreon.com/user?u=83561883"
            target="_blank"
            rel="noopener noreferrer"
          >
            $5?
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
