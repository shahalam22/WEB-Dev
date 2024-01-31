import { action, persist } from 'easy-peasy'

const recentModel = persist({
    items: [],
    addToRecent: action((state, playListId) => {
        state.items.unshift(playListId);
        state.items = state.items.slice(0, 5);
    })
})

export default recentModel;