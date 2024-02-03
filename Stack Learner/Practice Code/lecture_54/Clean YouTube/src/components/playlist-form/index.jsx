import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import {useStoreActions} from 'easy-peasy'

const PlaylistForm = ({open, handleClose}) => {
    const [state, setState] = useState('');
    const playlistActions = useStoreActions((actions) => actions.playlist);
    const recentActions = useStoreActions((actions) => actions.recent);

// handler function
    const handleSubmit = (e) => {
        if(!state){
            alert('Invalid State');
        } else {
            if(state.indexOf('playlist?list=') !== -1){
              playlistActions.getPlaylist(state.split('playlist?list=')[1].split('&')[0]);
              recentActions.addToRecent(state.split('playlist?list=')[1].split('&')[0]);
            }else{
              playlistActions.getPlaylist(state);
              recentActions.addToRecent(state);
            }
            setState('');
            handleClose();
        }
    }
//

  return (
    <Dialog
        open={open}
        onClose={handleClose}
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
          <Button  onClick={handleClose}>Cancel</Button>
          <Button  onClick={handleSubmit}>Add PlayList</Button>
        </DialogActions>
    </Dialog>
  );
}

export default PlaylistForm;