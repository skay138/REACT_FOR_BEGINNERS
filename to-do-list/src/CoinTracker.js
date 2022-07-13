import { useEffect, useState } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [usd, setUsd] = useState(0);
  const [selectcoin, setSelectcoin] = useState([]);
  const [mark, setMark] = useState([]);

  const howMuch = (event) => setUsd(event.target.value);

  const onClick = () => {
    setMark((currentArray) => [
      { usd: usd, value: usd / selectcoin },
      ...currentArray,
    ]);
  };

  const selectCoin = (e) =>{
    setSelectcoin(e.target.value);
  }
    

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((Response) => Response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins!{loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <input
            onChange={howMuch}
            type="number"
            value={usd}
            placeholder="Write your USD..."
          />
          <button onClick={onClick}>MARK</button>
          <br />
          <select onChange={selectCoin}>
            <option>SELECT COIN</option>
            {coins.map((coin, index) => (
              <option
                value={coin.quotes.USD.price}
                key={index}
                name={coin.name}
              >
                {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <ul>
            {mark.map((item, index) => (
              <li key={index}>
                {item.usd} USD = {(item.value).toFixed(2)} COIN(i want to change to the coin name but struggling)
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CoinTracker;
