/*import React, { useState, useEffect } from 'react';

/**
 * App component that fetches stock data and a list of stocks on mount. 
 * Renders a select dropdown to display the list of stocks.
 * Uses React hooks for state and effects.

function App() {

  const [data, setData] = useState([]);
  const [stockslist, setStocksList] = useState([]);
  const [symbol, setSymbol] = useState("AAPL");





  useEffect(() => {
    fetch(`/stocks/${symbol}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
      }
      )
      .catch(error => console.error(error));;
  }, [symbol]);

  useEffect(() => {
    fetch('/stockslist')
      .then(res => res.json())
      .then(stockslist => setStocksList(stockslist))
  }, []);


  const replacer = (key, value) => (value === null ? undefined : value);
  const jsonString = JSON.stringify(data, replacer);
  const parsedData = JSON.parse(jsonString);
  const quote = JSON.stringify(parsedData.quote);
  const outPutData = JSON.parse(quote);


  return (
    <div className="App">
    <form>
      <select>
        {stockslist.map((stock) => 
          <option key={stock} value={stock}>{stock}</option>  
        )}
      </select>
     
  



    </form>
    <div>
      <p>{JSON.stringify(data)}</p>
   <p>{quote}</p>
   <table>
      <thead>
        <tr>
          <th>Key</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(outPutData).map(key => (
          <tr key={key}>
            <td>{key}</td>
            <td>{outPutData[key]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  


  </div>
  </div>
  );
}


export default App;
*/


import React, { useState, useEffect } from 'react';

let jsonData = `{"quote":{"avgTotalVolume":49984535,"calculationPrice":"close","change":0.33,"changePercent":0.00178,"close":null,"closeSource":"official","closeTime":null,"companyName":"Apple Inc","currency":"USD","delayedPrice":null,"delayedPriceTime":null,"extendedChange":null,"extendedChangePercent":null,"extendedPrice":null,"extendedPriceTime":null,"high":null,"highSource":"Close","highTime":1705093200235,"iexAskPrice":0,"iexAskSize":0,"iexBidPrice":0,"iexBidSize":0,"iexClose":185.83,"iexCloseTime":1705093199441,"iexLastUpdated":1705093199441,"iexMarketPercent":4.157297077486132,"iexOpen":186.07,"iexOpenTime":1705069800193,"iexRealtimePrice":185.83,"iexRealtimeSize":200,"iexVolume":541833,"lastTradeTime":1705093199918,"latestPrice":185.92,"latestSource":"Close","latestTime":"January 12, 2024","latestUpdate":1705093200235,"latestVolume":null,"low":null,"lowSource":"Close","lowTime":1705093200000,"marketCap":2874675704320,"oddLotDelayedPrice":null,"oddLotDelayedPriceTime":null,"open":null,"openTime":null,"openSource":"official","peRatio":30.33,"previousClose":185.59,"previousVolume":49128408,"primaryExchange":"NASDAQ","symbol":"AAPL","volume":null,"week52High":199.62,"week52Low":132.67,"ytdChange":-0.03255231184750441,"isUSMarketOpen":false}}`;

const App = () => {

  const [data, setData] = useState([]);
  const [stockslist, setStocksList] = useState([]);
  const [symbol, setSymbol] = useState("AAPL");


  useEffect(() => {
    fetch(`/stocks/${symbol}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
      }
      )
      .catch(error => console.error(error));;
  }, [symbol]);

  useEffect(() => {
    fetch('/stockslist')
      .then(res => res.json())
      .then(stockslist => setStocksList(stockslist))
  }, []);

  const replacer = (key, value) => (value === null ? undefined : value);
  let jsonString = JSON.stringify(data, replacer);
 
 

 

  const parsedData = JSON.parse(jsonData);
  const quote = parsedData.quote;

  return (
    
    <table>
      <p>{jsonString}</p>
      <p>{jsonData}</p>
      <tbody>
        {Object.entries(quote).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default App;