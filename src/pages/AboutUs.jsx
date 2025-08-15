import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import "../styles/pages/AboutUs.css";

const AboutUs = () => {
  return (
    <Layout background="aboutus-bg">
      <div className="aboutus-container">
        <div className="aboutus-card">
          <div className="aboutus-header">
            <i className="bi bi-info-circle"></i>
            <h3>Sobre Nosotros</h3>
            <div className="underline"></div>
            <p>¡Hola! Te contamos un poco sobre quiénes somos y qué hacemos.</p>
          </div>

          <div className="aboutus-section">
            <h5><i className="bi bi-lightbulb"></i> ¿Qué hacemos?</h5>
            <p>
              Creamos una plataforma súper sencilla para que puedas ver y gestionar productos sin complicaciones. La idea es que encuentres lo que buscas rápido y sin vueltas.
            </p>
          </div>

          <div className="aboutus-section">
            <h5><i className="bi bi-people"></i> ¿Para quién es esto?</h5>
            <p>
              Para todos: emprendedores que quieren mostrar su catálogo y para cualquiera que quiera descubrir productos nuevos de forma fácil y divertida.
            </p>
          </div>

          <div className="aboutus-section">
            <h5><i className="bi bi-gear"></i> Tecnología que usamos</h5>
            <p>
              Todo está hecho con <strong>React</strong> y <strong>Bootstrap 5</strong>. Usamos <strong>React Router</strong> para moverte entre páginas y <strong>Hooks</strong> para que todo funcione rápido.
            </p>
          </div>

          <div className="text-center mt-4">
            <Link to="/" className="aboutus-btn">
              <i className="bi bi-arrow-left me-2"></i> Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
