const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');



const token = 'pk_4348fb2cef714bb5a1abeba2f387916d';
 // Replace with the desired stock symbols

const symbols = ['AAPL', 'TSLA'];

 app.get('/stocks/:symbol', (req, res) => {

  const symbol = req.params.symbol;

  axios.get('https://cloud.iexapis.com/stable/stock/market/batch', {
    params: {
      symbols: symbol,
      types: 'quote',
      token: token 
    }
  })
  .then(response => {
    res.json(response.data[symbol]); 
  })
  .catch(error => {
    console.error(error);
    res.status(500).send('Error fetching data');
  });

});

app.get('/stockslist', (req, res) => {
 res.json(symbols);
});


app.listen(3001, () => {})

