import { useState } from "react";
import List from "./List";

function App() {
  const [toDoVal, setToDoVal] = useState("");
  const [toDos, setToDos] = useState([]);
  console.log(toDos);
  const onChange = (event) => setToDoVal(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDoVal === "") {
      return;
    }
    //setToDos((currentArray) => [toDoVal, ...currentArray]);
    setToDos((currentArray) => [...currentArray, toDoVal]);
    // 함수를 보낼 때 react.js는 함수의 첫 번째 argument로 현재 state를 보낸다.
    // 위의 코드는 현재 toDos배열을 가져와서 새로운 toDos의 array로 return하고 있다.
    setToDoVal("");
  };
  const delToDo = (index) => {
    //console.log(index)
    setToDos(toDos.filter((item, toDoIndex) => index !== toDoIndex))
  };
  return (
    <div className="App">
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={toDoVal} 
          type="text" 
          placeholder="Write your to do..." 
        />
        <button onClick={onSubmit}>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item, index) => (
          <List index={index} item={item} del={delToDo}/>

          // <li key={index}>
          //    {item}&emsp;
          //    <button onClick={() => delToDo(index)}>❌</button>
          // </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
