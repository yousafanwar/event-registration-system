import { createStore } from "vuex";
import axios from 'axios';

const store = createStore({
    state:{
        events: []
    },
    mutations:{
        updateEvents(state, events){
            state.events = events
        }
    },
    actions:{
        async fetchData({commit}){
            const response = await axios.get('data.json');
            const result = await response.data;
            commit('updateEvents', result);
            },
      
    },
    // getters:{
    //     getEvents(state){
    //         return state.events;
    //     }
    // }
})

export default store;