<template>
  <div class="event-id">
    <h1>This is the single event ID {{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  created: {
    alert () {
      alert('I am loaded')
    }
  }
}
</script>
