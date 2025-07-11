import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'

function tmpDrawer() {
    const [state, setState] = React.useState({
        left: false,
    });
  return (
    <div>
      <IconButton>
        <MenuIcon />
        </IconButton>
        <Drawer>

        </Drawer>
    </div>
  )
}

export default tmpDrawer
