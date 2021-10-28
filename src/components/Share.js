import React from 'react'
import '../assets/css/share.css'

import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import RoomIcon from '@mui/icons-material/Room';


import Person1 from '../assets/images/person-1.jpg'

const Share = () => {
    return (
        <div className="share-container">
            <div className="share-wrapper">
                <div className="share-top">
                    <img src={ Person1 } alt="" className="share-profile-image" />
                    <input placeholder="whats on your mind?" className="share-input" />
                </div>
                <hr className="share-hr" />
                <div className="share-bottom">
                    <div className="share-options">
                        <div className="share-option">
                            <PermMediaIcon htmlColor="tomato" className="share-icon" />
                            <span className="share-option-text">Photo/Video</span>
                        </div>
                        <div className="share-option">
                            <LabelIcon htmlColor="blue" className="share-icon" />
                            <span className="share-option-text">Tag</span>
                        </div>
                        <div className="share-option">
                            <RoomIcon htmlColor="green" className="share-icon" />
                            <span className="share-option-text">Location</span>
                        </div>
                        <div className="share-option">
                            <InsertEmoticonIcon htmlColor="goldenrod" className="share-icon" />
                            <span className="share-option-text">Reaction</span>
                        </div>
                    </div>
                    <button className="share-button">
                        Share
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Share
