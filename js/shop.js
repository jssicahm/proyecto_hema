/* 
    Añadir productos al carrito:
    Al hacer click en algún .Description-button--buy:
        1. obtener el producto a paertir del id del atributo value del .Description-button--buy
        2. añadir el producto al carrito usando localStorage
        3. añadir la clase isVisible a .Alert
        4. quitarle la clase isVisible a .Alert pasados 1500ms
    PD: me apoyé en documentación de Internet para hacerlo usando localStorage
 */
(() => {

    // Constantes
    const products_list = [
        {
            id: 1,
            nombre: 'Top Crochet Sol',
            descripcion: 'Un top a crochet inspirado en el sol, perfecto para el verano. Un top a crochet inspirado en el sol, perfecto para el verano. Un top a crochet inspirado en el sol, perfecto para el verano. Un top a crochet inspirado en el sol, perfecto para el verano. Un top a crochet inspirado en el sol, perfecto para el verano. Un top a crochet inspirado en el sol, perfecto para el verano.',
            precio: 25.00,
            small_imgs_jpeg: "../assets/products/small/product_01_01.jpeg",
            small_imgs_webp: "../assets/products/small/product_01_01.webp",
            medium_imgs_jpeg: "../assets/products/medium/product_01_01.jpeg",
            medium_imgs_webp: "../assets/products/medium/product_01_01.webp",
            large_imgs_jpeg: "../assets/products/large/product_01_01.jpeg",
            large_imgs_webp: "../assets/products/large/product_01_01.webp",
            rebajas: true,
            novedades: false,
            exitos: true
        },
        {
            id: 2,
            nombre: 'Top Crochet Luna',
            descripcion: 'Elegante top a crochet con un diseño lunar.',
            precio: 28.00,
            small_imgs_jpeg: "../assets/products/small/product_02_01.jpeg",
            small_imgs_webp: "../assets/products/small/product_02_01.webp",
            medium_imgs_jpeg: "../assets/products/medium/product_02_01.jpeg",
            medium_imgs_webp: "../assets/products/medium/product_02_01.webp",
            large_imgs_jpeg: "../assets/products/large/product_02_01.jpeg",
            large_imgs_webp: "../assets/products/large/product_02_01.webp",
            rebajas: true,
            novedades: false,
            exitos: true
        },
        {
            id: 3,
            nombre: 'Top Crochet Estrella',
            descripcion: 'Top a crochet con detalles de estrellas, ideal para noches especiales.',
            precio: 30.00,
            small_imgs_jpeg: "../assets/products/small/product_03_01.jpeg",
            small_imgs_webp: "../assets/products/small/product_03_01.webp",
            medium_imgs_jpeg: "../assets/products/medium/product_03_01.jpeg",
            medium_imgs_webp: "../assets/products/medium/product_03_01.webp",
            large_imgs_jpeg: "../assets/products/large/product_03_01.jpeg",
            large_imgs_webp: "../assets/products/large/product_03_01.webp",
            rebajas: true,
            novedades: false,
            exitos: true
        },
        {
            id: 4,
            nombre: 'Top Crochet Arcoíris',
            descripcion: 'Colorido top a crochet con patrón de arcoíris.',
            precio: 27.00,
            small_imgs_jpeg: "../assets/products/small/product_04_01.jpeg",
            small_imgs_webp: "../assets/products/small/product_04_01.webp",
            medium_imgs_jpeg: "../assets/products/medium/product_04_01.jpeg",
            medium_imgs_webp: "../assets/products/medium/product_04_01.webp",
            large_imgs_jpeg: "../assets/products/large/product_04_01.jpeg",
            large_imgs_webp: "../assets/products/large/product_04_01.webp",
            rebajas: true,
            novedades: false,
            exitos: true
        },
        {
            id: 5,
            nombre: 'Top Crochet Floral',
            descripcion: 'Top a crochet con hermosos motivos florales.',
            precio: 32.00,
            small_imgs_jpeg: "../assets/products/small/product_05_01.jpeg",
            small_imgs_webp: "../assets/products/small/product_05_01.webp",
            medium_imgs_jpeg: "../assets/products/medium/product_05_01.jpeg",
            medium_imgs_webp: "../assets/products/medium/product_05_01.webp",
            large_imgs_jpeg: "../assets/products/large/product_05_01.jpeg",
            large_imgs_webp: "../assets/products/large/product_05_01.webp",
            rebajas: true,
            novedades: true,
            exitos: true
        },
        {
            id: 6,
            nombre: 'Top Crochet Mariposa',
            descripcion: 'Top a crochet con diseño de mariposas, ideal para primavera.',
            precio: 29.00,
            small_imgs_jpeg: "../assets/products/small/product_06_01.jpeg",
            small_imgs_webp: "../assets/products/small/product_06_01.webp",
            medium_imgs_jpeg: "../assets/products/medium/product_06_01.jpeg",
            medium_imgs_webp: "../assets/products/medium/product_06_01.webp",
            large_imgs_jpeg: "../assets/products/large/product_06_01.jpeg",
            large_imgs_webp: "../assets/products/large/product_06_01.webp",
            rebajas: true,
            novedades: true,
            exitos: true
        },
        {
            id: 7,
            nombre: 'Top Crochet Oceano',
            descripcion: 'Un top a crochet con tonos y patrones inspirados en el océano.',
            precio: 33.00,
            small_imgs_jpeg: "../assets/products/small/product_07_01.jpeg",
            small_imgs_webp: "../assets/products/small/product_07_01.webp",
            medium_imgs_jpeg: "../assets/products/medium/product_07_01.jpeg",
            medium_imgs_webp: "../assets/products/medium/product_07_01.webp",
            large_imgs_jpeg: "../assets/products/large/product_07_01.jpeg",
            large_imgs_webp: "../assets/products/large/product_07_01.webp",
            rebajas: true,
            novedades: true,
            exitos: true
        },
        {
            id: 8,
            nombre: 'Top Crochet Selva',
            descripcion: 'Top a crochet con motivos de la selva, lleno de vida y color.',
            precio: 31.00,
            small_imgs_jpeg: "../assets/products/small/product_08_01.jpeg",
            small_imgs_webp: "../assets/products/small/product_08_01.webp",
            medium_imgs_jpeg: "../assets/products/medium/product_08_01.jpeg",
            medium_imgs_webp: "../assets/products/medium/product_08_01.webp",
            large_imgs_jpeg: "../assets/products/large/product_08_01.jpeg",
            large_imgs_webp: "../assets/products/large/product_08_01.webp",
            rebajas: true,
            novedades: true,
            exitos: true
        },
        {
            id: 9,
            nombre: 'Top Crochet Coral',
            descripcion: 'Top a crochet en colores coral, perfecto para el verano.',
            precio: 26.00,
            small_imgs_jpeg: "../assets/products/small/product_09_01.jpeg",
            small_imgs_webp: "../assets/products/small/product_09_01.webp",
            medium_imgs_jpeg: "../assets/products/medium/product_09_01.jpeg",
            medium_imgs_webp: "../assets/products/medium/product_09_01.webp",
            large_imgs_jpeg: "../assets/products/large/product_09_01.jpeg",
            large_imgs_webp: "../assets/products/large/product_09_01.webp",
            rebajas: false,
            novedades: true,
            exitos: false
        },
        {
            id: 10,
            nombre: 'Top Crochet Violeta',
            descripcion: 'Top a crochet en tonos violeta, elegante y sofisticado.',
            precio: 35.00,
            small_imgs_jpeg: "../assets/products/small/product_10_01.jpeg",
            small_imgs_webp: "../assets/products/small/product_10_01.webp",
            medium_imgs_jpeg: "../assets/products/medium/product_10_01.jpeg",
            medium_imgs_webp: "../assets/products/medium/product_10_01.webp",
            large_imgs_jpeg: "../assets/products/large/product_10_01.jpeg",
            large_imgs_webp: "../assets/products/large/product_10_01.webp",
            rebajas: false,
            novedades: true,
            exitos: false
        },
        {
            id: 11,
            nombre: 'Top Crochet Lavanda',
            descripcion: 'Un top a crochet suave y delicado en color lavanda.',
            precio: 34.00,
            small_imgs_jpeg: "../assets/products/small/product_11_01.jpeg",
            small_imgs_webp: "../assets/products/small/product_11_01.webp",
            medium_imgs_jpeg: "../assets/products/medium/product_11_01.jpeg",
            medium_imgs_webp: "../assets/products/medium/product_11_01.webp",
            large_imgs_jpeg: "../assets/products/large/product_11_01.jpeg",
            large_imgs_webp: "../assets/products/large/product_11_01.webp",
            rebajas: false,
            novedades: true,
            exitos: false
        },
        {
            id: 12,
            nombre: 'Top Crochet Esmeralda',
            descripcion: 'Top a crochet en color esmeralda, vibrante y llamativo.',
            precio: 36.00,
            small_imgs_jpeg: "../assets/products/small/product_12_01.jpeg",
            small_imgs_webp: "../assets/products/small/product_12_01.webp",
            medium_imgs_jpeg: "../assets/products/medium/product_12_01.jpeg",
            medium_imgs_webp: "../assets/products/medium/product_12_01.webp",
            large_imgs_jpeg: "../assets/products/large/product_12_01.jpeg",
            large_imgs_webp: "../assets/products/large/product_12_01.webp",
            rebajas: false,
            novedades: true,
            exitos: false
        }
    ]
    const buttons = document.querySelectorAll('.Button-buy')
    const alert = document.querySelector('.Alert')
  
    // Función Handler
    const handleClick = (button) => () => {
        
        const productIdString = button.getAttribute('value')
        const productId = parseInt(productIdString, 10)
        const product = products_list.find(product => product.id === productId)
  
        // localStorage.getItem('bag'): Recupera el valor almacenado en el localStorage bajo la clave 'bag'.
        // JSON.parse(...): Convierte el JSON almacenado en localStorage de nuevo a un objeto de JavaScript.
        let bag = JSON.parse(localStorage.getItem('bag')) || []
        bag.push(product)
        localStorage.setItem('bag', JSON.stringify(bag))

        alert.classList.add('isVisible')
        setTimeout(function() {
            alert.classList.remove('isVisible')
        }, 1500)
    }

    // Eventos
    buttons.forEach(button => {
      button.addEventListener('click', handleClick(button))
    })
  
})();
  
