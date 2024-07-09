import { createStore } from "vuex";
import axios from 'axios';

const store = createStore({
    state: {
        events: [],
        eventId: 0,
        userData: {}
    },
    mutations: {
        updateEvents(state, events) {
            state.events = events
        },
        setEventId(state, eventId) {
            state.eventId = eventId
        },
        setUserData(state, userData){
            state.userData = userData;
        }
    },
    actions: {
        async fetchData({ commit }) {
            const response = await axios.get('data.json');
            const result = await response.data;
            commit('updateEvents', result);
        },
    },
})

export default store;