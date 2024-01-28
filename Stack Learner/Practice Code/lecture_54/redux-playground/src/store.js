import { action, createStore } from 'easy-peasy';

const counterModel = {
    value: 0,
    increment: action((state, payload) => {
        state.value += payload;
    }),
    decrement: action((state, payload) => {
        state.value -= payload;
    })
}

const historyModel = {
    items: [],
    addHistory: action((state, payload) => {
        state.items.push({
            id: generateID(),
            action: payload.action,
            count: payload.count,
            time: new Date().toLocaleTimeString()
        });
    }),
    clearHistory: action((state) => (state.items = [])),
}

let id = 1;
function generateID(){
  return id++;
}

const store = createStore({
    count: counterModel,
    history: historyModel,
})

export default store;