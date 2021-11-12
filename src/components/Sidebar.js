import React from 'react'
import '../assets/css/sidebar.css'
import Online from './Online'
import CloseFriends from './CloseFriends'
import {Users} from '../components/UserData'

import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpIcon from '@mui/icons-material/Help';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

import Person2 from '../assets/images/person-2.jpg'

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar-wrapper">
                <ul className="sidebar-list">
                    <li className="sidebar-list-item">
                        <RssFeedIcon className="sidebar-icon" />
                        <span className="sidebar-list-item-text">
                            Feed
                        </span>
                    </li>
                    <li className="sidebar-list-item">
                        <ChatIcon className="sidebar-icon" />
                        <span className="sidebar-list-item-text">
                            Chats
                        </span>
                    </li>
                    <li className="sidebar-list-item">
                        <VideoLibraryIcon className="sidebar-icon" />
                        <span className="sidebar-list-item-text">
                            Videos
                        </span>
                    </li>
                    <li className="sidebar-list-item">
                        <GroupIcon className="sidebar-icon" />
                        <span className="sidebar-list-item-text">
                            Groups
                        </span>
                    </li>
                    <li className="sidebar-list-item">
                        <BookmarkIcon className="sidebar-icon" />
                        <span className="sidebar-list-item-text">
                            Bookmarks
                        </span>
                    </li>
                    <li className="sidebar-list-item">
                        <HelpIcon className="sidebar-icon" />
                        <span className="sidebar-list-item-text">
                            Questions
                        </span>
                    </li>
                    <li className="sidebar-list-item">
                        <WorkIcon className="sidebar-icon" />
                        <span className="sidebar-list-item-text">
                            Jobs
                        </span>
                    </li>
                    <li className="sidebar-list-item">
                        <EventIcon className="sidebar-icon" />
                        <span className="sidebar-list-item-text">
                            Events
                        </span>
                    </li>
                    <li className="sidebar-list-item">
                        <SchoolIcon className="sidebar-icon" />
                        <span className="sidebar-list-item-text">
                            Courses
                        </span>
                    </li>
                </ul>
                <button className="sidebar-button">
                    Show More
                </button>
                <hr className="sidebar-hr"/>
                {/* Friend List */}
                <ul className="sidebar-friend-list">
                    {Users.map( u=> (
                        <CloseFriends user={u} key={u.id} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
