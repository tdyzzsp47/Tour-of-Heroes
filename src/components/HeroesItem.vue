<template>
  <div class="heroes-item">
    <a @click="select(hero.id)">
      <div class="module hero">
        <h4>{{ hero.name }}</h4>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    props: {
      hero: Object
    },
    methods: {
      select(id) {
          this.$emit("select", id)
      }
    }
  }
</script>

<style>
  a {
    text-decoration: none;
  }
  *, *:after, *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .module {
    padding: 20px;
    text-align: center;
    color: #eee;
    max-height: 120px;
    min-width: 120px;
    background-color: #607D8B;
    border-radius: 2px;
  }
  .module:hover {
    background-color: #EEE;
    cursor: pointer;
    color: #607d8b;
  }
</style>
