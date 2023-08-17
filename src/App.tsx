import NavBar from './components/NavBar';
import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.container}>
      <header className="App-header">
        <NavBar />
      </header>
    </div>
  );
}

export default App;
