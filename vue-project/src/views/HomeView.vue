<template>
<div>
  <!-- <h1> {{abc}} </h1> 
  <button @click="fetchData">Push me to get data</button> -->
  <ul>
    <li v-for="event in events" :key="event.id" class="eventContainer">
      <h1>{{event.name}}</h1>
        <p>{{event.date}}</p>
        <p>{{event.location}}</p>
        <RouterLink class="btn" to="./form">Register</RouterLink>
    </li>
  </ul>
</div>
</template>


<script>
    import axios from 'axios';
    import { RouterLink } from 'vue-router';
  export default{

    data(){
      return{
        abc: "data",
        events: [
          {id: 1, name: 'Party', date: new Date().getDate(), location: 'Lahore'},
          {id: 2, name: 'Office Meeting', date: new Date().getDate(), location: 'Lahore'},
          {id: 3, name: 'Just chill', date: new Date().getDate(), location: 'Muree'},
          ]
      }
    },
    mounted(){
      // this.fetchData;
      },
    methods:{
      async fetchData(){
        // api key: MKSTDUMZDEQJUDF6X5IP
  const response = await axios.get('https://www.eventbriteapi.com/v3/events/search/', {
          headers: {
            Authorization: `Bearer MKSTDUMZDEQJUDF6X5IP`
          },
   params: {
            q: 'conference', // Example query parameter
            'location.address': 'New York', // Correctly use quotes for keys with special characters like '.'
            sort_by: 'date',
            page: 1,
            page_size: 10 // Example pagination
          }
        });
          // const result = await response;
          // console.log(result);
      },
    }
  }
</script>

<style scoped>
  li{
    list-style: none;
  }
  .eventContainer{
    border: solid hsl(30, 15%, 87%);;
    border-radius: 10px;
    background-color: hsl(30, 3%, 87%);
    margin: 10px;
    padding: 10px;
  }
  .btn{
    background-color: white;
  }
  .btn:hover{
    background-color: black;
    color: white;
  }
</style>