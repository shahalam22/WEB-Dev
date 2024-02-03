import * as React from 'react';
import YouTube from 'react-youtube';
import { Container, Stack, List, ListItem, ListItemButton, ListItemAvatar, Avatar, ListItemText, Button, TextField} from '@mui/material';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const PlayerPage = ({playlists}) => {
    const notesAction = useStoreActions((actions) => actions.notes);
    const notes = useStoreState((state) => state.notes.items);
    const { playlistId, videoId } = useParams();
    const current = playlists[playlistId];
    const [state, setState] = useState(notes[videoId] || '');

    if(!current) return (<NotFound />);

// setting the previous and next video id
    let prevVideoId = current.playListItems[0].contentDetails.videoId;
    let nextVideoId = current.playListItems[current.playListItems.length - 1].contentDetails.videoId;

    const index = current.playListItems.findIndex((item) => item.contentDetails.videoId === videoId);
    if(index === 0){
        if(current.playListItems.length > 1) nextVideoId = current.playListItems[index + 1].contentDetails.videoId;
    }else if(index === current.playListItems.length - 1){
        prevVideoId = current.playListItems[index - 1].contentDetails.videoId;
    }else{
        prevVideoId = current.playListItems[index - 1].contentDetails.videoId;
        nextVideoId = current.playListItems[index + 1].contentDetails.videoId;
    }
//

// handler functions
    const handleChange = (e) => {
        setState(e.target.value);
    }

    const handleSave = () => {
        notesAction.updateNote({videoId, note: state});
    }
//

    return (
        <Container maxWidth={'lg'} sx={{py: 10, backgroundColor:'#333333', color:'white'}}>
            <Container maxWidth={'lg'} sx={{alignContent: 'center'}}>
                <YouTube videoId={videoId} opts={{height: '380px', width: '100%'}}/>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Button variant='contained' color='error' to={`/player/${playlistId}/${prevVideoId}`} component={Link}>Previous</Button>
                    <Button variant='contained' color='error' to={`/player/${playlistId}/${nextVideoId}`} component={Link}>Next</Button>
                </Stack>
            </Container>
            <Container spacing={2} sx={{my: 5}}>
                <Stack spacing={2} maxWidth={'100%'} justifyContent={'center'}>
                    <h2>Make Note</h2>
                    <TextField id="note" margin='center' fullWidth multiline rows={6} defaultValue={state} inputProps={{style: {color: 'white'}}} onChange={handleChange}/>
                    <Button variant='contained' color='error' onClick={() => handleSave()}>Save</Button>
                </Stack>
                <Container>
                    <Typography variant='h5' align='center' sx={{marginTop: '5%', marginBottom: '3%'}}>
                        <b>Videos</b>
                    </Typography>
                    <List sx={{maxHeight: '400px', maxWidth:'100%', overflow: 'auto'}}>
                        {current?.playListItems.map((item) => (
                            <ListItem key={item.contentDetails.videoId}>
                                <ListItemButton to={`/player/${playlistId}/${item.contentDetails.videoId}`}>
                                    <ListItemAvatar>
                                        <Avatar src={item.thumbnail.url}/>
                                    </ListItemAvatar>
                                    <ListItemText primary={`Line item ${item.title}`}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Container>
            </Container>
        </Container>
    )
}

export default PlayerPage;