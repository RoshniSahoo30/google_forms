import React from 'react'
import './Header.css'
//import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import formImage from '../images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import  Avatar from '@mui/material/Avatar';
import user from '../images/R.png';
import TmpDrawer from './TmpDrawer.js'; 

function Header() {
  return (
    <div className='header'>
        <div className='header_info'>
            <TmpDrawer />
            <img src={formImage} alt='logo' style={{height: '40px',
    width: 'auto'}} className='form_image'/>
    <div className='info'>
        Forms
    </div>
      </div>
      <div className='header_search'>
        <IconButton><SearchIcon /></IconButton>
            <input type='text' name='search' placeholder='Search' />
        
          </div>
        <div className='header_right'>
            <IconButton>
                <AppsIcon />
                </IconButton>
                <IconButton>
            <Avatar src={user}/>
                </IconButton>
            </div>
            </div>
  )
}

export default Header;
