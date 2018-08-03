<template>
  <div class='detail'>
    <h2>{{ sharedState.selected_hero.name }} Details</h2>
    <div><span>id: </span>{{ sharedState.selected_hero.id }}</div>
    <label>name:
      <input v-model="new_name">
    </label>
    <div class='detail-button'>
      <button @click='back()'>go back</button>
      <button @click='update()'>save</button>
    </div>
  </div>
</template>

<script>
  import store from '../store.js'
  export default{
    data() {
      return {
        sharedState: store.state,
        new_name: ''
      }
    },
    created() {
      this.setName()
    },
    methods: {
      update() {
        store.actions.updateHero(this.new_name)
        this.$router.push({name: 'root'})
      },
      back() {
        this.$router.push({name: 'root'})
      },
      setName() {
        this.new_name = this.sharedState.selected_hero.name
      }
    }
  }
</script>

<style>
/* HeroDetailComponent's private CSS styles */
.detail label {
  display: inline-block;
  width: 3em;
  margin: .5em 0;
  color: #607D8B;
  font-weight: bold;
}
.detail input {
  height: 2em;
  font-size: 1em;
  padding-left: .4em;
}
.detail button {
  margin-top: 20px;
  font-family: Arial;
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer; cursor: hand;
}
.detail button:hover {
  background-color: #cfd8dc;
}
.detail button:disabled {
  background-color: #eee;
  color: #ccc;
  cursor: auto;
}
</style>
