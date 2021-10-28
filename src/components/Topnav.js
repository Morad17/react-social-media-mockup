import React from 'react'
import '../assets/css/topnav.css'

import SearchIcon from '@mui/icons-material/Search'
import Person from '@mui/icons-material/Person'
import Chat from '@mui/icons-material/Chat'
import NotificationsIcon from '@mui/icons-material/Notifications';
import Person1 from '../assets/images/person-1.jpg'

const Topnav = () => {
    return (
        <div className="topnav-container">
            <div className="topnav-left">
                <span className="logo">MoradBook</span>
            </div>
            <div className="topnav-center">
                <div className="searchbar">
                    <SearchIcon className="search-icon"/>
                    <input placeholder="Search for Post" className="search-input" />
                </div>
            </div>
            <div className="topnav-right">
                <div className="topnav-links">
                    <span className="topnav-link">
                        Homepage
                    </span>
                    <span className="topnav-link">
                        Timeline
                    </span>
                </div>
                <div className="topnav-icons">
                    <div className="topnav-icon-item">
                        <Person />
                        <span className="topnav-icon-badge">1</span>
                    </div>
                    <div className="topnav-icon-item">
                        <Chat />
                        <span className="topnav-icon-badge">2</span>
                    </div>
                    <div className="topnav-icon-item">
                        <NotificationsIcon />
                        <span className="topnav-icon-badge">1</span>
                    </div>
                    <img src={ Person1 } alt="" className="topnav-image"/>
                </div>
            </div>
        </div>
    )
}

export default Topnav
