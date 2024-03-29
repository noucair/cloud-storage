import React from 'react'
import '../../styles/Header.css'
import cloudLogo from '../../media/téléchargement (1).png'


import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';

const index = ({ userPhoto }) => {
    return (
        <div className='header'>
            <div className="header__logo">
                <img src={cloudLogo} alt="cloud storage" />
                <span>cloud storage</span>
            </div>
            <div className="header__searchContainer">
                <div className="header__searchBar">
                    <SearchIcon />
                    <input type="text" placeholder='Search in cloud storage' />
                    <ExpandMoreIcon />
                </div>
            </div>
            <div className="header__icons">
                <span>
                    <HelpOutlineIcon />
                    <SettingsIcon />
                </span>
                <AppsIcon />
                <img src={userPhoto} alt="User Photo"/>
            </div>
        </div>
    )
}

export default index
 