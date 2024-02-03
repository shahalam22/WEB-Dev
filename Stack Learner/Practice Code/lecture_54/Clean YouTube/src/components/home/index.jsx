import * as React from 'react';
import PlaylistCardItem from '../playlist-card-item/index';
import { Container, Grid} from '@mui/material';
import { useStoreState } from 'easy-peasy';

const HomePage = () => {
    const playlists = useStoreState((state) => state.playlist.data);
    const playlistArray = Object.values(playlists)
    const favorites = useStoreState((state) => state.favorite.items);
    const favoritesArray = playlistArray.filter((item) => favorites.includes(item.playlistId));
    const recents = useStoreState((state) => state.recent.items);
    const recentsArray = playlistArray.filter((item) => recents.includes(item.playlistId));

    return (
        <div style={{color: 'white', backgroundColor:'#333333'}}>
            <Container maxWidth={'lg'} sx={{paddingTop: 10}}>
                <h3>Favorite Playlists</h3>
                <hr />
                {favoritesArray.length > 0 && (
                    <Grid container alignItems="stretch">
                        {favoritesArray.map((item) => (
                            <Grid key={item.playlistId} item xs={12} md={6} lg={4} mb={2}>
                                <PlaylistCardItem 
                                    playlistId={item.playlistId}
                                    playlistThumbnail={item.playlistThumbnail} 
                                    playlistTitle={item.playlistTitle} 
                                    channelTitle={item.channelTitle}
                                    playlistDescription={item.playlistDescription}
                                />
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>
            <Container maxWidth={'lg'} sx={{paddingTop: 10}}>
                <h3>Recent Playlists</h3>
                <hr />
                {recentsArray.length > 0 && (
                    <Grid container alignItems="stretch">
                        {recentsArray.map((item) => (
                            <Grid key={item.playlistId} item xs={12} md={6} lg={4} mb={2}>
                                <PlaylistCardItem 
                                    playlistId={item.playlistId}
                                    playlistThumbnail={item.playlistThumbnail} 
                                    playlistTitle={item.playlistTitle} 
                                    channelTitle={item.channelTitle}
                                    playlistDescription={item.playlistDescription}
                                />
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>
            <Container maxWidth={'lg'} sx={{py: 10}}>
                <h3>All Playlists</h3>
                <hr />
                {playlistArray.length > 0 && (
                    <Grid container alignItems="stretch">
                        {playlistArray.map((item) => (
                            <Grid key={item.playlistId} item xs={12} md={6} lg={4} mb={2}>
                                <PlaylistCardItem 
                                    playlistId={item.playlistId}
                                    playlistThumbnail={item.playlistThumbnail} 
                                    playlistTitle={item.playlistTitle} 
                                    channelTitle={item.channelTitle}
                                    playlistDescription={item.playlistDescription}
                                />
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>
        </div>
    )
}

export default HomePage;