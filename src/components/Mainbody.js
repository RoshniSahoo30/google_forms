import React from 'react'
import IconButton from '@mui/material/IconButton';
import StorageIcon from '@mui/icons-material/Storage';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import './Mainbody.css';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import forms from '../images/form.png';


function Mainbody() {
  return (
    <div className='main_body'>
      <div className='main_body_top'>
        <div className='main_body_top_left' style={{fontSize:'16px', fontWeight:'500', marginRight:'350px'}}>
          Recent forms
        </div>
        <div className='main_body_top_right'>
          <div className='main_body_top_right_center' style={{fontSize:'15px', fontWeight:'400', marginRight:'135px'}}>
            Owned by anyone
            <ArrowDropDownIcon />
            </div>
          <IconButton>
            <StorageIcon style={{fontSize:'20px', marginRight:'15px',color:'black'}} />
            </IconButton>
            <IconButton>
            <SortByAlphaIcon style={{fontSize:'20px', color:'black'}} />
            </IconButton>
          <IconButton>
            <FolderOpenIcon style={{fontSize:'20px', color:'black'}} />
            </IconButton>
          </div>
          </div>
      <div className='main_body_docs'>
        <div className='docs_card'>
        <img src={forms} alt='form_image' className='doc_image' />
          <div className='doc_card_content'>
            <div className='doc_content' style={{fontSize:'12px',color:'grey'}}>
              <div className='content_left'>
                </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Mainbody
