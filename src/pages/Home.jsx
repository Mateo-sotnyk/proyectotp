import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { useAuth } from "../context/UserContext";
import { Search } from "../components/Search"; 
import "../styles/pages/Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [showPopup, setShowPopup] = useState(null);
  const [productToEdit, setProductToEdit] = useState(null);
  const [titleEdit, setTitleEdit] = useState("");
  const [priceEdit, setPriceEdit] = useState("");
  const [descriptionEdit, setDescriptionEdit] = useState("");
  const [categoryEdit, setCategoryEdit] = useState("");
  const [imageEdit, setImageEdit] = useState("");

  const { user } = useAuth();

  useEffect(() => {
    const fetchingProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchingProducts();
  }, []);

  const handleDelete = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, { method: "DELETE" });
    if (response.ok) setProducts(prev => prev.filter(p => p.id !== id));
  };

  const handleOpenEdit = (product) => {
    setShowPopup(true);
    setProductToEdit(product);
    setTitleEdit(product.title);
    setPriceEdit(product.price);
    setDescriptionEdit(product.description);
    setCategoryEdit(product.category);
    setImageEdit(product.image);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedProduct = {
      id: productToEdit.id,
      title: titleEdit,
      price: Number(priceEdit),
      description: descriptionEdit,
      category: categoryEdit,
      image: imageEdit
    };

    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productToEdit.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct)
      });

      if (response.ok) {
        const data = await response.json();
        setProducts(prev => prev.map(p => p.id === productToEdit.id ? data : p));
      }
      setShowPopup(false);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="home-bg min-vh-100 w-100 py-5">
        <section className="text-center mb-5">
          <h1>Bienvenido a Nuestra Tienda</h1>
          <div className="cards-container">
            <div className="benefit-card">
              <h3>Envíos a domicilio</h3>
              <p>Desde el local a tu casa.</p>
            </div>
            <div className="benefit-card">
              <h3>Pagos fáciles</h3>
              <p>Aceptamos todos los medios de pago.</p>
            </div>
            <div className="benefit-card">
              <h3>Atención al cliente</h3>
              <p>Profesionales aconsejándote en cada momento.</p>
            </div>
          </div>
        </section>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <section className="products-section text-center">
          <h2 className="mb-4">Nuestros productos</h2>

          {showPopup && (
            <section className="popup-edit">
              <h2>Editando producto</h2>
              <button onClick={() => setShowPopup(null)}>Cerrar</button>
              <form onSubmit={handleUpdate}>
                <input type="text" placeholder="Título" value={titleEdit} onChange={e => setTitleEdit(e.target.value)} />
                <input type="number" placeholder="Precio" value={priceEdit} onChange={e => setPriceEdit(e.target.value)} />
                <textarea placeholder="Descripción" value={descriptionEdit} onChange={e => setDescriptionEdit(e.target.value)}></textarea>
                <input type="text" placeholder="Categoría" value={categoryEdit} onChange={e => setCategoryEdit(e.target.value)} />
                <input type="text" placeholder="URL Imagen" value={imageEdit} onChange={e => setImageEdit(e.target.value)} />
                <button>Actualizar</button>
              </form>
            </section>
          )}

          <div className="products-container">
            {filteredProducts.map(product => (
              <div className="card product-card" key={product.id}>
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p><strong>Precio:</strong> ${product.price}</p>
                  <p><strong>Categoría:</strong> {product.category}</p>
                  {user && (
                    <div className="d-flex gap-2 justify-content-center">
                      <button className="btn btn-warning" onClick={() => handleOpenEdit(product)}>Actualizar</button>
                      <button className="btn btn-danger" onClick={() => handleDelete(product.id)}>Borrar</button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;