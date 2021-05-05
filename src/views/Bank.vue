<template>
  <div class="bank">
    <body style="background-color: ivory">
    <h1 style="background-color: aquamarine;">Loo konto</h1>
    <input v-model="accountNumber" placeholder="account number"/>
    <input v-model="initialBalance" placeholder=" initial balance"/>
    <button v-on:click="createAccount()">Create</button>
    <ul>
      {{ accountAnswer }}
    </ul>
    <h1 style="background-color: chartreuse;">Kontoseis</h1>
    <input v-model="balance" placeholder="account number"/>
    <button v-on:click="getBalance()">Balance</button>
    <ul>
      {{ balanceAnswer }}
    </ul>
    <h1 style="background-color: cyan">Sissemakse</h1>
    <input v-model="accountNumber" placeholder="account number"/>
    <input v-model="deposit" placeholder="deposit"/>
    <button v-on:click="makeDeposit()">Deposit</button>
    <ul>
      {{ depositAnswer }}
    </ul>
    <h1 style="background-color: darkkhaki">Väljamakse</h1>
    <input v-model="accountNumber" placeholder="account number"/>
    <input v-model="withdraw" placeholder="withdraw"/>
    <button v-on:click="makeWithdraw()">Withdraw</button>
    {{ withdrawAnswer }}
    <h1 style="background-color: lightblue">Ülekanne</h1>
    <input v-model="accountNumber" placeholder="your account number"/>
    <input v-model="accountNumberTo" placeholder="target account number"/>
    <input v-model="transferAmount" placeholder="transfer amount"/>
    <button v-on:click="makeTransfer()">Transfer</button>
    {{ transferAnswer }}
    <h1 style="background-color: crimson">Kustuta kõik</h1>
    <button v-on:click="deleteAll()">DeleteAll</button>
    {{ deleteAllAnswer }}
    </body>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      'balanceAnswer': '',
      'accountAnswer': '',
      'depositAnswer': '',
      'withdrawAnswer': '',
      'transferAnswer': '',
      'deleteAllAnswer': '',
      'accountNumber': '',
      'initialBalance': '',
      'balance': '',
      'accountNumberTo': '',
      'transferAmount': '',
      'withdraw': '',
      'deposit': ''
    }
  },
  methods: {
    'getBalance': function () {
      this.$http.get('http://localhost:8080/getBalance/'
          + this.balance)
          .then(response => {
            console.log(response);
            this.balanceAnswer = response.data
          })
          .catch(response => {
            alert('Juhtus viga')
          })
//      this.emails.push(this.email);
    },
    'createAccount': function () {
      this.$http.post('http://localhost:8080/createAccount/'
          + this.accountNumber + '/' + this.initialBalance)
          .then(response => {
            console.log(response);
            this.accountAnswer = response.data
          })
          .catch(response => {
            alert('juhtus viga')
          })
    },
    'makeDeposit': function () {
      this.$http.post('http://localhost:8080/deposit/' + this.accountNumber + '/'
          + this.deposit)
          .then(response => {
            console.log(response);
            this.depositAnswer = response.data
          })
    },
    'makeWithdraw': function () {
      this.$http.post('http://localhost:8080/withdraw/' + this.accountNumber + '/'
          + this.withdraw)
          .then(response => {
            console.log(response);
            this.withdrawAnswer = response.data
          })
    },
    'makeTransfer': function () {
      this.$http.post('http://localhost:8080/transfer/' + this.accountNumber + '/'
          + this.accountNumberTo + '/' + this.transferAmount)
          .then(response => {
            console.log(response);
            this.transferAnswer = response.data
          })
    },
    'deleteAll': function () {
      this.$http.delete('http://localhost:8080/deleteAll/')
          .then(response => {
            console.log(response);
            this.deleteAllAnswer = response.data
          })
    },
  }
}
</script>


<style scoped>

</style>