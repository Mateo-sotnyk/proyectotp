import React, { useState } from "react";
import "../styles/pages/Login.css"; // estilos extra
import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap
import "bootstrap-icons/font/bootstrap-icons.css"; // iconos bootstrap

function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Usuario:", usuario, "Contraseña:", password);
    // lógica de login
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 login-bg">
      <div className="shadow-lg p-4 bg-white rounded-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Iniciar sesión</h2>

<p className="text-center text-muted mb-3"> Usuario de admin: <strong>johnd</strong>  </p>
        <p className="text-center text-muted mb-3">Contraseña de admin: <strong>m38rmF$</strong></p>


        <form onSubmit={handleLogin}>
          <div className="input-group mb-3">
            <span className="input-group-text bg-light border-0">
              <i className="bi bi-person"></i>
            </span>
            <input
              type="text"
              className="form-control border-0 bg-light"
              placeholder="Usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text bg-light border-0">
              <i className="bi bi-lock"></i>
            </span>
            <input
              type="password"
              className="form-control border-0 bg-light"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn btn-primary btn-lg w-100 shadow-sm" type="submit">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;