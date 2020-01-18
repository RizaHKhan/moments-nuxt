<template>
  <div class="header">
    <div class="logo">
      <h1>Moments</h1>
    </div>
    <div class="nav">
      <div class="burger" @click.prevent="isActive = !isActive" v-bind:class="{open: isActive}">
        <div></div>
      </div>
      <div class="nav-inner" v-bind:class="{menuOpen: isActive}">
        <ul class="list-container">
          <li class="list-item"><nuxt-link to="/">Home</nuxt-link></li>
          <li class="list-item"><nuxt-link to="/about">About</nuxt-link></li>
          <li class="list-item"><nuxt-link to="/events">Events</nuxt-link></li>
        </ul>
        <div class="login">
          <form action="#" class="login-form">
            <input type="email" placeholder="email">
            <input type="password" placeholder="password">
            <input id="login-btn" type="submit" value="Login">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: false
    }
  }
}
</script>

<style scoped>
  .header {
    display: flex;
    height: 100px;
    margin: auto;
    justify-content: space-between;
  }

  .logo {
    margin: auto 0;
    font-size: 25px;
  }

  .nav {
    display: flex;
    margin: auto 0;
  }

  .nav-inner {
    position: fixed;
    background: rgba(10,10,10,.5);
    overflow: hidden;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    transform: translateY(-1000px);
    transition: all .5s ease;
  }

  .burger {
    position: relative;
    z-index: 10;
  }

  .burger > div {
    height: 3px;
    width: 30px;
    background: white;
    position: relative;
    transition: all .5s ease;
  }

  .burger > div:before {
    content: '';
    position: absolute;
    top: -10px;
    height: 3px;
    width: 30px;
    background: white;
    transition: all .5s ease;
  }

  .burger > div:after {
    content: '';
    position: absolute;
    top: 10px;
    height: 3px;
    width: 30px;
    background: white;
  }

  .open > div {
    transform: rotate(225deg);
  }

  .open > div:before, .open > div:after {
    top: 0;
    transform: rotate(90deg);
  }

  .open {
    transition: all .5s ease;
  }

  .open:hover {
    transform: rotate(45deg);
  }

  .menuOpen {
    transform: translateY(0);
    opacity: 1;
  }

  .list-container {
    margin: 100px auto auto auto;
  }

  .list-container > li {
    list-style: none;
    font-size: 40px;
    text-align: center;
  }

  .list-item > a {
    color: white;
    text-decoration: none;
  }

  .login > form {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: auto;
  }

  .login-form > input {
    margin: 5px 0;
    font-size: 20px;
    padding: 10px 20px;
    background: 0;
    border: 0;
    border-bottom: 1px solid white;
    color: white;
  }

  #login-btn {
    background: #27a9e1;
    border: 0;
    color: white;
  }

  @media (min-width: 1000px) {

    .burger {
      display: none;
    }

    .nav-inner {
      position: relative;
      display: inline-block;
      transform: translateY(0);
      opacity: 1;
    }

    .list-container {
      margin: auto;
      display: flex;
      justify-content: flex-end;
    }

    .list-container > li {
      margin: 0 10px 0 0;
      font-size: 18px;
    }

    .login > form {
      flex-direction: row;
      margin: 10px 0;
      width: 100%;
    }

  .login-form > input {
    margin: 0 5px;
    font-size: 18px;
    padding: 5px;
  }

  #login-btn {
    width: 100px;
  }
}

</style>
