import React from 'react'

import Person2 from '../assets/images/person-2.jpg'

const Online = ({ user }) => {
    return (
        <li className="rightbar-friend">
        <div className="rightbar-profile-image-container">
            <img src={ Person2 } alt="" className="rightbar-profile-image" />
            <span className="rightbar-online"></span>
        </div>
        <span className="rightbar-username">{user.username}</span>
    </li>
    )
}

export default Online
