/**
 * LÓGICA DE PRODUCTOS
 * Funciones de negocio: agregar, eliminar, filtrar
 */

const ProductManager = {
  // Agregar nuevo producto
  add(nombre, descripcion, precio, categoria, imagen) {
    const nuevoId = Math.max(...productos.map(p => p.id), 0) + 1;

    const nuevoProducto = {
      id: nuevoId,
      category: categoria,
      name: nombre,
      description: descripcion,
      price: precio,
      image: imagen,
      alt: nombre
    };

    productos.push(nuevoProducto);
    Storage.saveProductos(productos);
    return nuevoProducto;
  },

  // Eliminar producto
  delete(id) {
    productos = productos.filter(p => p.id !== id);
    Storage.saveProductos(productos);
  },

  // Obtener todos los productos
  getAll() {
    return productos;
  },

  // Obtener producto por ID
  getById(id) {
    return productos.find(p => p.id === id);
  },

  // Filtrar por categoría
  filterByCategory(category) {
    if (category === 'all') return productos;
    return productos.filter(p => p.category === category);
  }
};
