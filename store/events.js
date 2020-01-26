import axios from 'axios'

export const state = () => ({
  user: {},
  events: [],
  errors: []
})

export const getters = {
  events: state => state.events,
  event: state => (id) => {
    return state.events.find(event => event.id === id)
  },
  errors: state => state.errors
}

export const mutations = {
  user (state, user) {
    state.user = user
  },
  errors (state, errors) {
    if (!errors) {
      state.errors = []
    } else {
      Object.values(errors).forEach((e) => {
        state.errors.push(e.message)
      })
    }
  }
}

export const actions = {
  // LOGIN
  async login (vueContext, loginInfo) {
    await axios.post('/moments/api/login', loginInfo)
    vueContext.commit('login')
  },
  // REGISTER
  async register (vuexContext, registerInfo) {
    vuexContext.commit('errors', '')
    try {
      const response = await axios.post('/moments/api/register', registerInfo)
      vuexContext.commit('user', response.data)
    } catch (err) {
      if (err.response) {
        vuexContext.commit('errors', err.response.data.errors || { err: { message: 'Please try again later' } })
      } else {
        vuexContext.commit('errors', { err: { message: 'Please try again later' } })
      }
    }
  }
}
