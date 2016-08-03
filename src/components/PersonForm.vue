<template>
    <div class="person">
        <div>
            <mdl-textfield floating-label="name" :value.sync="person.name"></mdl-textfield>
            <v-select :multiple="true" :options="likeOptions"
                      class="likes" placeholder="Lubię" :value.sync="person.likes"></v-select>
            <v-select :multiple="true" :options="dislikeOptions"
                      class="dislikes" placeholder="Nie lubię" :value.sync="person.dislikes"></v-select>
        </div>
        <mdl-button @click="remove(this.person)" class="close">&times;</mdl-button>

    </div>
        <p>

        </p>
    <ul>

    </ul>
</template>

<style lang="scss">
    .person {
        display: flex;
        margin-bottom: 3rem;
    }
    .likes .selected-tag {
        background: #448b25;
    }
    .dislikes .selected-tag {
        background-color: #cc5e63;
    }
    .likes, .dislikes {
        .selected-tag {
            color: white;
        }
    }
</style>
<script>
    import vSelect from 'vue-select'
    import _ from 'lodash'
    export default{
        components: {vSelect},
        props: ['toppings', 'person', 'remove'],
        computed: {
            likeOptions() {
              return _.difference(this.toppings, this.person.dislikes)
            },
            dislikeOptions() {
              return _.difference(this.toppings, this.person.likes)
            }
        },
        methods: {
//            remove() {
//                this.$emit('remove', this.person)
//                this.remove(this.person);
//            }
        }
    }
</script>
