import React, { useEffect } from 'react';
import httpService from '../../http/httpService';
import './FriendsPage.css';

const FriendsPage = () => {
    useEffect(() => {
        httpService.get('/api/users/me').then(res => console.log(res.data)).catch(err => console.log(err));
    })
    return ( 
        <div>Friends</div>
     );
}
 
export default FriendsPage;