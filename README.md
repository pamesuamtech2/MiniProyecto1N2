# 🛍️ LUXE - E-commerce Frontend Project

Este proyecto es una aplicación web de comercio electrónico (E-commerce) construida con React y Tailwind CSS, que consume datos en tiempo real de la [FakeStore API](https://fakestoreapi.com/). 

El objetivo principal de este proyecto es demostrar el dominio de conceptos fundamentales y avanzados de React, incluyendo enrutamiento, consumo de APIs, manejo de estados (locales y globales) y diseño responsivo.

---

## 🎯 Cumplimiento de Requisitos Obligatorios

Este proyecto cumple al 100% con los requerimientos establecidos en las instrucciones originales:

1. **Consumo de API:** Se integró la FakeStore API utilizando un Custom Hook (`useFetchProducts`) para mantener el código limpio y reutilizable.
2. **Navegación y Rutas:** Se implementó `react-router-dom` para manejar la navegación sin recargar la página.
   - Ruta principal (`/`) con el catálogo completo.
   - Rutas dinámicas por categoría (`/products/category/:category`).
   - Rutas dinámicas de detalles de producto (`/products/:id`).
   - Ruta de error (`*`) para páginas no encontradas (404).
3. **Buscador Funcional:** Se creó un componente de búsqueda interactivo. Se aplicó el concepto de **"Elevación de Estado" (Lifting State Up)** hacia el componente principal (`App.jsx`) para comunicar el `Header` con la vista `Home` y filtrar los productos en tiempo real.
4. **Manejo de Estados de Petición:** Se manejan y visualizan correctamente los 3 estados de una promesa HTTP:
   - **Cargando (Loading):** Implementación de un Spinner visual mientras se obtienen los datos.
   - **Éxito (Success):** Renderizado de la cuadrícula de productos.
   - **Error:** Pantalla amigable de error con opción para reintentar la conexión si la API falla.

---

## ⭐ Elementos Extra y Funcionalidades Avanzadas (Bonus)

Para llevar el proyecto al nivel de una aplicación profesional real, se diseñaron e implementaron las siguientes características adicionales:

* **Carrito de Compras (Context API):** Se implementó un estado global utilizando `createContext` y `useContext` (`CartContext.jsx`). Esto permite agregar productos desde cualquier tarjeta y actualizar el contador en el menú principal al instante.
* **Persistencia de Datos (LocalStorage):** Se integró el hook `useEffect` en el Contexto del carrito para guardar los productos en la memoria del navegador. ¡El carrito sobrevive a las recargas de página!
* **Dropdown Interactivo:** El carrito no es solo un contador; al hacer clic, despliega un menú flotante que lista los productos seleccionados, calcula el precio total automáticamente y permite eliminar productos individualmente.
* **Diseño UI/UX Profesional con Tailwind CSS:** - **Hero Section:** Banner promocional inmersivo en la página principal.
  - **Product Cards:** Tarjetas rediseñadas que incluyen la categoría, truncado de texto inteligente para mantener la simetría y calificación en estrellas (Rating) extraída de la API.
  - **Footer:** Pie de página completo con enlaces y estructura de grid.
  - **Animaciones y Transiciones:** Efectos *hover* suaves en botones y tarjetas de productos.

---

## 🛠️ Tecnologías Utilizadas

* **React 18** (Librería principal)
* **Vite** (Entorno de desarrollo rápido)
* **Tailwind CSS** (Framework de estilos de utilidad)
* **React Router DOM** (Gestor de rutas)
* **