import logo from './logo.svg';
import './App.css';

function App() {
  const greeting = "Это тестовый проект Власова М. А.";
  const rel = "Added semantic-release"

  return (
    <div className="App">
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         {greeting}
      </header>
      <div>
        {rel}
      </div>
    </div>
  );
}

export default App;
