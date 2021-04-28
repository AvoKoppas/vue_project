<template>
  <div class="list">
    <h1>Kõik kontod</h1>
    <button v-on:click="getAllBalance()">Kõik kontod</button>
    <h1>Nimekiri kontodest</h1>
    <table>
      <tr>
        <th>Account Number</th>
        <th>Balance</th>
      </tr>
      <tr v-for="account in allBalanceAnswer">
        <td>{{ account.accountNr }}</td>
        <td>{{ account.balance }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      'allBalanceAnswer': '',
      'accountNumber':''
    }
  },
  methods: {
    'getAllBalance': function () {
      this.$http.get('http://localhost:8080/getAllBalance/')
          .then(response => {
            console.log(response);
            this.allBalanceAnswer = response.data
          })
    }
  }
}
</script>

<style scoped>

</style>