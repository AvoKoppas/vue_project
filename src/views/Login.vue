<template>
  <div class="login">
    <h1>Login</h1>
    <input v-model="user" placeholder="user"/>
    <input v-model="password1" placeholder="password"/>
    <button v-on:click="login()">logi sisse</button>
    <h1>Loo konto</h1>
    <input v-model="username" placeholder="user"/>
    <input v-model="password2" placeholder="password"/>
    <button v-on:click="create()">loo konto</button>
    {{ createAnswer }}
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      'loginAnswer': '',
      'createAnswer': '',
      'user': '',
      'username': '',
      'password1': '',
      'password2': '',
    }
  },
  methods: {
    'login': function () {
      this.$http.post('http://localhost:8080/login/'
          + this.user + '/' + this.password1)
          .then(response => {
            let token = response.data
            localStorage.setItem('user-token', token)
            this.$http.defaults.headers.common['Authorization'] = "Bearer " + token
            console.log(response);
            this.loginAnswer = response.data
          })
          .catch(response => {
            alert('juhtus sisselogimise viga')
          })
    },

    'create': function () {
      this.$http.post('http://localhost:8080/registerNewUser/'
          + this.username + '/' + this.password2)
          .then(response => {
            console.log(response);
            this.createAnswer = response.data;
          })
          .catch(response => {
            alert('juhtus konto  loomisel viga')
          })
    }
  }
}

</script>

<style scoped>

</style>