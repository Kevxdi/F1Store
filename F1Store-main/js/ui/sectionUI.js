/**
 * LÓGICA DE SECCIONES
 * Maneja el mostrar/ocultar secciones de Agregar Producto y Comentarios
 */

const SectionUI = {
  // Mostrar/ocultar secciones
  show(seccionName) {
    // Ocultar todas
    document.getElementById('seccion-agregar').style.display = 'none';
    document.getElementById('seccion-comentarios').style.display = 'none';

    // Quitar active de botones
    document.querySelectorAll('.btn-seccion').forEach(btn => {
      btn.classList.remove('active');
    });

    // Mostrar sección seleccionada
    if (seccionName === 'agregar') {
      document.getElementById('seccion-agregar').style.display = 'block';
      document.querySelector('[data-seccion="agregar"]').classList.add('active');
    } else if (seccionName === 'comentarios') {
      document.getElementById('seccion-comentarios').style.display = 'block';
      document.querySelector('[data-seccion="comentarios"]').classList.add('active');
    }
  },

  // Configurar event listeners de botones de secciones
  setupButtons() {
    document.querySelectorAll('.btn-seccion').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.show(e.target.dataset.seccion);
      });
    });
  }
};
