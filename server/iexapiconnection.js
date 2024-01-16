const express = require('express');
const cors = require('cors');
const axios = require('axios');

const token = 'pk_4348fb2cef714bb5a1abeba2f387916d';
const symbols = ['AAPL', 'GOOGL', 'MSFT']; // Replace with the desired stock symbols

function getStockInfo(symbol="AAPL") {
  return axios.get('https://cloud.iexapis.com/stable/stock/market/batch', {
    params: {
      symbols: symbol,
      types: 'quote',
      token: token
    }
  })
    .then(response => {
      // Handle the API response
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
}

function getListOfStocks() {
  return axios.get('https://cloud.iexapis.com/stable/ref-data/symbols', {
    params: {
      token: token
    }
  })
    .then(response => {
      // Handle the API response
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
}

//export functions  
module.exports = {
  getStockInfo,
  getListOfStocks
}