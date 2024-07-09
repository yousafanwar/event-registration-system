<template>
  <div>
    <h1>Kindly fill out the form to register for the event!!!</h1>
    <div class="formDiv mx-auto">
      <form @submit.prevent="formSubmission" class="mx-auto">
        <div class="col-md-6 mx-auto">
          <label for="validationCustom01" class="form-label">User Name</label>
          <input
            type="text"
            v-model="userData.userName"
            class="form-control"
            id="validationCustom01"
            placeholder="Enter Your Name..."
            required
          />
          <div class="valid-feedback"></div>
        </div>
        <div class="col-md-6 mx-auto">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            v-model="userData.email"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Enter your email address..."
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="col-md-6 mx-auto">
          <label for="exampleInputEmail1" class="form-label">Phone</label>
          <input
            type="tel"
            v-model="userData.phone"
            class="form-control"
            placeholder="Enter your contact number..."
            maxlength="10"
          />
        </div>
        <button type="submit" class="btn mx-auto">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import store from "../store/index.js";
export default {
  data() {
    return {
        userData: {
            userName: "",
            email: "",
            phone: ""
        }
    };
  },
  methods: {
    formSubmission() {
      store.commit("setUserData", this.userData);
      this.$router.push("/confirmationPage");
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
h1{
    margin: 50px;
}
.formDiv {
  border: solid 5px;
  border-color: hsl(0, 0%, 100%);
  background-color: hsl(0, 0%, 70%);
  border-radius: 10px;
  width: 50%;
  padding: 15px;
}
.btn {
  display: flex;
  justify-content: center;
  background-color: white;
  margin: 10px;
}
.btn:hover {
  background-color: black;
  color: white;
}
label{
    font-size: 1.2rem;
}
</style>