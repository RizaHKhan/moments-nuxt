<template>
  <div class="event-id">
    <EventPreview
      :id='event(routeId).id'
      :name='event(routeId).name'
      :price='event(routeId).price'
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EventPreview from '@/components/Event/EventPreview'

export default {
  components: {
    EventPreview
  },
  data () {
    return {
      routeId: this.$route.params.id
    }
  },
  computed: {
    ...mapGetters({
      event: 'events/event'
    })
  }
}
</script>
