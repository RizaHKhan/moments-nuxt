<template>
  <div class="register">
    <h3>Not Registered? Register below and start posting events!</h3>
    <form method="POST" v-on:submit.prevent="register(registerInfo)">
      <input type="text" v-model="registerInfo.username" name="username" placeholder="Username">
      <input type="email" v-model="registerInfo.email" name="email" placeholder="Email">
      <input type="password" v-model="registerInfo.password" name="password" placeholder="Password">
      <input id="register" type="submit" placeholder="Register">
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      registerInfo: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      register: 'events/register'
    })
  }
}
</script>

<style scoped>
.register {
  border: solid 2px white;
  border-radius: 5px;
  padding: 10px;

}

h3 {
  margin: 10px 0;
}

form {
  display: flex;
  flex-direction: column;
}

form input {
  margin: 3px 0;
  height: 30px;
  background: 0;
  border: 0;
  border-bottom: 2px white solid;
  color: white;
}

#register {
  color: white;
  border: 2px solid white;
  transition: all .5s ease;
}

#register:hover {
  color: black;
  background: white;
}
</style>
