import { useState } from "react";

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
    setToDos((currentArray) => [toDoVal, ...currentArray]);
    // 배열 원소 위치를 바꾸면 원하는 위치에 저장시킬 수 있다.
    setToDoVal("");
    console.log(toDos);
    // 여기서는 바로 추가되지 않는다
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
    </div>
  );
}

export default App;
