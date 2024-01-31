import { action, persist } from 'easy-peasy'

const favoriteModel = persist({
    items: [],
    addToFavorites: action((state, playListId) => {
        state.items.push(playListId);
    }),
    removeFromFavorites: action((state, playlistId) => {
        state.items = state.items.filter((id) => id !== playlistId)
    })
})

export default favoriteModel;