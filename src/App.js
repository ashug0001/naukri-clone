import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import SignUp from "./pages/SignUp";

import { AuthRoute, Layout, ProtectedRoutes } from "./components";
import PostJob from "./pages/PostJob";
import Posts from "./pages/Posts";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <AuthRoute>
                <Login />
              </AuthRoute>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <ProtectedRoutes>
                <ForgotPassword />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/reset-password"
            element={
              <ProtectedRoutes>
                <ResetPassword />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthRoute>
                <SignUp />
              </AuthRoute>
            }
          />
          <Route
            path="/posts"
            element={
              <ProtectedRoutes>
                <Posts />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/post-job"
            element={
              <ProtectedRoutes>
                <PostJob />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
