<template>
  <div>
    <RouterLink to="/">Back To Events</RouterLink>
    <h1>Congragulations you have successfully registered for the Event</h1>
    <h2>Name: {{ userName }}</h2>
    <p>Email Address: {{ email }}</p>
    <p>Contact Number: {{ phone }}</p>
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
    userName() {
      return store.state.userName;
    },
    email() {
      return store.state.email;
    },
    phone() {
      return store.state.phone;
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
