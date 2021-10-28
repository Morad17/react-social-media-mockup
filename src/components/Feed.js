import React from 'react'
import '../assets/css/feed.css'

import Share from '../components/Share'
import Post from '../components/Post'

const Feed = () => {
    return (
        <div className="feed-container">
            <div className="feed-wrapper">
                <Share />
                <Post />
            </div>
        </div>
    )
}

export default Feed
