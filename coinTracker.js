import { useEffect, useState } from "react";

function App() {
  // 로딩을 위한 state
  const [loading, setLoading] = useState(true);
  // 코인 임시 리스트 state
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(response => 
      response.json()
    ).then((json) => {
      setCoins(json);
      setLoading((curr) => !curr);
    })
  }, []);

  // 사용자 입력 달러 state
  const [dollars, setDollars] = useState("");
  const inputDollars = (event) => {
    setDollars(event.target.value)
  }

  // 코인 변환, 단위 state
  const [cng, setCng] = useState({
    val: 1,
    selc: false
  });
  const onCng = (event) => {
    setCng({
      val: event.target.value,
      selc: true
    })
  }
  
  return (
    <div className="App">

      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {
        loading ? <strong>Loading...</strong>
        :(
          <div>
            <h2>coin tracker</h2>
            <label htmlFor="dollars" >Your dollars
            <input id="dollars" onChange={inputDollars} value={dollars} type="number" placeholder="input your dollar you have..." />
              USD</label>
            <br/>
            <select onChange={onCng}>
              <option disabled={cng.selc}>Select your Unit</option>
              {coins.map((coin, index) =>
              // 이 coin은 coins array안에 있는 각각의 coin을 의미한다.
                <option key={index} value={coin.quotes.USD.price}>
                  {coin.name}({coin.symbol})
                </option>
              )}
            </select>
            <h3>{dollars/cng.val}</h3>
          </div>
        )}
    </div>
  );
}

export default App;