<template>
  <div>
    <h3>Top Heroes</h3>
    <heroes-view @select="select" :top_heroes=sharedState.heroes_list.slice(0,4)></heroes-view>
    <heroes-search @select="select" :heroes_list=sharedState.heroes_list></heroes-search>
  </div>
</template>

<script>
  import HeroesView from '../components/HeroesView'
  import HeroesSearch from '../components/HeroesSearch'
  import store from '../store'
  export default{
    data() {
      return {
        sharedState: store.state,
      }
    },
    methods: {
      select(id) {
        store.actions.selectHero(id)
        this.$router.push({name: 'detail', params: {id}})
      }
    },
    components: {
      'heroes-view': HeroesView,
      'heroes-search': HeroesSearch
    }
  }
</script>

<style>
h3 {
  text-align: center; margin-bottom: 0;
}
</style>
