<template>
  <div class="events">
    <EventList :events="events"/>
  </div>
</template>

<script>
import EventList from '@/components/Event/EventList'
export default {
  components: {
    EventList
  },
  data () {
    return {
      events: [
        { id: 1, name: 'Wordpress', price: 100 },
        { id: 2, name: 'VueJS', price: 200 },
        { id: 3, name: 'React', price: 300 },
        { id: 4, name: 'Angular', price: 400 }
      ]
    }
  }
}
</script>

<style scoped></style>
