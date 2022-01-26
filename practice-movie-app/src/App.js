import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const onChange = (event) => setToDo(event.target.value);
  console.log(toDo)
  return (
    <div className="App">
      <input onChange={onChange} type="text" placeholder="Write your to do..." />
    </div>
  );
}

export default App;
