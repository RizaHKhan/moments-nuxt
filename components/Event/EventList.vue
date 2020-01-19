<template>
  <div class="event-list">
    <nuxt-link v-for="event in events" :key="event.id" :to="'/events/' + event.id">
      <EventPreview
        :id="event.id"
        :name="event.name"
        :price="event.price"
      />
    </nuxt-link>
  </div>
</template>

<script>
import EventPreview from '@/components/Event/EventPreview'
export default {
  components: {
    EventPreview
  },
  props: {
    events: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  .event-list {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  }
</style>
