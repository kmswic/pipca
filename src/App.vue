<template>
  <div id="app">
    <div class="main mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
      <div class="mdl-layout__drawer">

        <nav class="menu mdl-navigation">
          <a class="mdl-navigation__link" @click="this.currentView = 'people'">PiPcożercy</a>
          <a class="mdl-navigation__link">Dodatki do PiPcy</a>
          <a class="mdl-navigation__link" @click="this.currentView = 'creator'">Komponuj PiPcę</a>
        </nav>
      </div>
      <div class="mdl-layout__content">
        <component :is="currentView"
                   keep-alive
                   :toppings.sync="toppings"
                   :people.sync="people"
        ></component>
      </div>
    </div>
  </div>
</template>

<script>
  import People from './components/People'
  import Creator from './components/Creator'

  export default {
    components: {
      People,
      Creator
    },

    methods: {
      gotoPeople() {
        this.currentView = 'people'
      }
    },

    data() {
      return {
        currentView: 'people',
        people: [],
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
    /*display: flex;*/
    /*align-items: center;*/
    /*justify-content: center;*/
    /*height: 100%;*/
  }

  #app {
    color: #2c3e50;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
  }

  .main {
    height: 100vh;
  }

  .menu {
    a {
        display: block;
    }
  }

</style>
