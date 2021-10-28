import React from 'react'
import '../assets/css/home.css'

import Topnav from '../components/Topnav'
import Sidebar from '../components/Sidebar'
import Rightbar from '../components/Rightbar'
import Feed from '../components/Feed'

const home = () => {
    return (
        <>
            <Topnav />
            <div className="home-container">
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
        </>
    )
}

export default home
