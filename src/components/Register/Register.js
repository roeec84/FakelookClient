import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { Message, Button, Input } from 'semantic-ui-react';
import { userAtom } from '../../atoms/atoms';
import './Register.css'

const Register = () => {
    const [user, setUser] = useState({});
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const setUserState = useSetRecoilState(userAtom);
    const history = useHistory();

    const handleRegister = async () => {
        setLoading(true)
        const res = await axios.post('http://localhost:5000/api/login/register', {
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            password: user.password,
            email: user.email,
            dateOfBirth: user.dateOfBirth,
            address: user.address
        })
        console.log(res.data);
        if(Array.isArray(res.data) || res.data.message){
            setMessage(res.data);
            setLoading(false)
        }else{
            setLoading(false)
            setMessage(null)
            localStorage.setItem('token', res.data.token);
            setUserState(res.data.user);
            history.push('/')
        }
    }

    return (
        <div className="container">
            <div className="register-container">
                <div className="register-header">
                    <i className="fas fa-rocket"></i>
                    <span style={{ marginLeft: '3px' }}>Fakelook</span>
                </div>
                {message &&
                    <Message negative list={message.map(m => m.message)}>
                    </Message>
                }
                <div className="register-form">
                    <div>
                        <label>First name:</label>
                        <Input onChange={(e) => setUser(prevUser => ({ ...prevUser, firstName: e.target.value }))} />
                    </div>
                    <div>
                        <label>Last name:</label>
                        <Input onChange={(e) => setUser(prevUser => ({ ...prevUser, lastName: e.target.value }))} />
                    </div>
                    <div>
                        <label>Username:</label>
                        <Input onChange={(e) => setUser(prevUser => ({ ...prevUser, username: e.target.value }))} />
                    </div>
                    <div>
                        <label>Password:</label>
                        <Input type="password" onChange={(e) => setUser(prevUser => ({ ...prevUser, password: e.target.value }))} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <Input onChange={(e) => setUser(prevUser => ({ ...prevUser, email: e.target.value }))} />
                    </div>
                    <div>
                        <label>Birthday:</label>
                        <Input type="date" onChange={(e) => setUser(prevUser => ({ ...prevUser, dateOfBirth: e.target.value }))} />
                    </div>
                    <div>
                        <label>Address:</label>
                        <Input onChange={(e) => setUser(prevUser => ({ ...prevUser, address: e.target.value }))} />
                    </div>
                    <div>
                        <Button primary color='teal' onClick={handleRegister} loading={loading}>Register</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;