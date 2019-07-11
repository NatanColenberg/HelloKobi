<template>
  <div class="stockPriceContainer" v-on:click="GetStockPrice">
      <div v-show="loading" class="loader"></div>
      <div class="stockName" v-show="!loading">
        <h2>{{stockName}}</h2>
      </div>
      <div class="stockSymbol" v-show="!loading">
        <h3>Stock Symbol: <span class="symbol">{{stockSymbol}}</span></h3>
      </div>
      <div class="stockPrice" v-show="!loading">
        <h1>{{stockPrice}}$ (USD)</h1>
      </div>
      

      <h4>{{priceDate}}</h4>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'StockPrice',
  props: {
    stockSymbol: String,
    stockName: String,
  },
  beforeMount(){
    this.GetStockPrice();
  },
  data(){
    return{
      stockPrice: "",
      priceDate: "",
      loading: false,
    }
  },
  methods:{
      GetStockPrice(){
          this.loading = true;
          axios({
            method: 'get',
            url: `/StockPrice/?symbol=${this.stockSymbol}`,
            responseType: 'json',
            headers:{
              'Access-Control-Allow-Origin': '*'
            }
          })
            .then((response) => {
              if(response.status == 200){
                this.stockPrice = response.data.price;
              }
              
            }).catch(function (error) {
              console.log(error);
            })
            .finally(() => {
              this.loading = false;
            });
                  
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .stockPriceContainer{
    display: flex;
    flex-direction: column;
    min-width: 150px;
    align-items: center;
    justify-content: center;
    justify-items: center;
    justify-self: center;

    margin: 20px;

    border: 3px solid rgb(0, 0, 0);
    border-radius: 30px;

    background: linear-gradient(to bottom right, rgba(36, 50, 172, 0.8) 0%,rgba(1, 1, 5, 0.8) 100%);
    color: rgb(255, 255, 255);

    cursor: pointer;
  }
  .stockPriceContainer:hover{

  }
  .stockName{
    border-bottom: 3px solid black;
    padding: 5px 25px;
    background-color: #1D344E;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }
  .stockSymbol{
    border-bottom: 2px solid rgb(36, 36, 36);
    width: 100%;
    background-color: #297E7C;
  }
  .symbol{
    background-color: black;
    padding: 5px;
    border-radius: 10px;
  }
  .stockPrice{
    background-color: #92C46D;
    color: rgb(0, 1, 53);
    width: 100%;
    border-bottom: 2px solid rgb(36, 36, 36);
  }

  .loader {
  color: #ffffff;
  margin-top: 30px;
  font-size: 8px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  text-indent: -9999em;
  -webkit-animation: load4 1.3s infinite linear;
  animation: load4 1.3s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
@-webkit-keyframes load4 {
  0%,
  100% {
    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
  }
  12.5% {
    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  25% {
    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  37.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  50% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  62.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
  }
  75% {
    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
  }
  87.5% {
    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
  }
}
@keyframes load4 {
  0%,
  100% {
    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
  }
  12.5% {
    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  25% {
    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  37.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  50% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  62.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
  }
  75% {
    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
  }
  87.5% {
    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
  }
}
</style>
