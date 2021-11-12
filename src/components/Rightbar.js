import React from 'react'
import '../assets/css/rightbar.css'
import {Users} from '../components/UserData'
import Online from './Online'

import Person2 from '../assets/images/person-2.jpg'
import Post2 from '../assets/images/post-2.jpg'

import Birthday from '../assets/images/birthday-icon.png'
import Ad from '../assets/images/stock-ad.jpg'


const Rightbar = ({profile}) => {

    const HomeRightBar = () => {
        return(
            <>
                <div className="birthday-container">
                    <img src={ Birthday } alt="" className="birthday-image" />
                    <span className="birthday-text">3 Freinds have a birthday today</span>
                </div>
                <img src={ Ad } alt="" className="rightbar-ad" />
                <h4 className="rightbat-title"></h4>
                <ul className="rightbar-friendlist">
                   {Users.map(u =>(
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        )
    }

    const ProfileRightBar = () => {
        return(
            <>
                <h4 className="rightbar-title">User information</h4>
                <div className="rightbar-info">
                    <div className="rightbar-info-item">
                        <span className="rightbar-info-key">City:</span>
                        <span className="rightbar-info-value">London</span>
                    </div>
                    <div className="rightbar-info-item">
                        <span className="rightbar-info-key">From:</span>
                        <span className="rightbar-info-value">London</span>
                    </div>
                    <div className="rightbar-info-item">
                        <span className="rightbar-info-key">Relationship Status:</span>
                        <span className="rightbar-info-value">Single</span>
                    </div>
                </div>
                <h4 className="rightbar-title">Users Friends</h4>
                <div className="rightbar-follow-list">
                    <div className="rightbar-following">
                        <img src={ Person2 } alt="" className="rightbar-following-image" />
                        <span className="rightbar-following-name">James Smith</span>
                    </div>
                    <div className="rightbar-following">
                        <img src={ Person2 } alt="" className="rightbar-following-image" />
                        <span className="rightbar-following-name">James Smith</span>
                    </div>
                    <div className="rightbar-following">
                        <img src={ Person2 } alt="" className="rightbar-following-image" />
                        <span className="rightbar-following-name">James Smith</span>
                    </div>
                    <div className="rightbar-following">
                        <img src={ Person2 } alt="" className="rightbar-following-image" />
                        <span className="rightbar-following-name">James Smith</span>
                    </div>
                    <div className="rightbar-following">
                        <img src={ Person2 } alt="" className="rightbar-following-image" />
                        <span className="rightbar-following-name">James Smith</span>
                    </div>
                    <div className="rightbar-following">
                        <img src={ Person2 } alt="" className="rightbar-following-image" />
                        <span className="rightbar-following-name">James Smith</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className="rightbar-container">
            <div className="rightbar-wrapper">
                { profile ? <ProfileRightBar /> : <HomeRightBar />}
            </div>
        </div>
    )
}

export default Rightbar
