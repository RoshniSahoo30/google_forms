import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import Divider from '@mui/material/Divider';

import FiSettings from '@mui/icons-material/Settings';
import BsQuestionCircle from '@mui/icons-material/Help';
import formImage from '../images/logo.png';
import sheetImage from '../images/sheets_logo.png';
import slideImage from '../images/slides_logo.png';
import docImage from '../images/docs_logo.png';
import driveImage from '../images/drive_logo.png';
import { ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import './Drawer.css'

const useStyles =  makeStyles({
  listItem:{
  marginLeft:'20px', fontSize:'16px', fontWeight:'500', color:'grey'
},
slideImages:{
  height:'20px',
  width:'20px',
  marginRight:'10px'
}
});

function TmpDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div width='250px' role='presentation'>
      <Divider />
      <List>
      <ListItem>
  <ListItemText style={{ fontSize: '48px', marginLeft: '5px' }}>
    <span style={{ color: '#4285F4', fontWeight: '700', fontSize: '22px', fontFamily: "'Product Sans', Arial, sans-serif" }}>G</span>
    <span style={{ color: '#EA4335', fontWeight: '500', fontSize: '22px', fontFamily: "'Product Sans', Arial, sans-serif" }}>o</span>
    <span style={{ color: '#FBBC05', fontWeight: '500', fontSize: '22px', fontFamily: "'Product Sans', Arial, sans-serif" }}>o</span>
    <span style={{ color: '#4285F4', fontWeight: '500', fontSize: '22px', fontFamily: "'Product Sans', Arial, sans-serif" }}>g</span>
    <span style={{ color: '#34A853', fontWeight: '500', fontSize: '22px', fontFamily: "'Product Sans', Arial, sans-serif" }}>l</span>
    <span style={{ color: '#EA4335', fontWeight: '500', fontSize: '22px', fontFamily: "'Product Sans', Arial, sans-serif", marginRight: '5px' }}>e</span>
    <span style={{ color: '#5f6368', fontWeight: '500', fontSize: '22px', fontFamily: "'Product Sans', Arial, sans-serif" }}>Forms</span>
  </ListItemText>
</ListItem>
      </List>
      <Divider />
      <List style={{marginLeft:'08px', marginRight:'8px', marginTop:'1px'}}>
        <ListItem className='list_item'>
      <img src={docImage} alt='doc_image' className={classes.slideImages} />
      <div className={classes.listItem}>Docs</div>
      </ListItem>

      <ListItem className='list_item'>
      <img src={sheetImage} alt='sheet_image' className={classes.slideImages} />
      <div className={classes.listItem}>Sheets</div>
      </ListItem>

      <ListItem className='list_item'>
      <img src={slideImage} alt='slide_image'className={classes.slideImages} />
      <div className={classes.listItem}>Slides</div>
      </ListItem>

      <ListItem className='list_item'>
      <img src={formImage} alt='form_image'className={classes.slideImages} />
      <div className={classes.listItem}>Forms</div>
      </ListItem>

      </List>
      <Divider />
      <List style={{marginLeft:'08px', marginRight:'08px', marginTop:'1px'}}>
        <ListItem className='list_item'>
          <FiSettings style={{color:'grey'}} />
          <div style={{marginLeft:'20px', fontSize:'14px'}}>Settings</div>
          </ListItem>
          <ListItem className='list_item'>
          <BsQuestionCircle style={{color:'grey'}} />
          <div style={{marginLeft:'20px', fontSize:'14px'}}>Help & Feedback</div>
          </ListItem>
      </List>
      <Divider />
      <List style={{marginLeft:'08px', marginRight:'08px', marginTop:'1px'}}>
        <ListItem className='list_item'>
          <img src={driveImage} alt='drive_image' className={classes.slideImages} />
          <div className={classes.listItem}>My Drive</div>
        </ListItem>
      </List>
      <Divider />
      
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton onClick={toggleDrawer('left', true)}>
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="left"
          open={state.left}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default TmpDrawer;
