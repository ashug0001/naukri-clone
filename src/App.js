import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import SignUp from "./pages/SignUp";

import { Layout } from "./components";
import PostJob from "./pages/PostJob";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/post-job" element={<PostJob />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
