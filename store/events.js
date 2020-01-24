import axios from 'axios'

export const state = () => ({
  events: [
    { id: '1', name: 'Wordpress', price: 100 },
    { id: '2', name: 'VueJS', price: 200 },
    { id: '3', name: 'React', price: 300 },
    { id: '4', name: 'Angular', price: 500 },
    { id: '5', name: 'NodeJS', price: 5000 }
  ],
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
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }
}
