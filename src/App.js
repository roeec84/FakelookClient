import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const auth = async () => {
    const res = await axios.get('http://localhost:5000/api/facebook/')
    console.log(res.data);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          onClick={auth}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
