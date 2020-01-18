<template>
  <div class="single-event">
    <h1>ID: {{ id }}</h1>
    <h1>Name: {{ name }}</h1>
    <h1>Price: {{ price }}</h1>
  </div>
</template>

<script>
export default {
  name: 'EventPreview',
  props: {
    id: {
      type: Number,
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
    border: solid 1px red;
    background: rgba(100,100,100,.2);
  }
</style>
