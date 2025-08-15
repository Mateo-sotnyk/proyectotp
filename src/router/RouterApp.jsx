// src/router/RouterApp.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { Dashboard } from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { NotFound } from "../pages/NotFound";
import { PrivateRoute } from "../components/PrivateRoute";
import AboutUs from "../pages/AboutUs";
import ErrorBoundary from "../components/ErrorBoundary";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/registrate" element={<Register />} />
          <Route path="/sobre-nosotros" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export { RouterApp };
