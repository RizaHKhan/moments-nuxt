<template>
  <div class="event-id">
    <EventPreview />
  </div>
</template>

<script>
import EventPreview from '@/components/Event/EventPreview'
export default {
  components: {
    EventPreview
  },
  created: {
    alert () {
      alert('I am loaded')
    }
  }
}
</script>
