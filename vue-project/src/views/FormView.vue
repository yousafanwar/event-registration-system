<template>
<div>
    <h1>Kindly fill out the form to register for the event!!!</h1>
<div class="formDiv mx-auto">
    <form @submit.prevent="formSubmission" class="mx-auto">
         <div class="col-md-6 mx-auto">
            <label for="validationCustom01" class="form-label">User Name</label>
            <input type="text" v-model="userName" class="form-control" id="validationCustom01" required>
            <div class="valid-feedback">
            </div>
        </div>
  <div class="col-md-6 mx-auto">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="col-md-6 mx-auto">
    <label for="exampleInputEmail1" class="form-label">Phone</label>
    <input type="tel" v-model="phone" class="form-control" maxlength="10">
  </div>
  <button type="submit" class="btn mx-auto">Submit</button>
</form>
</div>
</div>
</template>

<script>

export default {
  data(){
    return{
        userName: '',
        email: '',
        phone: ''
    }
  },
  methods:{
    formSubmission(){
        console.log(`The form has been successfully submited for the following details:
        Name: ${this.userName} 
        Email Address: ${this.email}
        Contact Number: ${this.phone} 
        `)
        this.$router.push('/confirmationPage');        
    }
  }  
}
</script>

<style scoped>
h1{
    text-align: center;
}
.formDiv{
    border: solid black 5px;
    border-style: groove;
    border-color: bisque;
    background-color: hsl(34, 38%, 91%);
    border-radius: 10px;
    width: 50%;
}
  .btn{
    display: flex;
    justify-content: center;
    /* background-color: rgb(252, 200, 131); */
    background-color: white;
    margin: 10px;
  }
  .btn:hover{
    background-color: black;
    color: white;
  }
</style>