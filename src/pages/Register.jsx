import React, { useState } from "react";
import { Layout } from "../components/Layout";
import "../styles/pages/Register.css";
import { useAuth } from "../context/UserContext"; 

function Register() {
  const { register } = useAuth();
  const [usuario, setUsuario] = useState("johnd");
  const [password, setPassword] = useState("m38rmF$");

  const handleRegister = (e) => {
    e.preventDefault();
    
     const newUser = {
      email: "ej@gmail.com",
      username: usuario,
      password: password,
      name: {
        firstname: "Nombre",
        lastname: "Apellido",
      },
      address: {
        city: "Buenos Aires",
        street: "san martin",
        number: 123,
        zipcode: "1000",
        geolocation: { lat: "-37.3567", long: "81.9076" },
      },
      phone: "5412345678",
    };

    register(newUser)
      .then((ok) => {
        if (ok) {
         alert("Registrado exitosamente");
       } else {
      alert("Error en el registro, intente denuevo");
       }
    })
      .catch((err) => {
      console.error("Algo fallo en el registro:", err);
      alert("Ocurrio un problema");
    });
  };

    return (
    <Layout background="login-bg">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="shadow-lg p-4 bg-white rounded-4 fade-slide-in" style={{ maxWidth: "400px", width: "100%" }}>
          <h2 className="text-center mb-4">Registrarse</h2>
          <p className="text-center text-muted mb-2">Usuario de prueba: <strong>johnd</strong></p>
          <p className="text-center text-muted mb-3">Contraseña de prueba: <strong>m38rmF$</strong></p>

          <form onSubmit={handleRegister}>
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
              Crear cuenta
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
