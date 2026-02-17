/**
 * LÓGICA DE COMENTARIOS
 * Funciones de negocio: agregar, eliminar comentarios
 */

const CommentManager = {
  // Agregar nuevo comentario
  add(nombre, texto) {
    const fecha = new Date().toLocaleDateString('es-ES');

    const nuevoComentario = {
      id: Date.now(),
      nombre,
      texto,
      fecha
    };

    comentarios.unshift(nuevoComentario); // Al inicio
    Storage.saveComentarios(comentarios);
    return nuevoComentario;
  },

  // Eliminar comentario
  delete(id) {
    comentarios = comentarios.filter(c => c.id !== id);
    Storage.saveComentarios(comentarios);
  },

  // Obtener todos los comentarios
  getAll() {
    return comentarios;
  },

  // Obtener comentario por ID
  getById(id) {
    return comentarios.find(c => c.id === id);
  }
};
