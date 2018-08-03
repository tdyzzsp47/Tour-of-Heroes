<template>
  <div class="heroes-add">
    Hero name:
      <input v-model="add_name">
      <button @click="add()">add</button>
  </div>
</template>

<script lang="babel">
  import HeroesItem from './HeroesItem'
  export default{
    data() {
      return {
        add_name: ''
      }
    },
    props: {
      top_heroes: Array
    },
    methods: {
      select(id) {
        this.$emit('select', id)
      },
      add() {
        if(this.add_name !== ''){
          this.$emit('add', this.add_name)
        }
      }
    },
    components: {
      'heroes-item': HeroesItem
    }
  }
</script>

<style>

</style>
