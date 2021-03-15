import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { Checkbox, Divider, Icon, Image } from 'semantic-ui-react';
import { displayPostsAtom, userAtom } from '../../atoms/atoms';
import Feed from '../Feed/Feed';
import Map from '../Map/Map';
import './Tools.css';

const Tools = () => {
    const user = useRecoilValue(userAtom)
    const [displayPosts, setDisplayPosts] = useRecoilState(displayPostsAtom)

    const handleFeedChange = () => {
        if (displayPosts.type === 'map') {
            setDisplayPosts({
                type: 'feed',
                payload: <Feed />
            });
        } else {
            setDisplayPosts({
                type: 'map',
                payload: <Map />
            });
        }
    }

    return (
        <div className="tools">
            <div className="tools-header">
                <Image avatar src="https://picsum.photos/200" size='tiny' />
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
            <Divider />
            <div className="tools-body">
                <div className="tool-item">
                    <div className="tool-item-text">
                        <i className="fas fa-list"></i>
                        <Link to="/" className="tool-link">Feed</Link>
                    </div>
                </div>
                <div className="tool-item">
                    <div className="tool-item-text">
                        <i className="fas fa-arrow-circle-up"></i>
                        <Link to="/post" className="tool-link">Publish</Link>
                    </div>
                </div>
                <div className="tool-item">
                    <div className="tool-item-text">
                        <i className="fas fa-sort"></i>
                        <Link to="/filter" className="tool-link">Filter</Link>
                    </div>
                </div>
                <div className="tool-item">
                    <div className="tool-item-text">
                        <i className="fas fa-user-friends"></i>
                        <Link to="/friends" className="tool-link">Friends</Link>
                    </div>
                </div>
                <div className="tool-item">
                    <div className="tool-item-text">
                        <i className="fas fa-users"></i>
                        <Link to="/groups" className="tool-link">Groups</Link>
                    </div>
                </div>
            </div>
            <Divider />
            <div className="tools-footer">
                <Icon name="world" />
                <Checkbox slider onChange={handleFeedChange} />
                <Icon name="list" />
            </div>
        </div>
    );
}

export default Tools;