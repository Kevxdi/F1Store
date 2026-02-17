/**
 * DATOS DE PRODUCTOS
 * Contiene los datos iniciales y estructura de productos
 */

const PRODUCTOS_INICIALES = [
  {
    id: 1,
    category: 'ropa',
    name: 'Camiseta Ferrari',
    description: 'Diseño oficial 2025. 100% algodón.',
    price: '$120.000',
    image: 'https://driver1.com/cdn/shop/files/CamisetaPoloFerrariOficial2025.png?v=1739544819&width=700',
    alt: 'Camiseta Ferrari'
  },
  {
    id: 2,
    category: 'ropa',
    name: 'Camiseta Aston Martin',
    description: 'Diseño oficial 2025. 100% algodón.',
    price: '$120.000',
    image: 'https://timerelojes.com/wp-content/uploads/2025/06/43ef54fe-6d2d-4b9b-a7e4-e235bf9d2757-min-768x768.png',
    alt: 'Camiseta Aston Martin'
  },
  {
    id: 3,
    category: 'lego',
    name: 'Lego McLaren F1',
    description: 'Edición especial de 1.400 piezas.',
    price: '$450.000',
    image: 'https://tiendalego.com.co/cdn/shop/products/42141_717x717.jpg?v=1651519971',
    alt: 'Lego McLaren F1'
  },
  {
    id: 4,
    category: 'lego',
    name: 'Lego Senna F1',
    description: 'Edición especial de 1.400 piezas.',
    price: '$450.000',
    image: 'https://tiendalego.com.co/cdn/shop/products/LEGO_Icons_McLaren_MP4_4_y_Ayrton_Senna_10330_Set_Coleccionable_para_Adultos_851x851.jpg?v=1767985702',
    alt: 'Lego Senna McLaren F1'
  },
  {
    id: 5,
    category: 'merch',
    name: 'Lewis Hamilton 2025 F1',
    description: 'Escala 1:2, edición limitada.',
    price: '$180.000',
    image: 'https://www.bellcollectibles.com/wp-content/uploads/2025/08/LEWIS-HAMILTON-2025-Mini-1-768x768.png',
    alt: 'Casco Hamilton'
  },
  {
    id: 6,
    category: 'merch',
    name: 'Ayrton Senna',
    description: 'Escala 1:2, edición limitada.',
    price: '$150.000',
    image: 'https://www.bellcollectibles.com/wp-content/uploads/2024/11/SENNA-30-YEARS-MINI-01-1-1024x1024.webp',
    alt: 'Casco Senna'
  }
];

// Estado global de productos
let productos = [];

// Inicializar productos
function initProductos() {
  const productosGuardados = Storage.loadProductos();
  productos = productosGuardados || PRODUCTOS_INICIALES;
  return productos;
}
