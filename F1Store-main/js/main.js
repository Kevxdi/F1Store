/**
 * MAIN - INICIALIZADOR PRINCIPAL
 * Orquesta la inicialización de toda la aplicación
 * 
 * Arquitectura Feature-Based:
 * - core/: Lógica compartida (localStorage)
 * - productos/: Feature de productos
 * - comentarios/: Feature de comentarios
 * - ui/: Componentes UI generales
 */

// Evento: Cuando carga el DOM, inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializar datos
  initProductos();
  initComentarios();

  // 2. Renderizar UI inicial
  ProductUI.render();
  CommentUI.render();

  // 3. Configurar filtros
  FilterUI.setup();

  // 4. Configurar formularios
  FormHandler.setupProductForm();
  FormHandler.setupCommentForm();

  // 5. Configurar secciones
  SectionUI.setupButtons();
  SectionUI.show('agregar'); // Mostrar sección de agregar por defecto
});