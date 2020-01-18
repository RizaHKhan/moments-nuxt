<template>
  <div class="main-container">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
.main-container {
  width: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;

}
</style>
