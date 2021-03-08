import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/Routes';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='Circle1'></div>
        <div className='Circle2'></div>
        <div className='app-content'>
          <div className="app-box glass">
            <Routes/>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;