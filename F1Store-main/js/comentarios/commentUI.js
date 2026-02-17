/**
 * UI DE COMENTARIOS
 * Renderizar y actualizar comentarios en el DOM
 */

const CommentUI = {
  // Renderizar todos los comentarios
  render() {
    const listaComentarios = document.getElementById('listaComentarios');
    listaComentarios.innerHTML = '';

    const comentariosList = CommentManager.getAll();

    if (comentariosList.length === 0) {
      listaComentarios.innerHTML = '<p class="sin-comentarios">No hay comentarios aún. ¡Sé el primero!</p>';
      return;
    }

    comentariosList.forEach(comentario => {
      const div = document.createElement('div');
      div.classList.add('comentario');
      div.id = `comentario-${comentario.id}`;

      div.innerHTML = `
        <div class="comentario-header">
          <strong>${comentario.nombre}</strong>
          <span class="fecha">${comentario.fecha}</span>
        </div>
        <p class="comentario-texto">${comentario.texto}</p>
        <button class="btn-eliminar" onclick="CommentUI.delete(${comentario.id})">Eliminar</button>
      `;

      listaComentarios.appendChild(div);
    });
  },

  // Eliminar comentario (llamado desde el botón)
  delete(id) {
    CommentManager.delete(id);
    this.render();
  },

  // Actualizar vista después de agregar
  refresh() {
    this.render();
  }
};
