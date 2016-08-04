<template>
  <h1>Kreator PiPcy</h1>
  <v-select
    :options="people"
    :multiple="true"
    label="name"
    :value.sync="partipipcants"
    placeholder="Pipcożercy uczestniczący"
  ></v-select>
  <div v-if="partipipcants.length">
    <h3>PiPca nie może zawierać:</h3>
    <p>
      <!--<span v-for="topping in prohibited">{{ topping }}{{ $index }} </span>-->
      {{ prohibited.join(', ') }}
    </p>
    <h3>Proponowana piPca:</h3>
    <ul>
      <li v-for="p in proposals">{{ p.join(', ') }}</li>
    </ul>
  </div>
</template>

<script>
  import vSelect from 'vue-select'
  import _ from 'lodash'

  const NUMBER_OF_INGREDIENTS = 3;

  export default {
    props: ['toppings', 'people'],
    components: {vSelect},

    data() {
      return {
        partipipcants: [],
      }
    },

    computed: {
      prohibited() {
        return _(this.partipipcants)
          .map(p => p.dislikes)
          .flatten()
          .uniq()
          .value()
      },

      favored() {
        return _(this.partipipcants)
          .map(p => p.likes)
          .flatten()
          .uniq()
          .difference(this.prohibited)
          .value()
      },

      proposals() {
        return _.uniqWith([this.propose(), this.propose(), this.propose()], _.isEqual)
      }
    },

    methods: {
      propose() {
        let number = NUMBER_OF_INGREDIENTS;
        let extraToppings = _.difference(this.toppings, this.prohibited, this.favored);
          if (this.favored.length === number) {
          return this.favored
        } else if (this.favored.length > number) {
          return _.sampleSize(this.favored, number)
        } else {
          return this.favored.concat(
            _.sampleSize(extraToppings, number - this.favored.length)
          )
        }
      }
    }
  }
</script>
