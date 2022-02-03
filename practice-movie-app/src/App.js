import { useEffect, useState } from "react";

function App() {
  // 로딩을 위한 state
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(response => 
      response.json()
    ).then((json) => {
      console.log(json)
      setCoins(json);
      setLoading((curr) => !curr);
    })
  }, []);
  
  // 코인 임시 리스트 state
  const [coins, setCoins] = useState([]);

  // 사용자 입력 달러 state
  const [dollars, setDollars] = useState('');
  const inputDollars = (event) => {setDollars(event.target.value)}

  return (
    <div className="App">

      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {
        loading ? <strong>Loading...</strong>
        :(
          <div>
            <h2>coin tracker</h2>
            <input onChange={inputDollars} value={dollars} type="number" placeholder="input your dollar you have..." />
            <h3>{dollars}</h3>
            <select>
              {coins.map((coin, index) =>
              // 이 coin은 coins array안에 있는 각각의 coin을 의미한다.
                <option key={index}>
                  {coin.name}({coin.symbol}): $ {coin.quotes.USD.price} USD
                </option>
              )}
            </select>
          </div>
        )}
    </div>
  );
}

export default App;
