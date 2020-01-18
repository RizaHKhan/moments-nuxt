<template>
  <div class="events">
    <EventList :events="this.$store.state.events.events" />
    <h1>This is the counter amount:{{ this.$store.state.counter.counter }}</h1>
  </div>
</template>

<script>
import EventList from '@/components/Event/EventList'
export default {
  components: {
    EventList
  },
  created () {
    this.$store.dispatch('counter/increment', 10)
  }
}
</script>

<style scoped></style>
