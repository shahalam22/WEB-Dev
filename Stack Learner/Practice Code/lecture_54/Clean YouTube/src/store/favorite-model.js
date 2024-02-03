import { action, persist, thunk } from 'easy-peasy'

const favoriteModel = persist({
    items: [],
    addToFavorites: thunk(({removeFromFavorites}, playlistId, {getState}) => {
        if(getState().items.includes(playlistId)){
            removeFromFavorites(playlistId);
            return;
        } else {
            getState().items.push(playlistId);
        }
    }),
    removeFromFavorites: action((state, playlistId) => {
        state.items = state.items.filter((id) => id !== playlistId)
    })
})

export default favoriteModel;
