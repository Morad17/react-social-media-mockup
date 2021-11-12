import React from 'react'
import '../assets/css/closefriends.css'
import Person2 from '../assets/images/person-2.jpg'


const CloseFriends = ({user}) => {
    return (
        <li className="sidebar-friend">
            <img src={ Person2 } alt="" className="sidebar-friend-image" />
            <span className="sidebar-friend-name">{ user.username }</span>
        </li>
    )
}

export default CloseFriends
