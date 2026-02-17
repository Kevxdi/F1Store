/**
 * UI DE PRODUCTOS
 * Renderizar y actualizar productos en el DOM
 */

const ProductUI = {
  // Renderizar todos los productos
  render() {
    const productosSection = document.querySelector('.productos');
    productosSection.innerHTML = '';

    ProductManager.getAll().forEach(producto => {
      const div = document.createElement('div');
      div.classList.add('producto');
      div.dataset.category = producto.category;
      div.id = `producto-${producto.id}`;

      div.innerHTML = `
        <img src="${producto.image}" alt="${producto.alt}">
        <div class="info">
          <h2>${producto.name}</h2>
          <p>${producto.description}</p>
          <span>${producto.price}</span>
          <button class="btn-eliminar-producto" onclick="ProductUI.delete(${producto.id})">🗑️ Eliminar</button>
        </div>
      `;

      productosSection.appendChild(div);
    });
  },

  // Eliminar producto (llamado desde el botón)
  delete(id) {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      ProductManager.delete(id);
      this.render();
      FilterUI.setup();
    }
  },

  // Actualizar vista después de agregar
  refresh() {
    this.render();
    FilterUI.setup();
  }
};
