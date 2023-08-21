import Login from "./pages/Login/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "layout/Layout";
import Home from "pages/Home/Home";
import { useSelector } from "react-redux";
import { RootState } from "store";

function App() {
  const { loggedIn } = useSelector((state: RootState) => state.auth);

  return (
    <Routes>
      <Route
        path="/"
        element={!loggedIn ? <Navigate to={"/login"} replace /> : <Layout />}
      >
        <Route index element={<Home />} />
      </Route>
      <Route
        path="/login"
        element={!loggedIn ? <Login /> : <Navigate to={"/"} replace />}
      />
    </Routes>
  );
}

export default App;
