<template>
    <div>
        <h3>Pipcożercy</h3>
      <mdl-button raised colored @click="addPerson">Dodaj</mdl-button>

      <div class="people-list">
        <div v-for="person in people" class="person">
          <person-form
            :person="person"
            :toppings="toppings"
            :remove="removePerson"
          ></person-form>
        </div>
      </div>
    </div>
</template>



<style>
  .person {
    margin: 1em;
  }

  .people-list {
    display: flex;
    flex-wrap: wrap;
  }
</style>
<script>
    import PersonForm from './PersonForm'
    export default {
        components: {
            PersonForm
        },
        methods: {
            addPerson() {
                this.people.push({})
            },
            removePerson(item) {
                this.people.$remove(item)
            }
        },
        props: [
            'toppings', 'people'
        ],
        events: {}
    }
</script>
