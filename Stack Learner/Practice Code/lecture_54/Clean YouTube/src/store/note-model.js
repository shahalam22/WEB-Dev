import { action, persist, thunk } from 'easy-peasy'

const noteModel = persist({
    items: {},
    updateNote: action((state, payload) => {
        state.items[payload.videoId] = payload.note;
    })
})

export default noteModel;
