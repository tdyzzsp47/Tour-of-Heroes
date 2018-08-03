<template>
  <div>
    <h2>My Heroes</h2>
    <heroes-add @add="add"></heroes-add>
    <heroes-view-list @select="select" @remove="remove" :heroes_list=sharedState.heroes_list></heroes-view-list>
  </div>
</template>

<script>
  import HeroesAdd from '../components/HeroesAdd'
  import HeroesViewList from '../components/HeroesViewList'
  import store from '../store.js'
  export default{
    data() {
      return {
        sharedState: store.state
      }
    },
    methods: {
      add(add_name){
        store.actions.addHero(add_name)
      },
      select(id) {
        store.actions.selectHero(id)
        this.$router.push({name: 'detail', params: {id}})
      },
      remove(id) {
        store.actions.removeHero(id)
      }
    },
    components: {
      'heroes-add': HeroesAdd,
      'heroes-view-list': HeroesViewList
    }
  }
</script>

<style>

button {
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  cursor: hand;
  font-family: Arial;
}

button:hover {
  background-color: #cfd8dc;
}

button.delete {
  position: relative;
  left: 194px;
  top: -32px;
  background-color: gray !important;
  color: white;
}

</style>
