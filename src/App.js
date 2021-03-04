import './App.css';
import HomePage from './Pages/Home/HomePage';

function App() {
  return (
    <div className="App">
      <div className='Circle1'></div>
      <div className='Circle2'></div>
      <div className='app-content'>
        <div className="app-box glass">
          <HomePage />
        </div>
      </div>
    </div>
  );
}

export default App;