<template>
  <div class="events">
    <EventList :events="events" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EventList from '@/components/Event/EventList'
export default {
  components: {
    EventList
  },
  computed: {
    ...mapGetters({
      events: 'events/events'
    })
  }
}
</script>

<style scoped></style>
