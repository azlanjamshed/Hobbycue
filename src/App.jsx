import JoinIn from "./components/Joinin";
import SignIn from "./components/Signin";
import Home from "./pages/Home";
import AuthForm from "./section/AuthForm";
import { Navigate } from "react-router-dom";
import { Route, Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/joinin" element={<JoinIn />} />
      </Routes>
    </>
  );
};

export default App;
