import React from 'react'
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import './Template.css';

import blank from '../images/blank.png';
import party from '../images/party.png';
import contact from '../images/contact.png';

const Template = () => {
  return (
    <div className='template_section'>
        <div className='template_top'>
            <div className='template_top_left'>
                <span style={{fontSize:'16px', color:'#202124'}}>Start a new form</span>
            </div>
            <div className='template_top_right'>
                <div className='gallery_button'>
                    Template gallery 
                    <UnfoldMoreIcon />
                </div>
                <IconButton>
                    <MoreVertIcon fontSize='small'/>
                </IconButton>
            </div>
        </div>
        <div className='template_body'>
            <div className='card'>
                <img src={blank} alt='blank' className='card_image'/>
                <p className='card_title'>Blank</p>
                </div>
                <div className='card'>
                <img src={party} alt='blank' className='card_image'/>
                <p className='card_title'>Party Invite</p>
                </div>
                <div className='card'>
                <img src={contact} alt='blank' className='card_image'/>
                <p className='card_title'>Contact Information</p>
                </div>
            </div>
        </div>
  )
}

export default Template
