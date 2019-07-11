<template>
  <div class="header">
    <h1>Hey Kobi</h1>
    <h3>You might be wondering what's the new Change Healthcare stock is up to...?</h3>
    <h3>Don't worry.. I got you covered!</h3>
    <h4>
      This site was delivered by a Docker Container Node running a simple NodeJs Web Server using Express.<br>
      The Web Server container uses another Docker Container to fetch the stock price from the Stock Price Server.<br>
    </h4>
    <h3 class="moreInfo" v-on:click="GetMoreInfo">
      For more information click here
      <i class="fa fa-info-circle"></i>
    </h3>
    
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Header',
  props: {

  },
  methods:{
    GetMoreInfo(){
      window.location.href = '/Info';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    display: flex;
    flex-flow: column;
    width: 100%;
    padding: 40px;
    background: linear-gradient(to bottom, #00b7ea 0%,#009ec3 100%);
    color: rgb(255, 255, 255);
  }
  h1{
    font-size: 60px;
    color: rgb(238, 238, 238);
    text-shadow: 3px 3px #000000;
  }
  h3{
    font-size: 25px;
  }
  h4{
    font-size: 20px;
    padding: 10px;
    text-align: center;
    line-height: 35px;
  }
  .moreInfo{
    font-size: 30px;
    color: white;
    cursor: pointer;
  }
  .moreInfo:hover{
    color: rgb(250, 255, 182);
  }
</style>
