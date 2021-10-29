import React from 'react'
import '../assets/css/feed.css'

import Share from '../components/Share'
import { Posts } from '../components/UserData'
import Post from '../components/Post'

const Feed = () => {
    return (
        <div className="feed-container">
            <div className="feed-wrapper">
                <Share />
                {Posts.map((p) => (
                    <Post key={p.id} post={p} />
                ))}
            </div>
        </div>
    )
}

export default Feed
