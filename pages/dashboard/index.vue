<template>
  <div class="dashboard">
    <div class="name">
      <h1>Hi, {{ this.$store.state.events.user.username }}</h1>
    </div>
    <div class="inner">
      <h3>Create an Event:</h3>
      <form method="POST" class="post-event">
        <label for="title">Event Title</label><input name="title" type="text" v-model="eventMeta.title">
        <label for="date">Event Date</label><input name="date" type="date" v-model="eventMeta.date">
        <label for="time">Event Time (of Date)</label><input name="time" type="time" v-model="eventMeta.time">
        <label for="location">Event Location</label><input name="location" type="text" v-model="eventMeta.location">
        <label for="description">Event Description</label><textarea name="" id="" cols="30" rows="10" v-model="eventMeta.description"></textarea>
      </form>
    </div>
    <div class="inner">
      <h3>Active Events:</h3>
      <table>
        <tr class="list">
          <th>Index</th>
          <th>Title</th>
          <th>Edit</th>
        </tr>
        <tr class="list">
          <td>1</td>
          <td>Wordpress</td>
          <td><a href="#">Edit</a></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      eventMeta: {
        title: '',
        date: '',
        time: '',
        location: '',
        description: ''
      }
    }
  }
}
</script>

<style scoped>
  .dashboard {
    padding: 5px;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
    grid-template-rows: 30px;
    grid-gap: 10px;
  }

  .name {
    grid-column: 1 / -1;
  }

  table {
    width: 100%;
    text-align: center
  }

  th {
    border-bottom: 2px solid white;
  }

  .list {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-gap: 10px;
  }

  .inner h3 {
    font-size: 30px;
    margin: 20px 0;
  }

  .post-event {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: repeat(4, 30px) 120px;
    grid-gap: 5px;
  }

  @media (max-width: 1200px) {
    .dashboard {
      grid-column: 1 / -1;
    }
  }
</style>
