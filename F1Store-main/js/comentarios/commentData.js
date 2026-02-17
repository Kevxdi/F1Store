/**
 * DATOS DE COMENTARIOS
 * Contiene el estado global de comentarios
 */

let comentarios = [];

// Inicializar comentarios
function initComentarios() {
  const comentariosGuardados = Storage.loadComentarios();
  comentarios = comentariosGuardados || [];
  return comentarios;
}
