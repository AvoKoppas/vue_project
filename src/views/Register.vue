<template>
  <div class="home">
    <input v-model="email" placeholder="enter your email"/>
    <button v-on:click="register()">Register</button>
    <table>
      <tr v-for="email in emails">
        <td>{{ email }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data: function () {
    return {
      'email': '',
      'emails': [],
    }
  },
  methods: {
    'register': function () {
      this.$http.get('http://localhost:8080/getBalance/')
          .then(response => {
            console.log(response);
            this.balance = response.data
          })
          .catch(response => {
            alert('Juhtus viga')
          })
      this.emails.push(this.email);
    }
  }
}
</script>
