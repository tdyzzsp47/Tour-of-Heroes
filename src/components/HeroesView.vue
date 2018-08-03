<template>
  <div class="grid grid-pad">
    <heroes-item class="col-1-4" @select="select" v-for="hero in top_heroes" :hero="hero"></heroes-item>
  </div>
</template>

<script lang="babel">
  import HeroesItem from './HeroesItem'
  export default{
    props: {
      top_heroes: Array
    },
    methods: {
      select(id) {
        this.$emit('select', id)
      }
    },
    components: {
      'heroes-item': HeroesItem
    }
  }
</script>

<style>
  /* DashboardComponent's private CSS styles */
  [class*='col-'] {
    float: left;
    padding-right: 20px;
    padding-bottom: 20px;
  }
  [class*='col-']:last-of-type {
    padding-right: 0;
  }

  .grid {
    margin: 0;
  }
  .col-1-4 {
    width: 25%;
  }
  .grid-pad {
    padding: 10px 0;
  }
  .grid-pad > [class*='col-']:last-of-type {
    padding-right: 20px;
  }
  @media (max-width: 600px) {
    .module {
      font-size: 10px;
      max-height: 75px; }
  }
  @media (max-width: 1024px) {
    .grid {
      margin: 0;
    }
    .module {
      min-width: 60px;
    }
  }
</style>
