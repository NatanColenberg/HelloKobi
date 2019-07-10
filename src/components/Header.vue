<template>
  <div class="header">
    <h1>Hey Kobi</h1>
    <h3>You might be wondering what's the new Change Healthcare stock is up to...?</h3>
    <h3>Don't worry.. I got you covered!</h3>
    <h4>
      This site was delivered by a Docker Container Node running a simple NodeJs Web Server using Express.<br>
      The Web Server container uses another Docker Container to fetch the stock price from the Stock Price Server.<br>
      The Stock Price Server is also a NodeJs server that is receiving a stock symbol (CHNG - Change Healthcare)<br>
      and fetches the data from Yahoo Finance API.<br>
      All containers are hosted in GCP (Google Cloud Platform) using the GKE (Google Kubernetes Engine)
    </h4>
    
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
</style>
