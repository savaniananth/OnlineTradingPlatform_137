import React, { useEffect, useState } from 'react';

const Btc = () => {
  const [btcData, setBtcData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = 'X84U6JMRPRYLFG47';
    const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=BTC&apikey=${apiKey}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setBtcData(data['Global Quote']);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {btcData && (
        <div>
          <h2>Bitcoin (BTC) Information</h2>
          <p>Open Price: {btcData['02. open']}</p>
          <p>High Price: {btcData['03. high']}</p>
          <p>Low Price: {btcData['04. low']}</p>
          <p>Current Price: {btcData['05. price']}</p>
          <p>Volume: {btcData['06. volume']}</p>
          <p>Last Trading Day: {btcData['07. latest trading day']}</p>
          <p>Previous Close Price: {btcData['08. previous close']}</p>
          <p>Change: {btcData['09. change']}</p>
          <p>Change Percentage: {btcData['10. change percent']}</p>
        </div>
      )}
    </div>
  );
};

export default Btc;
