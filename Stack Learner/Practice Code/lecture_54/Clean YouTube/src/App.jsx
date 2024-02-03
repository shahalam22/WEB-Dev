import * as React from 'react';
import Navbar from './components/navbar/index';
import { CssBaseline} from '@mui/material';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useStoreState } from 'easy-peasy';
import HomePage from './components/home';
import PlaylistViewPage from './components/playlist-view-page';
import PlayerPage from './components/player-page';
import NotFound from './components/not-found';


const App = () => {
    const playlists = useStoreState((state) => state.playlist.data);

    return (
        <BrowserRouter>
            <CssBaseline/>
            <Navbar/>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/playlistView/:playlistId' element={<PlaylistViewPage playlists={playlists}/>}/>
                <Route path='/player/:playlistId/:videoId' element={<PlayerPage playlists={playlists}/>}/>
                <Route path='*' element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;