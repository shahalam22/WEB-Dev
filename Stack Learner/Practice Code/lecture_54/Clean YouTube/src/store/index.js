import { createStore } from 'easy-peasy';
import playlistModel from './playlist-model';
import favoriteModel from './favorite-model';
import recentModel from './recent-model';
import noteModel from './note-model';

const store = createStore({
    playlist: playlistModel,
    favorite: favoriteModel,
    recent: recentModel,
    notes: noteModel,
})

export default store;