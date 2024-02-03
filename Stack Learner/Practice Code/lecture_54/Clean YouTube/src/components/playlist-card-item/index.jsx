import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Button, Stack, Box } from '@mui/material';
import { PlayCircleOutline, FavoriteBorder, Favorite, Delete } from '@mui/icons-material';
import { useStoreActions, useStoreState } from 'easy-peasy';


const PlaylistCardItem = ({playlistThumbnail, playlistTitle, channelTitle, playlistId}) => {
  const favorites = useStoreState((state) => state.favorite.items);
  const favoriteActions = useStoreActions((actions) => actions.favorite);
  const playlistActions = useStoreActions((actions) => actions.playlist);
  const recentActions = useStoreActions((actions) => actions.recent);

// handler Function
  const handleDelete = () => {
    playlistActions.deletePlaylist(playlistId);
    recentActions.deletePlaylist(playlistId);
    favoriteActions.removeFromFavorites(playlistId);
  }
//

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', margin: 1, paddingBottom: 2, backgroundColor:'white'}}>
      <CardMedia
        component="img"
        image={playlistThumbnail.url}
        alt={playlistTitle}
      />
      <CardContent>
        <Typography variant="h5" color="black">
          {`${playlistTitle.length > 50 ? playlistTitle.slice(0, 50) + '...' : playlistTitle}`}
        </Typography>
        <Typography variant="body1" color="black">
          {channelTitle}
        </Typography>
      </CardContent>
      <Box sx={{flexGrow: 1}}></Box>
      <CardActions disableSpacing>
        <Button sx={{color:'black'}} to={`/playlistView/${playlistId}`} component={Link}>
            <Stack direction={"row"} spacing={1} alignItems={600}>
                <PlayCircleOutline/>
                <Typography variant="body1" fontWeight={600}>
                    Start Tutorial
                </Typography>
            </Stack>
        </Button>
        <Button sx={{color:'black'}} onClick={() => favoriteActions.addToFavorites(playlistId)}>
          {favorites.includes(playlistId) ? <Favorite color='error'/> : <FavoriteBorder/>}
        </Button>
        <Button sx={{color:'black'}} onClick={handleDelete}>
          <Delete/>
        </Button>
        
      </CardActions>
    </Card>
  );
}

export default PlaylistCardItem;