<template>
  <div class="about">
    <h1>Min</h1>
    <input v-model.number="minA">
    <input v-model.number="minB">
    <button v-on:click="min()">Min</button>
    {{ minAnswer }}
    <h1>Max</h1>
    <input v-model.number="maxA">
    <input v-model.number="maxB">
    <button v-on:click="max()">Max</button>
    {{ maxAnswer }}
    <h1>Absoluutarv</h1>
    <input v-model.number="absNr">
    <button v-on:click="abs()">Abs</button>
    {{ absAnswer }}
    <h1>Paarisarvu kontroll</h1>
    <input v-model.number="evenNr">
    <button v-on:click="even()">Check</button>
    {{ evenAnswer }}
    <h1> Kolmest väikseim</h1>
    <input v-model.number="smallA">
    <input v-model.number="smallB">
    <input v-model.number="smallC">
    <button v-on:click="smallest()">Check</button>
    {{ smallestAnswer }}
    <h1> Kolmest suurim</h1>
    <input v-model.number="bigA">
    <input v-model.number="bigB">
    <input v-model.number="bigC">
    <button v-on:click="biggest()">Check</button>
    {{ biggestAnswer }}
  </div>
</template>

<script>

function min() {
  if (this.minA < this.minB) {
    this.minAnswer = this.minA;
  } else {
    this.minAnswer = this.minB;
  }
}

function max() {
  if (this.maxA > this.maxB) {
    this.maxAnswer = this.maxA;
  } else {
    this.maxAnswer = this.maxB;
  }
}

function abs() {
  if (this.absNr > 0) {
    this.absAnswer = this.absNr;
  } else {
    this.absAnswer = this.absNr * -1;
  }
}

function even() {
  if (this.evenNr % 2 === 0) {
    this.evenAnswer = "Paaris";
  } else {
    this.evenAnswer = "Paaritu";
  }
}

function smallest() {
  if (this.smallA <= this.smallB && this.smallA <= this.smallC) {
    this.smallestAnswer = this.smallA;
  } else if (this.smallB <= this.smallA && this.smallB <= this.smallC) {
    this.smallestAnswer = this.smallB;
  } else {
    this.smallestAnswer = this.smallC;
  }
}

function biggest() {
  if (this.bigA >= this.bigB && this.bigA >= this.bigC) {
    this.biggestAnswer = this.bigA;
  } else if (this.bigB >= this.bigA && this.bigB >= this.bigC) {
    this.biggestAnswer = this.bigB;
  } else {
    this.biggestAnswer = this.bigC;
  }
}

export default {
  data: function () {
    return {
      'minA': 0,
      'minB': 0,
      'minAnswer': 0,
      'maxA': 0,
      'maxB': 0,
      'maxAnswer': 0,
      'absNr': 0,
      'absAnswer': 0,
      'evenNr': 0,
      'evenAnswer': 0,
      'smallA': 0,
      'smallB': 0,
      'smallC': 0,
      'smallestAnswer': 0,
      'bigA': 0,
      'bigB': 0,
      'bigC': 0,
      'biggestAnswer': 0,
    }
  },
  methods: {
    'min': min,
    'max': max,
    'abs': abs,
    'even': even,
    'smallest': smallest,
    'biggest': biggest,
  }

}

</script>
