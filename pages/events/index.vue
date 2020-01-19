<template>
  <div class="events">
    <EventList :events="this.$store.state.events.events" />
  </div>
</template>

<script>
import EventList from '@/components/Event/EventList'
export default {
  components: {
    EventList
  }
}

</script>

<style scoped></style>
