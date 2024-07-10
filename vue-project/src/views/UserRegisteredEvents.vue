<template>
  <div>
    <RouterLink class="btn" to="/">Back To Events</RouterLink>
    <h1>Hello {{ userData.userName }}!</h1>
    <h2>You are registered to the following events</h2>
    <ul>
      <li v-for="event in events" :key="event.id" class="eventContainer">
        <div class="centerDiv">
          <p>Email Address: {{ userData.email }}</p>
          <p>Contact Number: {{ userData.phone }}</p>
          <p>{{ event.eventName }}</p>
          <p>Date: {{ event.date }}</p>
          <p>Location: {{ event.location }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import store from "../store/index.js";
export default {
  computed: {
    events() {
      return store.state.userRegisteredEvents;
    },
    userData() {
      return store.state.userData;
    },
  },
};
</script>

<style>
.btn:hover {
  background-color: black;
  color: white;
}
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

li:hover {
  transform: translateY(-5px);
  transition: ease 0.5s;
  cursor: pointer;
  background: black;
  color: white;
}
.centerDiv {
  text-align: center;
}
h2 {
  text-align: center;
  margin-bottom: 20px;
}
</style>