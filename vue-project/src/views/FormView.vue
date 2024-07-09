<template>
    <form>
         <div class="col-md-4">
            <label for="validationCustom01" class="form-label">User Name</label>
            <input type="text" v-model="userName" class="form-control" id="validationCustom01" required>
            <div class="valid-feedback">
            </div>
        </div>
  <div class="col-md-4">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="col-md-4">
    <label for="exampleInputEmail1" class="form-label">Phone</label>
    <input type="tel" v-model="phone" class="form-control" maxlength="10">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
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

  }  
}
</script>
