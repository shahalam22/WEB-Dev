import { action, thunk, persist } from 'easy-peasy';
import getPlaylist from '../api';

const playlistModel = persist({
    items: [],
    id: '',
    title: '',
    description: '',
    thumbnail: '',
    channelId: '',
    channelTitle: '',
    setPlaylistData: action((state, payload) => {
        state = {...payload}
        return state
    }),
    getPlaylistData: thunk(async ({setPlaylistData}, payload) => {
        const {
            playlistId,
            playlistTitle,
            playlistDescription,
            playlistThumbnail,
            channelId,
            channelTitle,
            playListItems,
        } = await getPlaylist(payload);
        setPlaylistData({
            items: playListItems,
            id: playlistId,
            title: playlistTitle,
            description: playlistDescription,
            thumbnail: playlistThumbnail,
            channelId,
            channelTitle,
        });
    })
})

export default playlistModel;