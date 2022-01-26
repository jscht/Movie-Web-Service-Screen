import Button from './Button';
import { useState, useEffect } from "react";

function Hello() {
  // 주로 react를 사용할 떄는 따로 function을 작성하지않고 useEffect에 작성
  // useEffect(() => {
  //   console.log("hi");
  //   return () => console.log("bye");
  // }, []);

  useEffect(function() {
    console.log("hi");
    return function() {
      console.log("bye");
    };
  }, []);
    
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {setShowing((prev) => !prev)}
  return (
    <div className="App">
      {showing ? <Hello /> : null}
      <Button showing={showing} click={onClick} text='Show'/>
    </div>
  );
}

export default App;
