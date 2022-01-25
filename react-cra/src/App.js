import Button from './Button';
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => {
    setKeyword(event.target.value);
  }
  const prevValue = () => {
    setValue((prev) => prev + 1)
    console.log("clicked")
  };

  useEffect(() => {
    console.log("I run only once.")
  }, []); 
  // react.js가 아무것도(빈 배열이기 떄문) 보고 있지 않으니 한번만 실행된다.

  useEffect(() => {
    console.log("I run when 'keyword' changes.")
  }, [keyword]);
  // keyword가 변화하는 것을 react.js가 보고 해당 코드를 실행시킨다.

  useEffect(() => {
    console.log("I run when 'value' changes.")
  }, [value]);
  
  useEffect(() => {
    console.log("I run when 'keyword & value' changes.")
  }, [keyword, value]);
  // 둘 중에 하나라도 변화가 일어나면 이 코드가 실행된다.

  return (
    <div className="App">
      <div>
        <h1 className={styles.title}>Welcome to React!</h1>
        <Button text="Tour of CRA" />
      </div>

      <div>
        <h3>{value}</h3>
        <input 
          value={keyword} 
          onChange={onChange} 
          text="text" 
          placeholder='Search here...' 
        />
        <Button click={prevValue} text="click me!" />
      </div>
    </div>
  );
}

export default App;
