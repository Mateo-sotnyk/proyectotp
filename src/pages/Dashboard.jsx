import { useState } from "react";
import { Layout } from "../components/Layout";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!name || !price || !description) {
      setError("Debes completar todos los campos");
      return;
    }

    if (name.length < 3) {
      setError("El nombre debe tener al menos 4 caracteres");
      return;
    }

    const newProduct = {
      id: crypto.randomUUID(),
      title: name,
      price: price,
      description: description,
      category: "",
      image: ""
    };

    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct)
    });

    const data = await response.json();
    setProduct(data);
    setName("");
    setPrice("");
    setDescription("");
  };

  return (
    <Layout>
      <h1>Panel de Administración</h1>

      <section>
        <h2>Cargar nuevo producto</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre del producto:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Precio:</label>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
          <div>
            <label>Descripción:</label>
            <textarea rows="4" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>

          {error && <p className="error">{error}</p>}

          <button>Guardar producto</button>
        </form>

        {product && (
          <div>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p>{product.description}</p>
          </div>
        )}
      </section>
    </Layout>
  );
};

export { Dashboard };