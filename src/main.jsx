import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterApp } from "./router/RouterApp.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import "./index.css"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <RouterApp />
    </UserProvider>
  </StrictMode>
);
