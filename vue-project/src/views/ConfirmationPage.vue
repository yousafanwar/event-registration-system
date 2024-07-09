<template>
  <div>
    <RouterLink to="/">Back To Events</RouterLink>
    <h1>Congragulations you have successfully registered for the Event</h1>
    <h2>Name: {{ userData.userName }}</h2>
    <p>Email Address: {{ userData.email }}</p>
    <p>Contact Number: {{ userData.phone }}</p>
    <p>Event: {{ eventDetails.eventName }}</p>
    <p>Date: {{ eventDetails.date }}</p>
    <p>Venue: {{ eventDetails.location }}</p>
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
    userData(){
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
        }
      });
      console.log(this.eventDetails);
    },
  },
};
</script>
