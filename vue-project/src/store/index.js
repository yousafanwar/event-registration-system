import { createStore } from "vuex";
import axios from 'axios';

const store = createStore({
    state: {
        events: [],
        eventId: 0,
        userName: '',
        email: '',
        phone: ''
    },
    mutations: {
        updateEvents(state, events) {
            state.events = events
        },
        setUserName(state, name) {
            state.userName = name;
        },
        setEmail(state, email) {
            state.email = email;
        },
        setPhone(state, phone) {
            state.phone = phone;
        },
        setEventId(state, eventId) {
            state.eventId = eventId
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