import Login from "./pages/Login/Login";
import { useAuthState } from "context/auth";
import { Routes, Route, Router, Navigate } from "react-router-dom";
import Layout from "layout/Layout";
import Home from "pages/Home/Home";

function App() {
  const { loggedIn } = useAuthState();

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
