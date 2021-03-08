import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../atoms/atoms';
import Login from '../../components/Login/Login';
import './HomePage.css'

const HomePage = () => {
    const user = useRecoilValue(userAtom)
    useEffect(() => {
        console.log(user);
    }, [user])

    return (
        <div className="homepage">
            {!user && <Login />}
            {user &&
                <div className="logged-in">
                    Welcome {user.firstName} {user.lastName}
                </div>
            }
        </div>
    );
}

export default HomePage;