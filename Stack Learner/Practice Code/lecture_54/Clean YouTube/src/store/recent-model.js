import { action, persist } from 'easy-peasy'

const recentModel = persist({
    items: [],
    addToRecent: action((state, playListId) => {
        if(state.items.includes(playListId)){
            return;
        }
        state.items.unshift(playListId);
        state.items = state.items.slice(0, 5);
    }),
    deletePlaylist: action((state, playlistId) => {
        state.items = state.items.filter((id) => id !== playlistId)
    })
})

export default recentModel;