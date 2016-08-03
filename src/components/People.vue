<template>
    <div>
        <h3>Pipcożercy</h3>
        <div v-for="person in people">
            <person-form
                    :person="person"
                    :toppings="toppings"
                    :remove="removePerson"
            ></person-form>
        </div>
        <mdl-button raised colored @click="addPerson">Add person</mdl-button>
    </div>
</template>
<style>
    body {
    }
</style>
<script>
    import PersonForm from './PersonForm'
    export default {
        data() {
            return {
                people: []
            }
        },
        components: {
            PersonForm
        },
        methods: {
            addPerson() {
                this.people.push({});
            },
            removePerson(item) {
                this.people.$remove(item)
            }
        },
        props: [
            'toppings'
        ],
        events: {}
    }
</script>
