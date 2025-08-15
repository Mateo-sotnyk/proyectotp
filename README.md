# Trabajo Final - Panel de Administración y Tienda

## Índice
1. Objetivo general
2. Funcionalidades implementadas
3. Tecnologías utilizadas
4. Instrucciones para ejecutar localmente
5. Sobre el proyecto
6. API utilizada
7. Licencia

---

## Objetivo general
Desarrollar una plataforma web en React que simula una tienda online con un panel de administración para gestionar productos (agregar, editar, eliminar) de forma sencilla y accesible. La plataforma permite mostrar productos obtenidos de una API externa y también agregar productos manualmente en memoria local, ofreciendo una experiencia fluida y amigable para usuarios y emprendedores.

---

## Funcionalidades implementadas
- Listado de productos obtenidos desde la Fake Store API.
- Búsqueda en tiempo real para filtrar productos mientras el usuario escribe.
- Agregar productos manualmente, guardados en la memoria local de la aplicación.
- Vista previa del producto antes de confirmar su guardado.
- Edición y eliminación de productos existentes.
- Imagen por defecto (placeholder) cuando no se proporciona una URL válida.
- Redirección automática a la página principal tras agregar un producto.
- Footer fijo al final de la página y Header correctamente posicionado.
- Navegación fluida con React Router DOM.
- Validación de formularios con mensajes claros de UX.
- Diseño moderno y adaptable con Bootstrap 5.
- Uso de componentes reutilizables y manejo eficiente del estado con Hooks de React.

---

## Tecnologías utilizadas
- React (creado con Vite)
- Bootstrap 5 para estilos y diseño responsivo
- React Router DOM para navegación SPA
- Context API para manejo global de usuario
- React Icons para iconografía
- Fake Store API como fuente de datos inicial

---

## Instrucciones para ejecutar localmente
1. Clonar el repositorio:

```bash
git clone https://github.com/tuusuario/Trabajo-final.git
cd Trabajo-final

Instalar dependencias:

npm install


Iniciar el servidor de desarrollo:

npm run dev


Abrir el proyecto en el navegador en la URL que indique Vite, típicamente:

http://localhost:5173/