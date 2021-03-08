import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { Button, Input, Message } from 'semantic-ui-react';
import { userAtom } from '../../atoms/atoms';
import './Login.css'

const Login = () => {
    const [user, setUser] = useState({});
    const [message, setMessage] = useState(null)
    const [loading, setLoading] = useState(false)
    const setUserState = useSetRecoilState(userAtom);

    const handleLogin = async () => {
        setLoading(true)
        let res = await axios.post('http://localhost:5000/api/login', {
            username: user.username,
            password: user.password
        })
        if (res.data.message) {
            setMessage(res.data.message)
            setLoading(false)
        } else {
            setMessage(null)
            setLoading(false)
            setUserState(res.data.user)
            localStorage.setItem('token', res.data.token);
        }
    }
    return (
        <div className="component-container">
            <div className="login-container">
                <div className="login-header">
                    <i className="fas fa-rocket"></i>
                    <span style={{ marginLeft: '3px' }}>Fakelook</span>
                </div>
                {message &&
                    <Message negative>
                        <p>{message}</p>
                    </Message>
                }
                <div className="login-form">
                    <div>
                        <label>Username:</label>
                        <Input onChange={(e) => setUser(prevUser => ({ ...prevUser, username: e.target.value }))} />
                    </div>
                    <div>
                        <label>Password:</label>
                        <Input type="password" onChange={(e) => setUser(prevUser => ({ ...prevUser, password: e.target.value }))} />
                    </div>
                    <div>
                        <Button primary color='teal' onClick={handleLogin} loading={loading}>Login</Button>
                    </div>
                    <span>Don't have an account yet? <Link to="/register">Register here</Link></span>
                </div>
            </div>
        </div>
    );
}

export default Login;