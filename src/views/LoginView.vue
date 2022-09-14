<template>
  <div class="">
    <div class="row min-vh-100 justify-content-center align-items-center">
      <div class="col-lg-4">
        <h4 class="text-center">Login Form</h4>
        <form action="" @submit.prevent="login" ref="LoginForm">
          <div class="form-floating mb-3">
            <input type="email" class="form-control" name="email" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" name="password" placeholder="Password">
            <label for="floatingPassword">Password</label>
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";
import axios from "axios";

export default {
  computed: {
    ...mapState([
      'auth',
      'token'
    ]),
    ...mapGetters([
      'getUrl'
    ])
  },
  methods: {
    login() {
      let formData = new FormData(this.$refs.LoginForm)
      fetch(this.getUrl("/login"), {
        method: "POST",
        body: formData
      })
          .then(res => res.json())
          .then(json => {
            if (json.success === true) {
              localStorage.setItem('auth',JSON.stringify(json.auth))
              localStorage.setItem('token',json.token)
              this.$store.dispatch('setAuth', json.auth)
              this.$store.dispatch('setToken', json.token)
              axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
              this.$router.push('/dashboard');
            } else {
              console.log(json)
            }
          })
    }
  },
}
</script>

<style scoped>

</style>