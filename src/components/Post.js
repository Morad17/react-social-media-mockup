import React from 'react'
import '../assets/css/post.css'
import Person1 from '../assets/images/person-1.jpg'
import Post1 from '../assets/images/post-1.jpg'
import Like from '../assets/images/like-icon.png'
import Love from '../assets/images/love-icon.png'

import MoreVertIcon from '@mui/icons-material/MoreVert';

const Post = () => {
    return (
        <div className="post-container">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <img src={ Person1 } alt="" className="post-profile-image" />
                        <span className="post-username">Morad Elb</span>
                        <span className="post-date">5 minutes ago</span>
                    </div>
                    <div className="post-top-right">
                        <MoreVertIcon className="" />
                    </div>
                </div>
                <div className="post-center">
                    <span className="post-text">
                        Hello there World
                    </span>
                    <img src={ Post1 } alt="" className="post-image" />
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <img src={ Like } alt="" className="like-icon" />
                        <img src={ Love } alt="" className="like-icon" />
                        <span className="post-like-counter">32 likes</span>
                    </div>
                    <div className="post-bottom-right">
                        <span className="post-comment-text">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
