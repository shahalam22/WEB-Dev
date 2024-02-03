import * as React from 'react';
import { Container, Stack, Card, CardMedia, CardContent, List, ListItem, ListItemButton, ListItemAvatar, Avatar, ListItemText, Button} from '@mui/material';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const PlaylistViewPage = ({playlists}) => {
    const { playlistId } = useParams();
    const current = playlists[playlistId];
    
    if(!current) return (<NotFound />);
    
    const [desc, setDesc] = useState(current?.playlistDescription.length>=280 ? current?.playlistDescription.slice(0, 280)+' ...' : current?.playlistDescription)
    const [viewMore, setViewMore] = useState(false)
    const [btnDefault, setBtnDefault] = useState(current?.playlistDescription.length>=280 ? true : false)

// handler function
    const handleViewMore = () => {
        setViewMore(!viewMore);
        if(viewMore){
            setDesc(current?.playlistDescription)
        }else{
            setDesc(current?.playlistDescription.slice(0, 280)+' ...')
        }
    }
//

    return (
        <Container maxWidth={'lg'} sx={{py: 10, backgroundColor: '#333333', color: 'white'}}>
            <Stack direction={'row'} spacing={2}>
                <Container>
                    <Card sx={{maxWidth:'100%', my: 3}}>
                        <CardMedia image={current?.playlistThumbnail.url}/>
                        <img width={'100%'} src={current?.playlistThumbnail.url} alt="" />
                        <CardContent>
                            <Typography variant='h5' align='left'>
                                <b>{current?.playlistTitle}</b>
                            </Typography>
                            <Typography variant='body1'>
                                <b>Description: </b><br />
                                {desc}
                            </Typography>
                            {btnDefault && (
                                viewMore ? <Button variant='contained' color='error' size='small' sx={{marginTop: '10px'}} onClick={handleViewMore}>View More</Button> : <Button variant='contained' color='error' size='small' sx={{marginTop: '10px'}} onClick={handleViewMore}>View less</Button>
                            )}
                        </CardContent>
                    </Card>
                </Container>
                <Container>
                    <Stack direction={'row'} justifyContent={'space-between'} my={2}>
                        <Typography variant='h5' align='center'>
                            <b>Videos</b>
                        </Typography>
                        <Button variant='contained' color='error' to={`/player/${playlistId}/${current?.playListItems[0].contentDetails.videoId}`} component={Link}>
                            Play Videos
                        </Button>
                    </Stack>
                    <List sx={{maxHeight: '620px', maxWidth:'100%', overflow: 'auto', my: 3}}>
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
            </Stack>
        </Container>
    )
}

export default PlaylistViewPage;