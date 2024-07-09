<template>
  <div>
    <ul>
      <li v-for="event in events" :key="event.id" class="eventContainer">
        <h1>{{ event.eventName }}</h1>
        <p>Date: {{ event.date }}</p>
        <p>Location: {{ event.location }}</p>
        <RouterLink class="btn" to="./form" @click="getEventId(event.id)"
          >Register</RouterLink
        >
      </li>
    </ul>
  </div>
</template>


<script>
import axios from "axios";
import { RouterLink } from "vue-router";
import store from "../store/index.js";
export default {
  mounted() {
    this.fetchEventData();
  },
  computed: {
    events() {
      return store.state.events;
    },
  },
  methods: {
    async fetchEventData() {
      const response = await axios.get("data.json");
      store.commit("updateEvents", response.data);
    },
    getEventId(eventId) {
      store.commit("setEventId", eventId);
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
.eventContainer {
  border: solid hsl(30, 15%, 87%);
  border-radius: 10px;
  background-color: hsl(30, 3%, 87%);
  margin: 10px;
  padding: 10px;
}
.btn {
  background-color: white;
}
.btn:hover {
  background-color: black;
  color: white;
}
</style>