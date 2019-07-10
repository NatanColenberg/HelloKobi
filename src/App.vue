<template>
  <div id="app">
    <Header class="Header"/>
    <StockPrice class="StockPrice" 
    stockSymbol="CHNG"
    stockName="Change Healthcare Inc"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import StockPrice from './components/StockPrice'

export default {
  name: 'app',
  components: {
    Header,
    StockPrice
  }
}
</script>

<style>
#app {
  display: flex;
  flex-flow: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  align-items: center;
}
</style>
