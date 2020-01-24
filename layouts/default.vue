<template>
  <div class="main-container">
    <Header />
    <nuxt />
    <Sidebar />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
export default {
  components: {
    Header,
    Footer,
    Sidebar
  }
}
</script>

<style scoped>
.main-container {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 3fr 1fr;
}

.header {
  grid-column: 1 / -1;
}

.root {
  grid-column: 1 / -1;
}

.sidebar {
  grid-column: 1 / -1;
}

.footer {
  grid-column: 1 / -1;
}

@media (min-width: 1200px) {

  .root {
    grid-column: 1;
  }

  .sidebar {
    grid-column: 2;
  }
}
</style>
