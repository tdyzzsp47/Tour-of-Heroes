<template>
  <div id="app">
    <h1>Tour of Heroes</h1>
    <!-- <img src="./assets/logo.png"> -->
    <nav-link/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavLink from './components/NavLink'
export default {
  name: 'App',
  components:{
    NavLink
  }
}
</script>

<style>
  @import '../static/styles.css';

  h1 {
  font-size: 1.2em;
  color: #999;
  margin-bottom: 0;
}
</style>
