import Button from './Button';
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <h1 className={styles.title}>Welcome to React!</h1>
      <Button text="Tour of CRA" />
    </div>
  );
}

export default App;
