import NavBar from "./components/NavBar";
import styles from "./App.module.css";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  return (
    <div className={styles.container}>
      {/* <NavBar /> */}
      <LoginForm />
    </div>
  );
}

export default App;
