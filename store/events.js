import axios from 'axios'

export const state = () => ({
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
  login () {
    console.log('Called from mutations')
  },
  errors (state, errors) {
    if (!errors) {
      state.errors = []
    } else {
      Object.values(errors).forEach((e) => {
        console.log(e.message)
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
      console.log(response, 'try')
    } catch (err) {
      if (err.response) {
        vuexContext.commit('errors', err.response.data.errors)
      } else {
        console.log('Error', err.message)
      }
    }
  }
}
