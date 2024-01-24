import * as React from 'react';
// import CssBaseLine from '@mui/material/CssBaseline';
import Navbar from './components/navbar/index';
import usePlaylists from './hooks/usePlaylists';
import PlaylistCardItem from './components/playlist-card-item';
import { CssBaseline, Container, Stack } from '@mui/material';



const App = () => {

    // useEffect(() => {
    //     getPlayList('PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl').then((res) => 
    //         console.log(res)
    //     );
    // }, [])

    // console.log(import.meta.env);

    // const {getPlaylistById, playlists} = usePlaylists();

    // useEffect(() => {
    //     getPlaylistById('PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl');
    // }, [])

    // console.log(playlists);

    // console.log("adnan");

    const { playlists, error, getPlaylistById } = usePlaylists();

    const playlistArray = Object.values(playlists)

    return (
        <>
            <CssBaseline/>
            <Container maxWidth={'lg'} sx={{marginTop: 16}}>
                <Navbar getPlaylistById={getPlaylistById}/>
                {playlistArray.length > 0 && (
                    <Stack direction={'row'} spacing={2}>
                            {playlistArray.map((item) => (
                            <PlaylistCardItem 
                                key={item.id} 
                                playlistThumbnail={item.playlistThumbnail} 
                                playlistTitle={item.playlistTitle} 
                                channelTitle={item.channelTitle}
                            />))}
                    </Stack>
                )}
            </Container>
        </>
    )
}

export default App;