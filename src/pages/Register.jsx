import React, { useState } from "react";
import "../styles/pages/Login.css"; // reutilizamos los mismos estilos
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Register() {
  const [usuario, setUsuario] = useState("johnd"); // valor por defecto
  const [password, setPassword] = useState("m38rmF$"); // valor por defecto

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Usuario:", usuario, "Contraseña:", password);
    // lógica de registro
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 login-bg">
      <div className="shadow-lg p-4 bg-white rounded-4 login-card" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Registrarse</h2>

        <p className="text-center text-muted mb-3"> Usuario de admin: <strong>johnd</strong>  </p>
        <p className="text-center text-muted mb-3">Contraseña de admin: <strong>m38rmF$</strong></p>

        <form onSubmit={handleRegister}>
          <div className="input-group mb-3">
            <span className="input-group-text bg-light border-0">
              <i className="bi bi-person"></i>
            </span>
            <input
              type="text"
              className="form-control border-0 bg-light input-rounded-right"
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
              className="form-control border-0 bg-light input-rounded-right"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn btn-primary btn-lg w-100 shadow-sm login-button" type="submit">
            Crear cuenta
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
