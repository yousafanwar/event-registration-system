<template>
  <div>
    <RouterLink class="btn" to="/">Back To Events</RouterLink>
    <RouterLink class="btn" to="/userEvents">Go to my events</RouterLink>
    <h1>Congragulations you have successfully registered for the Event</h1>
    <div class="userDetailsContainer mx-auto">
      <div class="col-md-6 mx-auto">
        <h2 class="listItem">Name: {{ userData.userName }}</h2>
        <p class="listItem">Email Address: {{ userData.email }}</p>
        <p class="listItem">Contact Number: {{ userData.phone }}</p>
        <p class="listItem">Event: {{ eventDetails.eventName }}</p>
        <p class="listItem">Date: {{ eventDetails.date }}</p>
        <p class="listItem">Venue: {{ eventDetails.location }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import store from "../store/index.js";

export default {
  data() {
    return {
      eventDetails: {},
    };
  },
  mounted() {
    this.getEventDetails();
  },
  computed: {
    userData() {
      return store.state.userData;
    },
    eventId() {
      return store.state.eventId;
    },
    events() {
      return store.state.events;
    },
  },
  methods: {
    getEventDetails() {
      this.events.forEach((e) => {
        if (this.eventId === e.id) {
          this.eventDetails = e;
          store.commit("setUserRegisteredEvents", e);
        }
      });
    },
  },
};
</script>

<style>
h1 {
  text-align: center;
  margin: 50px;
}
.userDetailsContainer {
  border: solid black;
  max-width: 50%;
  background-color: hsl(0, 0%, 70%);
  border-radius: 10px;
  border-color: hsl(0, 0%, 100%);
  margin: 15px 0;
  padding: 10px;
}
p {
  font-size: 1.5rem;
}
.listItem {
  text-align: center;
}
.listItem:hover {
  background-color: hsl(0, 0%, 110%);
  cursor: pointer;
  border-radius: 5px;
}
.btn:hover {
  background-color: black;
  color: white;
}
</style>