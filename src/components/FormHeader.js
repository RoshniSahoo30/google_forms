import React from 'react';
import logo from '../images/logo.png';
import { IconButton } from '@mui/material';
import avatar from '../images/R.png';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import VisibilityIcon from '@mui/icons-material/Visibility';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import LinkIcon from '@mui/icons-material/Link';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import './FormHeader.css'; 

function FormHeader() {
  return (
    <div className='form_header'>
      <div className='form_header_left'> 
        <img src={logo} style={{height: '40px', width: 'auto'}} alt="Logo" />
        <input type='text' placeholder='Untitled form' className='form_name'></input>
      </div>
      
      <div className='form_header_right'>
        <IconButton>
          <ColorLensIcon />
        </IconButton>
        <IconButton>
          <VisibilityIcon />
        </IconButton>
        <IconButton>
          <UndoIcon />
        </IconButton>
        <IconButton>
          <RedoIcon />
        </IconButton>
        <IconButton>
          <LinkIcon />
        </IconButton>
        <IconButton>
          <PersonAddIcon />
        </IconButton>
        <Button variant="contained" className='publish_btn'>
          Publish
        </Button>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
        <Avatar src={avatar} className='user_avatar' />
      </div>
    </div>
  );
}

export default FormHeader;