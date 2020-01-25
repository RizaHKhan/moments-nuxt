import axios from 'axios'

export const state = () => ({
  events: [],
  errors: []
})

export const getters = {
  events: (state) => {
    return state.events
  },
  event: state => (id) => {
    return state.events.find(event => event.id === id)
  }
}

export const mutations = {
  login () {
    console.log('Called from mutations')
  },
  errors (state, errors) {
    console.log(errors)
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
    try {
      const response = await axios.post('/moments/api/register', registerInfo)
      console.log(response, 'try')
    } catch (err) {
      if (err.response) {
        console.log(err.response.data, 'catch')
      } else {
        console.log('Error', err.message)
      }
    }
  }
}
