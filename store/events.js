export const state = () => ({
  events: [
    { id: 1, name: 'Wordpress', price: 100 },
    { id: 2, name: 'VueJS', price: 200 },
    { id: 3, name: 'React', price: 300 },
    { id: 4, name: 'Angular', price: 500 },
    { id: 5, name: 'NodeJS', price: 5000 }
  ]
})

export const mutations = {
  setEvents (state, events) {
    state.events = events
  }
}

export const actions = {
  setEvents (vuexContext, events) {
    vuexContext.commit('setEvents', events)
  }
}

export const getters = {

}
