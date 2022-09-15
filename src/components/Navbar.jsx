import { AppBar, Toolbar, styled, Typography, InputBase, Badge  } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import React from 'react'
import WebhookIcon from '@mui/icons-material/Webhook';
import { Box } from '@mui/system';
import NotificationsIcon from '@mui/icons-material/Notifications';

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
    
}));
const Navbar = () => {
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
            
            </Icons>
        </StyledToolbar>
        </AppBar>
    )
}

export default Navbar