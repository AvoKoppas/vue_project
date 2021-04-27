<template>
  <div class="home">
    <input v-model="email" placeholder="enter your email"/>
    <button v-on:click="register()">Register</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data: function () {
    return {
      'email': ''
    }
  },
  methods: {
    'register': function () {
      alert(this.email);
    }
  }
}
</script>
