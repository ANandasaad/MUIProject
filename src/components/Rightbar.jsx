import { Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import React from 'react'

const Rightbar = () => {
    return (
        <Box flex={2} padding={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed" width={300}>
                <Typography variant='h6' fontWeight={200} margin={1}>Online Friends</Typography>
                <AvatarGroup max={4} >
                    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/821406/pexels-photo-821406.jpeg?auto=compress&cs=tinysrgb&w=600" />
                </AvatarGroup>
                <Typography variant='h6' fontWeight={200} mt={2} mb={2}>Latest Photos</Typography>
                <ImageList cols={3} rowHeight={200} gap={8}>
                    <ImageListItem>
                        <img
                            src='https://images.pexels.com/photos/2050994/pexels-photo-2050994.jpeg?auto=compress&cs=tinysrgb&w=600'
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src='https://images.pexels.com/photos/206454/pexels-photo-206454.jpeg?auto=compress&cs=tinysrgb&w=600'
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src='https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=600'
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src='https://images.pexels.com/photos/1927595/pexels-photo-1927595.jpeg?auto=compress&cs=tinysrgb&w=600'
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src='https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg?auto=compress&cs=tinysrgb&w=600'
                            alt=""
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src='https://images.pexels.com/photos/13135852/pexels-photo-13135852.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt=""
                        />
                    </ImageListItem>
                </ImageList>

                <Typography variant='h6' fontWeight={200} mt={2} mb={2}>Latest Conversations</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/13135852/pexels-photo-13135852.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/2050994/pexels-photo-2050994.jpeg?auto=compress&cs=tinysrgb&w=600" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>

            </Box>
        </Box>
    )
}

export default Rightbar