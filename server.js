var express = require('express');
var request = require('request');
var app = express();

// Serve all the files in root directory
app.use(express.static('./'));

// Serve Info Page
app.get('/Info', (req, res) => {
  res.sendFile('Info/Info.html', { root: __dirname });
});

app.get('/StockPrice', (req, res) => {

  request(`http://stockpriceserver-service/stockprice/?symbol=${req.query.symbol}`, function(err, stockRes, body){
    
    if (err) {
      console.error(err);
      res.sendStatus(400);
      return;
    }

    let price = JSON.parse(body).price;
    if(!price){
      res.sendStatus(400);
      return;
    }
    
    res.statusCode = 200;
    res.send({'price': price});
  });

  
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
