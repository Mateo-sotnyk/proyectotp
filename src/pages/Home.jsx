import { useEffect, useState } from "react"
import { useAuth } from "../context/UserContext"
import { Layout } from "../components/Layout"

const Home = () => {
  const [products, setProducts] = useState([])
  const [showPopup, setShowPopup] = useState(null)
  const [productToEdit, setProductToEdit] = useState(null)
  const [titleEdit, setTitleEdit] = useState("")
  const [priceEdit, setPriceEdit] = useState("")
  const [descriptionEdit, setDescriptionEdit] = useState("")
  const [categoryEdit, setCategoryEdit] = useState("")
  const [imageEdit, setImageEdit] = useState("")

  const { user } = useAuth()

  // Función para traer productos desde la API
  const fetchingProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    setProducts(data)
  }

  // Se ejecuta al montar el componente
  useEffect(() => {
    fetchingProducts()
  }, [])

  const handleDelete = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, { method: "DELETE" })
    if (response.ok) {
      setProducts(prev => prev.filter(product => product.id !== id))
    }
  }

  const handleOpenEdit = (product) => {
    setShowPopup(true)
    setProductToEdit(product)
    setTitleEdit(product.title)
    setPriceEdit(product.price)
    setDescriptionEdit(product.description)
    setCategoryEdit(product.category)
    setImageEdit(product.image)
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    const updatedProduct = {
      id: productToEdit.id,
      title: titleEdit,
      price: Number(priceEdit),
      description: descriptionEdit,
      category: categoryEdit,
      image: imageEdit
    }

    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productToEdit.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct)
      })
      if (response.ok) {
        const data = await response.json()
        setProducts(prev =>
          prev.map(product => product.id === productToEdit.id ? data : product)
        )
      }
      setShowPopup(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      <section>
        <h1>Bienvenido a Nuestra Tienda</h1>
        <p>Descubrí una selección exclusiva de productos para vos. Calidad, confianza y atención personalizada.</p>
      </section>

      <section>
        <h2>Nuestros productos</h2>
        <div className="row">
          {products.map(product => (
            <div key={product.id} className="col-12 col-md-4 col-lg-3 mb-4">
              <div className="card h-100">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                  <p className="card-text">{product.description}</p>
                  <p><strong>{product.category}</strong></p>
                  {user && (
                    <div className="d-flex gap-2 mt-2">
                      <button className="btn btn-warning btn-sm" onClick={() => handleOpenEdit(product)}>Actualizar</button>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(product.id)}>Borrar</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {showPopup && (
        <section className="popup-edit">
          <h2>Editando producto</h2>
          <button className="btn btn-secondary" onClick={() => setShowPopup(null)}>Cerrar</button>
          <form onSubmit={handleUpdate} className="d-flex flex-column gap-2 mt-2">
            <input type="text" placeholder="Ingrese el titulo" value={titleEdit} onChange={(e) => setTitleEdit(e.target.value)} />
            <input type="number" placeholder="Ingrese el precio" value={priceEdit} onChange={(e) => setPriceEdit(e.target.value)} />
            <textarea placeholder="Ingrese la descripción" value={descriptionEdit} onChange={(e) => setDescriptionEdit(e.target.value)}></textarea>
            <input type="text" placeholder="Ingrese la categoria" value={categoryEdit} onChange={(e) => setCategoryEdit(e.target.value)} />
            <input type="text" placeholder="Ingrese la URL de la imagen" value={imageEdit} onChange={(e) => setImageEdit(e.target.value)} />
            <button className="btn btn-primary">Actualizar</button>
          </form>
        </section>
      )}
    </Layout>
  )
}

export { Home }
