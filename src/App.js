import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/Routes';
import { useEffect } from 'react';
import httpService from './http/httpService';
import { userAtom } from './atoms/atoms';
import { useRecoilState } from 'recoil';
import Tools from './components/Home/Tools';

function App() {
  const [userState, setUserState] = useRecoilState(userAtom);

  useEffect(() => {
    const login = async () => {
      const res = await httpService.get('/api/login/me');
      if(res.data.token && res.data.user){
        localStorage.setItem('token', res.data.token);
        setUserState(res.data.user);
      }
    }
    login();
  }, [setUserState])
  
  return (
    <Router>
      <div className="App">
        <div className='Circle1'></div>
        <div className='Circle2'></div>
        <div className='app-content'>
          <div className="app-box glass">
            {userState && <Tools/>}
            <Routes />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;