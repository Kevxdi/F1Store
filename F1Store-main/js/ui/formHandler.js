/**
 * FORMULARIOS
 * Maneja los event listeners de los formularios
 */

const FormHandler = {
  // Configurar formulario de productos
  setupProductForm() {
    document.getElementById('formProducto').addEventListener('submit', (e) => {
      e.preventDefault();

      const nombre = document.getElementById('nombre').value;
      const descripcion = document.getElementById('descripcion').value;
      const precio = document.getElementById('precio').value;
      const categoria = document.getElementById('categoria').value;
      const imagen = document.getElementById('imagen').value;

      // Agregar producto
      ProductManager.add(nombre, descripcion, precio, categoria, imagen);

      // Actualizar UI
      ProductUI.refresh();

      // Limpiar formulario
      document.getElementById('formProducto').reset();
      alert('✅ Producto agregado correctamente');
    });
  },

  // Configurar formulario de comentarios
  setupCommentForm() {
    document.getElementById('formComentario').addEventListener('submit', (e) => {
      e.preventDefault();

      const nombre = document.getElementById('nombreComentario').value;
      const texto = document.getElementById('textoComentario').value;

      // Agregar comentario
      CommentManager.add(nombre, texto);

      // Actualizar UI
      CommentUI.refresh();

      // Limpiar formulario
      document.getElementById('formComentario').reset();
    });
  }
};
