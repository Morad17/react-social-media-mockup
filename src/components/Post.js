import React from 'react'
import '../assets/css/post.css'
import Person1 from '../assets/images/person-1.jpg'
import Post1 from '../assets/images/post-1.jpg'
import Post2 from '../assets/images/post-2.jpg'
import Post3 from '../assets/images/post-3.jpg'
import Post4 from '../assets/images/post-4.jpg'
import Like from '../assets/images/like-icon.png'
import Love from '../assets/images/love-icon.png'

import { Users } from '../components/UserData'

import MoreVertIcon from '@mui/icons-material/MoreVert';

const Post = ({post}) => {
    console.log(Users.username)
    return (
        <div className="post-container">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <img src={ Person1 } alt="" className="post-profile-image" />
                        <span className="post-username">{post.username}</span>
                        <span className="post-date">{ post.date }</span>
                    </div>
                    <div className="post-top-right">
                        <MoreVertIcon className="" />
                    </div>
                </div>
                <div className="post-center">
                    <span className="post-text">
                        {post?.desc}
                    </span>
                    <img src={ Post3} alt="" className="post-image" />
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <img src={ Like } alt="" className="like-icon" />
                        <img src={ Love } alt="" className="like-icon" />
                        <span className="post-like-counter">{post.like} likes</span>
                    </div>
                    <div className="post-bottom-right">
                        <span className="post-comment-text">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
