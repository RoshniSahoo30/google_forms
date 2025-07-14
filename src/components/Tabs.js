import React from 'react'
import { Tabs, Tab } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  tab:{
    fontSize: 10,
    color: '#5f6368',
    textTransform: 'none',
    height: 5,
    fontWeight: 600,
    FontFamily: 'Google Sans, Roboto, Arial, sans-serif',
  }
});

function CenteredTabs() {
    const classes = useStyles();
  return (
    <Paper className={classes.root}>
        <Tabs
        className={classes.tab}
        textColor='primary'
        indicatorColor='primary'
        centered
        >
            <Tab label='Questions' className={classes.tab}>

            </Tab>
            <Tab label='Responses' className={classes.tab}>

            </Tab>
            <Tab label='Settings' className={classes.tab}>

            </Tab>
        </Tabs>
    </Paper>
  )
}

export default CenteredTabs
