import React from 'react'
import '../assets/css/rightbar.css'

import Birthday from '../assets/images/birthday-icon.png'
import Ad from '../assets/images/stock-ad.jpg'
import Person2 from '../assets/images/person-2.jpg'

const Rightbar = () => {
    return (
        <div className="rightbar-container">
            <div className="rightbar-wrapper">
                <div className="birthday-container">
                    <img src={ Birthday } alt="" className="birthday-image" />
                    <span className="birthday-text">3 Freinds have a birthday today</span>
                </div>
                <img src={ Ad } alt="" className="rightbar-ad" />
                <h4 className="rightbat-title"></h4>
                <ul className="rightbar-friendlist">
                    <li className="rightbar-friend">
                        <div className="rightbar-profile-image-container">
                            <img src={ Person2 } alt="" className="rightbar-profile-image" />
                            <span className="rightbar-online"></span>
                        </div>
                        <span className="rightbar-username">John Doe</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Rightbar
