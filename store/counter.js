export const state = () => ({
  counter: 0
})

export const mutations = {
  increment (state, amount) {
    state.counter = state.counter + amount
  }
}

export const actions = {
  increment (vuexContext, amount) {
    vuexContext.commit('increment', amount)
  }
}
