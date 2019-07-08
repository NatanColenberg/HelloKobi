<template>
  <div class="header">
    <h1>Hey Kobi</h1>
    <h3>You might be wondering what is the Change Healthcare stock price today</h3>
    
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    padding: 20px;
    margin: 20px;
    border: 1px solid black;
    border-radius: 20px;
    background: linear-gradient(to bottom, #00b7ea 0%,#009ec3 100%);
    
  }
  h1{
    font-size: 60px;
    color: rgb(238, 238, 238);
    text-shadow: 3px 3px #000000;
  }
  h3{
    font-size: 25px;
    color: rgb(255, 255, 255);
  }
</style>
