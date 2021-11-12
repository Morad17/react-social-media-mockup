import React from 'react'
import "../assets/css/profile.css"
import '../assets/css/home.css'
import Person1 from '../assets/images/person-1.jpg'
import Post1 from '../assets/images/post-1.jpg'

import Topnav from '../components/Topnav'
import Sidebar from '../components/Sidebar'
import Rightbar from '../components/Rightbar'
import Feed from '../components/Feed'

const Profile = () => {
    return (
        <>
        <Topnav />
        <div className="profile">
            <Sidebar />
            <div className="profile-right">
                <div className="profile-right-top">
                    <div className="profile-cover">
                        <img src={ Post1 } alt="" className="profile-cover-image" />
                    <img src={ Person1 } alt="" className="profile-user-image" />
                    </div>
                    <div className="profile-info">
                        <h4 className="profile-info-name">Morad Elb</h4>
                        <span className="profile-info-description"> About My Life</span>
                    </div>
                </div>
                <div className="profile-right-bottom">
                    <Feed />
                    <Rightbar profile/>
                </div>
            </div>
            
        </div>
    </>
    )
}

export default Profile
