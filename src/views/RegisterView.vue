<template>
  <div class="">
    <div class="row min-vh-100 justify-content-center align-items-center">
      <div class="col-lg-4">
        <h4 class="text-center">Register Form</h4>
        <form action="" @submit.prevent="register" ref="RegForm">
          <div class="form-floating mb-3">
            <input type="name" class="form-control" name="name" placeholder="name@example.com">
            <label for="floatingInput">Username</label>
          </div>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" name="email" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" name="password" placeholder="Password">
            <label for="floatingPassword">Password</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" name="password_confirmation" placeholder="Password">
            <label for="floatingPassword">Confirm Password</label>
          </div>
          <button type="submit" class="btn btn-primary">Register</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import router from "@/router";

export default {
  computed: {
    ...mapGetters([
      'getUrl'
    ])
  },
  methods: {
    register() {
      let formData = new FormData(this.$refs.RegForm)
      fetch(this.getUrl("/register"), {
        method: "POST",
        body:formData
      })
          .then(res => res.json())
          .then(json => {
            if (json.success === true)
            {
              this.$router.push('/login')
            }
            else {
              console.log(json)
            }
          })
    }
  },
}
</script>

<style scoped>

</style>