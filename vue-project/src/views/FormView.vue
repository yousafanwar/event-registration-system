<template>
  <div>
    <h1>Kindly fill out the form to register for the event!!!</h1>
    <div class="formDiv mx-auto">
      <form @submit.prevent="dataValidation" class="needs-validation mx-auto">

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
            required
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="col-md-6 mx-auto">
          <label for="exampleInputPhone1" class="form-label">Phone</label>
          <input
            type="tel"
            v-model="userData.phone"
            class="form-control"
            placeholder="Enter your contact number..."
            maxlength="10"
            required
          />
        </div>
            <div v-if="!isValid" class="alert alert-danger">
            <p v-if="!isValidEmail">Enter a valid email address</p>
            <p v-if="!isValidPhone">Phone number must contain only digits</p>
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
        phone: "",
      },
      isValid: true,
      isValidEmail: true,
      isValidPhone: true
    };
  },
  methods: {
    dataValidation(){
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const phonePattern = /^[0-9]+$/;
        this.isValidEmail = emailPattern.test(this.userData.email);
        this.isValidPhone = phonePattern.test(this.userData.phone);
        if(!this.isValidEmail || !this.isValidPhone){
            this.isValid = false;
        }else{
            this.formSubmission();
        }
    },
    formSubmission() {
      store.commit("setUserData", this.userData);
      this.$router.push("/confirmationPage");
    }
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
h1 {
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
label {
  font-size: 1.2rem;
}
</style>    