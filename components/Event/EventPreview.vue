<template>
  <div class="single-event">
    <h1>Name: {{ name }}</h1>
    <h1>Price: {{ price }}</h1>
  </div>
</template>

<script>
export default {
  name: 'EventPreview',
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
  .single-event {
    border-radius: 10px;
    padding: 10px;
    background: rgba(150,150,150,.5);
  }
</style>
