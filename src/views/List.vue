<template>
  <div class="list">
    <h1>Kõik kontod</h1>
    <button v-on:click="getAllBalance()">Kõik kontod</button>
    <h1 align="left">Nimekiri kontodest</h1>
    <table>
      <tr>
        <th>Account Number</th>
        <th align="left">Balance</th>
      </tr>
      <tr v-for="account in allBalanceAnswer">
        <td align="left">{{ account.accountNr }}</td>
        <td align="left">{{ account.balance + "€" }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      'allBalanceAnswer': '',
      'accountNumber': ''
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