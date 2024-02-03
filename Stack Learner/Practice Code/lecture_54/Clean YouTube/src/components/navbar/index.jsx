import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Button, Container, Link } from '@mui/material';
import { useState } from 'react';
import PlaylistForm from '../playlist-form/index';


const Navbar = () => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const getPlaylistId = (id) => {
  //   getPlaylistById(id);
  // }

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" color="default" sx={{py: 2, backgroundColor:'black'}}>
        <Container maxWidth={'lg'}>
          <Toolbar>
            <Stack sx={{flexGrow: 1}}>
              <Link to='/' component={RouterLink} sx={{textDecoration:'none'}}>
                <Typography variant="h4" color={'white'}>
                  <b>CleanTube</b>
                </Typography>
              </Link>
              <Link to='/' component={RouterLink} sx={{textDecoration:'none'}}>
                <Typography variant="body1" color={'white'}>
                  Boost your Concentration
                </Typography>
              </Link>
            </Stack>
            <Button variant='contained' color='error' onClick={handleClickOpen}>Add Playlist</Button>
            <PlaylistForm open={open} handleClose={handleClose}/>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Navbar;