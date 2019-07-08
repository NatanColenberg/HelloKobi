<template>
  <div class="stockPrice" v-on:click="GetStockPrice">
      <h2>Change Healthcare Inc</h2>
      <h3>NASDAQ: CHNG</h3>
      <h1>14.81 USD −0.12 (0.80%)</h1>
  </div>
</template>

<script>
export default {
  name: 'StockPrice',
  props: {

  },
  methods:{
      GetStockPrice(){
          console.log('Start GetStockPrice');

          console.log('End GetStockPrice');          
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .stockPrice{
    padding: 20px;
    margin: 20px;
    width: 25%;

    border: 1px solid black;
    border-radius: 20px;

    background: linear-gradient(to bottom right, rgba(15, 15, 89, 0.8) 0%,rgba(244, 42, 76, 0.8) 100%);
    color: rgb(255, 255, 255);

    cursor: pointer;
  }
  .stockPrice:hover{
    background: linear-gradient(to bottom right, rgba(15, 15, 89) 0%,rgba(244, 42, 76) 100%);
  }
</style>
