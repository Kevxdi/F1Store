/**
 * CAPA CORE - STORAGE
 * Gestiona todo lo relacionado con localStorage
 */

const Storage = {
  // Guardar productos
  saveProductos(productos) {
    localStorage.setItem('productos', JSON.stringify(productos));
  },

  // Cargar productos
  loadProductos() {
    const data = localStorage.getItem('productos');
    return data ? JSON.parse(data) : null;
  },

  // Guardar comentarios
  saveComentarios(comentarios) {
    localStorage.setItem('comentarios', JSON.stringify(comentarios));
  },

  // Cargar comentarios
  loadComentarios() {
    const data = localStorage.getItem('comentarios');
    return data ? JSON.parse(data) : null;
  },

  // Limpiar todo
  clearAll() {
    localStorage.clear();
  }
};
