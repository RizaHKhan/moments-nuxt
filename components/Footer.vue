<template>
  <div class="footer">
    <div class="section">1</div>
    <div class="section">2</div>
    <div class="section">3</div>
    <div class="section">4</div>
  </div>
</template>

<style scoped>
  .footer {
    width: 90%;
    margin: auto;
    border-top: 1px white solid;
    padding: 10px 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  }

</style>
