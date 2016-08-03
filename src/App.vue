<template>
  <div id="app">
    <h1>Pipca</h1>
    <h2>Pizza Conflict Resolver</h2>

      <people :toppings="toppings"></people>
  </div>
</template>

<script>
import People from './components/People'

export default {
  components: {
    People
  },

  data() {
    return {
      multiple: true,
      toppings: [
              'pieczarki',
              'salami',
              'papryka',
              'szynka',
              'oliwki',
              'kurczak'
      ]
    }
  }
}
</script>

<style lang="scss">
  @import '~material-design-lite/material.min.css';
  @import '~bootstrap/dist/css/bootstrap.min.css';

body {
  display: flex;
  align-items: center;
  justify-content: center;
  /*height: 100%;*/
}

#app {
  color: #2c3e50;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}



</style>
