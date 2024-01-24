import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

const PlaylistForm = ({open, handleClose, getPlaylistId}) => {

    const [state, setState] = useState('');

    const handleSubmit = (e) => {
        // TODO: handle url and id differently later
        if(!state){
            alert('Invalid State');
        } else {
            getPlaylistId(state);
            setState('');
            handleClose();
        }
    }

  return (
    <Dialog
        open={open}
        onClose={handleClose}
        // PaperProps={{
        //   component: 'form',
        //   onSubmit: (event) => {
        //     event.preventDefault();
        //     const formData = new FormData(event.currentTarget);
        //     const formJson = Object.fromEntries(formData.entries());
        //     const email = formJson.email;
        //     console.log(email);
        //     handleClose();
        //   },
        // }}
      >
        <DialogTitle>Add Playlist</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new playlist please insert the playlist id or playlist link.
            Please make sure the link is correct. Otherwise we won't able to fetch the playlist information.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            label="Playlist Id or Link"
            fullWidth
            variant="standard"
            onChange={(e) => setState(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add PlayList</Button>
        </DialogActions>
    </Dialog>
  );
}

export default PlaylistForm;