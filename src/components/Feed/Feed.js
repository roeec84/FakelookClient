import React from 'react';
import './Feed.css';

function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));    bytes.forEach((b) => binary += String.fromCharCode(b));    return window.btoa(binary);
};

const Feed = () => {
    return ( 
        <div>
            Feed
        </div>
     );
}
 
export default Feed;

/*
<div>
            {posts &&
                <div>
                {posts.map(post => {
                        return(
                        <img src={`data:image/png;base64,${arrayBufferToBase64(post.image.data)}`} alt='test img'/>
                        )
                    })}
                </div>
            }
        </div>
*/