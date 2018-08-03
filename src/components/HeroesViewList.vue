<template>
  <div class="heroes-view-list">
    <ul class="heroes">
      <li v-for="hero in heroes_list">
        <a @click="select(hero.id)">
          <span class="badge">{{ hero.id }}</span>{{hero.name}}
        </a>
        <button class="delete" @click="remove(hero.id)" title="delete hero">x</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    props: {
      heroes_list: Array
    },
    methods: {
      select(id) {
        this.$emit("select", id)
      },
      remove(id) {
        this.$emit("remove", id)
      }
    }
  }

</script>

<style>
.heroes {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}
.heroes li {
  position: relative;
  cursor: pointer;
  background-color: #EEE;
  margin: .5em;
  padding: .3em 0;
  height: 1.6em;
  border-radius: 4px;
}

.heroes li:hover {
  color: #607D8B;
  background-color: #DDD;
  left: .1em;
}

.heroes a {
  color: #888;
  text-decoration: none;
  position: relative;
  display: block;
  width: 250px;
}

.heroes a:hover {
  color:#607D8B;
}

.heroes .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color: #607D8B;
  line-height: 1em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 1.8em;
  min-width: 16px;
  text-align: right;
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
}
</style>
