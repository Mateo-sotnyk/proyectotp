import React, { useState } from "react";
import { Layout } from "../components/Layout";
import "../styles/pages/Login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";

function Login() {
  const [usuario, setUsuario] = useState("johnd");
  const [password, setPassword] = useState("m38rmF$");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await login(usuario, password);
    if (success) navigate("/");
    else alert("Usuario o contraseña incorrectos");
  };

  return (
    <Layout background="login-bg">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="shadow-lg p-4 bg-white rounded-4 fade-slide-in" style={{ maxWidth: "400px", width: "100%" }}>
          <h2 className="text-center mb-4">Iniciar sesión</h2>
          <p className="text-center text-muted mb-3">Usuario de prueba: <strong>johnd</strong></p>
          <p className="text-center text-muted mb-3">Contraseña de prueba: <strong>m38rmF$</strong></p>

          <form onSubmit={handleLogin}>
            <div className="input-group mb-3">
              <span className="input-group-text bg-light border-0">
                <i className="bi bi-person"></i>
              </span>
              <input type="text" className="form-control border-0 bg-light" placeholder="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text bg-light border-0">
                <i className="bi bi-lock"></i>
              </span>
              <input type="password" className="form-control border-0 bg-light" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="btn btn-primary btn-lg w-100 shadow-sm" type="submit">
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Login;