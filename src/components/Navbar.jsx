import { AppBar, Toolbar, styled, Typography, InputBase, Badge, Avatar, MenuItem, Menu  } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import React from 'react'
import WebhookIcon from '@mui/icons-material/Webhook';
import { Box } from '@mui/system';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
    display:"none",
    alignItems:"center",
    gap:"20px",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
    
}));
const UserBox = styled(Box)(({ theme }) => ({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
    
}));
const Navbar = () => {
    const [open, setOpen]= useState(false)
    return (
        <AppBar position='sticky'><StyledToolbar>
            <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
                MUI DEV
            </Typography>
            <WebhookIcon sx={{ display: { xs: "block", sm: "none" } }} />
            <Search><InputBase placeholder='search' /></Search>
            <Icons><Badge badgeContent={4} color="error">
                <MailIcon/>
            </Badge>
            <Badge badgeContent={4} color="error">
                <NotificationsIcon/>
            </Badge>
            <Avatar alt="Remy Sharp" src="https://www.pexels.com/photo/pluto-costume-3411134/" onClick={(e)=>setOpen(true)} />
            </Icons>
            <UserBox onClick={(e)=> setOpen(true)}>
            <Avatar alt="Remy Sharp" src="https://www.pexels.com/photo/pluto-costume-3411134/"/>
            </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=> setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
        </AppBar>
    )
}

export default Navbar