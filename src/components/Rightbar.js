import React from 'react'
import '../assets/css/rightbar.css'
import {Users} from '../components/UserData'
import Online from './Online'

import Birthday from '../assets/images/birthday-icon.png'
import Ad from '../assets/images/stock-ad.jpg'


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
                   {Users.map(u =>(
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Rightbar
