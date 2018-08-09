const state = {
  heroes_list: [
    {id: 11, name: "Mr. Nice"},
    {id: 12, name: "Narco"},
    {id: 13, name: "Bombasto"},
    {id: 14, name: "Celeritas"},
    {id: 15, name: "Magneta"},
    {id: 16, name: "RubberMan"},
    {id: 17, name: "Dynama"},
    {id: 18, name: "Dr IQ"},
    {id: 19, name: "Magma"},
    {id: 20, name: "Tornado"}
  ],
  selected_hero: {
    id: '',
    name: ''
  }
}

const actions = {
  updateHero(new_name) {
    const id = parseInt(state.selected_hero.id, 10)
    const index = state.heroes_list.findIndex((hero) => {
      return hero.id === id
    })
    const edited_hero = Object.assign({id: id, name:new_name})
    state.heroes_list.splice(index, 1, edited_hero)
  },
  selectHero(id) {
    const hero = state.heroes_list.find((hero) => {
      return hero.id === id
    })
    state.selected_hero = Object.assign({id: hero.id, name:hero.name})
  },
  addHero(add_name) {
    var id = 0
    state.heroes_list.forEach((hero) => {
      if(id < hero.id){
        id = hero.id
      }
    })
    id += 1
    state.heroes_list.push({id: id, name: add_name})
  },
  removeHero(id) {
    const index = state.heroes_list.findIndex((hero) => {
      return hero.id === id
    })
    state.heroes_list.splice(index, 1)
  }
}

export default {
  state,
  actions
}
