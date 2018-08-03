<template>
  <div class="heroes-search">
    <h4>Hero Search</h4>
    <input id="search-box" v-model="search_name">
    <ul class="search-result">
      <li v-for="hero in searched_heroes">
        <a @click="select(hero.id)">
          {{hero.name}}
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="babel">
  export default{
    data() {
      return {
        searched_heroes: [],
        search_name: ''
      }
    },
    props: {
      heroes_list: Array
    },
    methods: {
      select(id) {
        this.$emit("select", id)
      },
      searchHero() {
        this.searched_heroes = []
        this.heroes_list.forEach((hero) => {
          if(hero.name.match(this.search_name) && this.search_name !== '') {
            this.searched_heroes.push(hero)
          }
        })
      }
    },
    watch: {
      search_name: 'searchHero'
    }
  }
</script>

<style>
/* HeroSearch private styles */
.search-result li {
  border-bottom: 1px solid gray;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  width:200px;
  height: 25px;
  padding: 5px;
  background-color: white;
  cursor: pointer;
  list-style-type: none;
}

.search-result li:hover {
  background-color: #607D8B;
}

.search-result li a {
  color: #888;
  display: block;
  text-decoration: none;
}

.search-result li a:hover {
  color: white;
}
.search-result li a:active {
  color: white;
}
#search-box {
  width: 200px;
  height: 20px;
}


ul.search-result {
  margin-top: 0;
  padding-left: 0;
}
</style>
