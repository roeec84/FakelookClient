import React from 'react';
import { useRecoilValue } from 'recoil';
import { displayPostsAtom, userAtom } from '../../atoms/atoms';
import Login from '../../components/Login/Login';
import './HomePage.css'

const HomePage = () => {
    const user = useRecoilValue(userAtom);
    const displayPosts = useRecoilValue(displayPostsAtom);
    if(!user){
        return (
            <div className="homepage">
                <Login />
            </div>
        )
    }
    return (
        <div className="homepage">
            {displayPosts.payload}
        </div>
    );
}

export default HomePage;