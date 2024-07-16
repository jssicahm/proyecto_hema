/* 
    En product_details.js se encuentra:
        - todo lo referente a product_details.html
 */

/* 
    Añadir dinamicamente la información del producto correspondientes a partir de la URL, para ello:
        1. obtener el id del producto desde la URL
        2. buscar en products_list el objeto que coincida con el id obtenido
        3. actualizar los elementos de la página con la información del objeto
 */
(() => {

    // Constantes
    const products_list = [
        {
            id: 1,
            nombre: 'Top Crochet Sol',
            descripcion: 'Un top a crochet inspirado en el sol, perfecto para el verano.',
            precio: 25.00,
            small_imgs_jpeg: [
                "../assets/productos/small/jpeg/producto_01-01_300x420.jpeg",
                "../assets/productos/small/jpeg/producto_01-02_300x420.jpeg",
                "../assets/productos/small/jpeg/producto_01-03_300x420.jpeg",
            ],
            small_imgs_webp: [
                "../assets/productos/small/webp/producto_01-01_300x420.webp",
                "../assets/productos/small/webp/producto_01-02_300x420.webp",
                "../assets/productos/small/webp/producto_01-03_300x420.webp",
            ],
            medium_imgs_jpeg: [
                "../assets/productos/medium/jpeg/producto_01-01_600x840.jpeg",
                "../assets/productos/medium/jpeg/producto_01-02_600x840.jpeg",
                "../assets/productos/medium/jpeg/producto_01-03_600x840.jpeg",
            ],
            medium_imgs_webp: [
                "../assets/productos/medium/webp/producto_01-01_600x840.webp",
                "../assets/productos/medium/webp/producto_01-02_600x840.webp",
                "../assets/productos/medium/webp/producto_01-03_600x840.webp",
            ],
            large_imgs_jpeg: [
                "../assets/productos/large/jpeg/producto_01-01_800x1120.jpeg",
                "../assets/productos/large/jpeg/producto_01-02_800x1120.jpeg",
                "../assets/productos/large/jpeg/producto_01-03_800x1120.jpeg",
            ],
            large_imgs_webp: [
                "../assets/productos/large/webp/producto_01-01_800x1120.webp",
                "../assets/productos/large/webp/producto_01-02_800x1120.webp",
                "../assets/productos/large/webp/producto_01-03_800x1120.webp",
            ],
            rebajas: true,
            novedades: false,
            exitos: true
        },
        {
            id: 2,
            nombre: 'Top Crochet Luna',
            descripcion: 'Elegante top a crochet con un diseño lunar.',
            precio: 28.00,
            small_imgs_jpeg: [
                "../assets/productos/small/jpeg/producto_02-01_300x420.jpeg",
                "../assets/productos/small/jpeg/producto_02-02_300x420.jpeg",
                "../assets/productos/small/jpeg/producto_02-03_300x420.jpeg",
            ],
            small_imgs_webp: [
                "../assets/productos/small/webp/producto_02-01_300x420.webp",
                "../assets/productos/small/webp/producto_02-02_300x420.webp",
                "../assets/productos/small/webp/producto_02-03_300x420.webp",
            ],
            medium_imgs_jpeg: [
                "../assets/productos/medium/jpeg/producto_02-01_600x840.jpeg",
                "../assets/productos/medium/jpeg/producto_02-02_600x840.jpeg",
                "../assets/productos/medium/jpeg/producto_02-03_600x840.jpeg",
            ],
            medium_imgs_webp: [
                "../assets/productos/medium/webp/producto_02-01_600x840.webp",
                "../assets/productos/medium/webp/producto_02-02_600x840.webp",
                "../assets/productos/medium/webp/producto_02-03_600x840.webp",
            ],
            large_imgs_jpeg: [
                "../assets/productos/large/jpeg/producto_02-01_800x1120.jpeg",
                "../assets/productos/large/jpeg/producto_02-02_800x1120.jpeg",
                "../assets/productos/large/jpeg/producto_02-03_800x1120.jpeg",
            ],
            large_imgs_webp: [
                "../assets/productos/large/webp/producto_02-01_800x1120.webp",
                "../assets/productos/large/webp/producto_02-02_800x1120.webp",
                "../assets/productos/large/webp/producto_02-03_800x1120.webp",
            ],
            rebajas: true,
            novedades: false,
            exitos: true
        },
        {
            id: 3,
            nombre: 'Top Crochet Estrella',
            descripcion: 'Top a crochet con detalles de estrellas, ideal para noches especiales.',
            precio: 30.00,
            small_imgs_jpeg: [
                "../assets/productos/small/jpeg/producto_03-01_300x420.jpeg",
                "../assets/productos/small/jpeg/producto_03-02_300x420.jpeg",
                "../assets/productos/small/jpeg/producto_03-03_300x420.jpeg",
            ],
            small_imgs_webp: [
                "../assets/productos/small/webp/producto_03-01_300x420.webp",
                "../assets/productos/small/webp/producto_03-02_300x420.webp",
                "../assets/productos/small/webp/producto_03-03_300x420.webp",
            ],
            medium_imgs_jpeg: [
                "../assets/productos/medium/jpeg/producto_03-01_600x840.jpeg",
                "../assets/productos/medium/jpeg/producto_03-02_600x840.jpeg",
                "../assets/productos/medium/jpeg/producto_03-03_600x840.jpeg",
            ],
            medium_imgs_webp: [
                "../assets/productos/medium/webp/producto_03-01_600x840.webp",
                "../assets/productos/medium/webp/producto_03-02_600x840.webp",
                "../assets/productos/medium/webp/producto_03-03_600x840.webp",
            ],
            large_imgs_jpeg: [
                "../assets/productos/large/jpeg/producto_03-01_800x1120.jpeg",
                "../assets/productos/large/jpeg/producto_03-02_800x1120.jpeg",
                "../assets/productos/large/jpeg/producto_03-03_800x1120.jpeg",
            ],
            large_imgs_webp: [
                "../assets/productos/large/webp/producto_03-01_800x1120.webp",
                "../assets/productos/large/webp/producto_03-02_800x1120.webp",
                "../assets/productos/large/webp/producto_03-03_800x1120.webp",
            ],
            rebajas: true,
            novedades: false,
            exitos: true
        },
        {
            id: 4,
            nombre: 'Top Crochet Arcoíris',
            descripcion: 'Colorido top a crochet con patrón de arcoíris.',
            precio: 27.00,
            small_imgs_jpeg: [
                "../assets/productos/small/jpeg/producto_04-01_300x420.jpeg",
                "../assets/productos/small/jpeg/producto_04-02_300x420.jpeg",
                "../assets/productos/small/jpeg/producto_04-03_300x420.jpeg",
            ],
            small_imgs_webp: [
                "../assets/productos/small/webp/producto_04-01_300x420.webp",
                "../assets/productos/small/webp/producto_04-02_300x420.webp",
                "../assets/productos/small/webp/producto_04-03_300x420.webp",
            ],
            medium_imgs_jpeg: [
                "../assets/productos/medium/jpeg/producto_04-01_600x840.jpeg",
                "../assets/productos/medium/jpeg/producto_04-02_600x840.jpeg",
                "../assets/productos/medium/jpeg/producto_04-03_600x840.jpeg",
            ],
            medium_imgs_webp: [
                "../assets/productos/medium/webp/producto_04-01_600x840.webp",
                "../assets/productos/medium/webp/producto_04-02_600x840.webp",
                "../assets/productos/medium/webp/producto_04-03_600x840.webp",
            ],
            large_imgs_jpeg: [
                "../assets/productos/large/jpeg/producto_04-01_800x1120.jpeg",
                "../assets/productos/large/jpeg/producto_04-02_800x1120.jpeg",
                "../assets/productos/large/jpeg/producto_04-03_800x1120.jpeg",
            ],
            large_imgs_webp: [
                "../assets/productos/large/webp/producto_04-01_800x1120.webp",
                "../assets/productos/large/webp/producto_04-02_800x1120.webp",
                "../assets/productos/large/webp/producto_04-03_800x1120.webp",
            ],
            rebajas: true,
            novedades: false,
            exitos: true
        },
        {
            id: 5,
            nombre: 'Top Crochet Floral',
            descripcion: 'Top a crochet con hermosos motivos florales.',
            precio: 32.00,
            small_imgs_jpeg: [
                "../assets/productos/small/jpeg/producto_05-01_300x420.jpeg",
                "../assets/productos/small/jpeg/producto_05-02_300x420.jpeg",
                "../assets/productos/small/jpeg/producto_05-03_300x420.jpeg",
            ],
            small_imgs_webp: [
                "../assets/productos/small/webp/producto_05-01_300x420.webp",
                "../assets/productos/small/webp/producto_05-02_300x420.webp",
                "../assets/productos/small/webp/producto_05-03_300x420.webp",
            ],
            medium_imgs_jpeg: [
                "../assets/productos/medium/jpeg/producto_05-01_600x840.jpeg",
                "../assets/productos/medium/jpeg/producto_05-02_600x840.jpeg",
                "../assets/productos/medium/jpeg/producto_05-03_600x840.jpeg",
            ],
            medium_imgs_webp: [
                "../assets/productos/medium/webp/producto_05-01_600x840.webp",
                "../assets/productos/medium/webp/producto_05-02_600x840.webp",
                "../assets/productos/medium/webp/producto_05-03_600x840.webp",
            ],
            large_imgs_jpeg: [
                "../assets/productos/large/jpeg/producto_05-01_800x1120.jpeg",
                "../assets/productos/large/jpeg/producto_05-02_800x1120.jpeg",
                "../assets/productos/large/jpeg/producto_05-03_800x1120.jpeg",
            ],
            large_imgs_webp: [
                "../assets/productos/large/webp/producto_05-01_800x1120.webp",
                "../assets/productos/large/webp/producto_05-02_800x1120.webp",
                "../assets/productos/large/webp/producto_05-03_800x1120.webp",
            ],
            rebajas: true,
            novedades: true,
            exitos: true
        },
        {
            id: 6,
            nombre: 'Top Crochet Mariposa',
            descripcion: 'Top a crochet con diseño de mariposas, ideal para primavera.',
            precio: 29.00,
            small_imgs_jpeg: [
                "../assets/productos/small/jpeg/producto_06-01_300x420.jpeg",
                "../assets/productos/small/jpeg/producto_06-02_300x420.jpeg",
                "../assets/productos/small/jpeg/producto_06-03_300x420.jpeg",
            ],
            small_imgs_webp: [
                "../assets/productos/small/webp/producto_06-01_300x420.webp",
                "../assets/productos/small/webp/producto_06-02_300x420.webp",
                "../assets/productos/small/webp/producto_06-03_300x420.webp",
            ],
            medium_imgs_jpeg: [
                "../assets/productos/medium/jpeg/producto_06-01_600x840.jpeg",
                "../assets/productos/medium/jpeg/producto_06-02_600x840.jpeg",
                "../assets/productos/medium/jpeg/producto_06-03_600x840.jpeg",
            ],
            medium_imgs_webp: [
                "../assets/productos/medium/webp/producto_06-01_600x840.webp",
                "../assets/productos/medium/webp/producto_06-02_600x840.webp",
                "../assets/productos/medium/webp/producto_06-03_600x840.webp",
            ],
            large_imgs_jpeg: [
                "../assets/productos/large/jpeg/producto_06-01_800x1120.jpeg",
                "../assets/productos/large/jpeg/producto_06-02_800x1120.jpeg",
                "../assets/productos/large/jpeg/producto_06-03_800x1120.jpeg",
            ],
            large_imgs_webp: [
                "../assets/productos/large/webp/producto_06-01_800x1120.webp",
                "../assets/productos/large/webp/producto_06-02_800x1120.webp",
                "../assets/productos/large/webp/producto_06-03_800x1120.webp",
            ],
            rebajas: true,
            novedades: true,
            exitos: true
        },
        {
            id: 7,
            nombre: 'Top Crochet Oceano',
            descripcion: 'Un top a crochet con tonos y patrones inspirados en el océano.',
            precio: 33.00,
            small_imgs_jpeg: [
                "../assets/productos/small/jpeg/producto_07-01_300x420.jpeg",
                "../assets/productos/small/jpeg/producto_07-02_300x420.jpeg",
                "../assets/productos/small/jpeg/producto_07-03_300x420.jpeg",
            ],
            small_imgs_webp: [
                "../assets/productos/small/webp/producto_07-01_300x420.webp",
                "../assets/productos/small/webp/producto_07-02_300x420.webp",
                "../assets/productos/small/webp/producto_07-03_300x420.webp",
            ],
            medium_imgs_jpeg: [
                "../assets/productos/medium/jpeg/producto_07-01_600x840.jpeg",
                "../assets/productos/medium/jpeg/producto_07-02_600x840.jpeg",
                "../assets/productos/medium/jpeg/producto_07-03_600x840.jpeg",
            ],
            medium_imgs_webp: [
                "../assets/productos/medium/webp/producto_07-01_600x840.webp",
                "../assets/productos/medium/webp/producto_07-02_600x840.webp",
                "../assets/productos/medium/webp/producto_07-03_600x840.webp",
            ],
            large_imgs_jpeg: [
                "../assets/productos/large/jpeg/producto_07-01_800x1120.jpeg",
                "../assets/productos/large/jpeg/producto_07-02_800x1120.jpeg",
                "../assets/productos/large/jpeg/producto_07-03_800x1120.jpeg",
            ],
            large_imgs_webp: [
                "../assets/productos/large/webp/producto_07-01_800x1120.webp",
                "../assets/productos/large/webp/producto_07-02_800x1120.webp",
                "../assets/productos/large/webp/producto_07-03_800x1120.webp",
            ],
            rebajas: true,
            novedades: true,
            exitos: true
        },
        {
            id: 8,
            nombre: 'Top Crochet Selva',
            descripcion: 'Top a crochet con motivos de la selva, lleno de vida y color.',
            precio: 31.00,
            small_imgs_jpeg: [
                "../assets/productos/small/jpeg/producto_08-01_300x420.jpeg",
                "../assets/productos/small/jpeg/producto_08-02_300x420.jpeg",
                "../assets/productos/small/jpeg/producto_08-03_300x420.jpeg",
            ],
            small_imgs_webp: [
                "../assets/productos/small/webp/producto_08-01_300x420.webp",
                "../assets/productos/small/webp/producto_08-02_300x420.webp",
                "../assets/productos/small/webp/producto_08-03_300x420.webp",
            ],
            medium_imgs_jpeg: [
                "../assets/productos/medium/jpeg/producto_08-01_600x840.jpeg",
                "../assets/productos/medium/jpeg/producto_08-02_600x840.jpeg",
                "../assets/productos/medium/jpeg/producto_08-03_600x840.jpeg",
            ],
            medium_imgs_webp: [
                "../assets/productos/medium/webp/producto_08-01_600x840.webp",
                "../assets/productos/medium/webp/producto_08-02_600x840.webp",
                "../assets/productos/medium/webp/producto_08-03_600x840.webp",
            ],
            large_imgs_jpeg: [
                "../assets/productos/large/jpeg/producto_08-01_800x1120.jpeg",
                "../assets/productos/large/jpeg/producto_08-02_800x1120.jpeg",
                "../assets/productos/large/jpeg/producto_08-03_800x1120.jpeg",
            ],
            large_imgs_webp: [
                "../assets/productos/large/webp/producto_08-01_800x1120.webp",
                "../assets/productos/large/webp/producto_08-02_800x1120.webp",
                "../assets/productos/large/webp/producto_08-03_800x1120.webp",
            ],
            rebajas: true,
            novedades: true,
            exitos: true
        },
        {
            id: 9,
            nombre: 'Top Crochet Coral',
            descripcion: 'Top a crochet en colores coral, perfecto para el verano.',
            precio: 26.00,
            small_imgs_jpeg: [
                "../assets/productos/small/jpeg/producto_09-01_300x420.jpeg",
                "../assets/productos/small/jpeg/producto_09-02_300x420.jpeg",
                "../assets/productos/small/jpeg/producto_09-03_300x420.jpeg",
            ],
            small_imgs_webp: [
                "../assets/productos/small/webp/producto_09-01_300x420.webp",
                "../assets/productos/small/webp/producto_09-02_300x420.webp",
                "../assets/productos/small/webp/producto_09-03_300x420.webp",
            ],
            medium_imgs_jpeg: [
                "../assets/productos/medium/jpeg/producto_09-01_600x840.jpeg",
                "../assets/productos/medium/jpeg/producto_09-02_600x840.jpeg",
                "../assets/productos/medium/jpeg/producto_09-03_600x840.jpeg",
            ],
            medium_imgs_webp: [
                "../assets/productos/medium/webp/producto_09-01_600x840.webp",
                "../assets/productos/medium/webp/producto_09-02_600x840.webp",
                "../assets/productos/medium/webp/producto_09-03_600x840.webp",
            ],
            large_imgs_jpeg: [
                "../assets/productos/large/jpeg/producto_09-01_800x1120.jpeg",
                "../assets/productos/large/jpeg/producto_09-02_800x1120.jpeg",
                "../assets/productos/large/jpeg/producto_09-03_800x1120.jpeg",
            ],
            large_imgs_webp: [
                "../assets/productos/large/webp/producto_09-01_800x1120.webp",
                "../assets/productos/large/webp/producto_09-02_800x1120.webp",
                "../assets/productos/large/webp/producto_09-03_800x1120.webp",
            ],
            rebajas: false,
            novedades: true,
            exitos: false
        },
        {
            id: 10,
            nombre: 'Top Crochet Violeta',
            descripcion: 'Top a crochet en tonos violeta, elegante y sofisticado.',
            precio: 35.00,
            small_imgs_jpeg: [
                "../assets/productos/small/jpeg/producto_10-01_300x420.jpeg",
                "../assets/productos/small/jpeg/producto_10-02_300x420.jpeg",
                "../assets/productos/small/jpeg/producto_10-03_300x420.jpeg",
            ],
            small_imgs_webp: [
                "../assets/productos/small/webp/producto_10-01_300x420.webp",
                "../assets/productos/small/webp/producto_10-02_300x420.webp",
                "../assets/productos/small/webp/producto_10-03_300x420.webp",
            ],
            medium_imgs_jpeg: [
                "../assets/productos/medium/jpeg/producto_10-01_600x840.jpeg",
                "../assets/productos/medium/jpeg/producto_10-02_600x840.jpeg",
                "../assets/productos/medium/jpeg/producto_10-03_600x840.jpeg",
            ],
            medium_imgs_webp: [
                "../assets/productos/medium/webp/producto_10-01_600x840.webp",
                "../assets/productos/medium/webp/producto_10-02_600x840.webp",
                "../assets/productos/medium/webp/producto_10-03_600x840.webp",
            ],
            large_imgs_jpeg: [
                "../assets/productos/large/jpeg/producto_10-01_800x1120.jpeg",
                "../assets/productos/large/jpeg/producto_10-02_800x1120.jpeg",
                "../assets/productos/large/jpeg/producto_10-03_800x1120.jpeg",
            ],
            large_imgs_webp: [
                "../assets/productos/large/webp/producto_10-01_800x1120.webp",
                "../assets/productos/large/webp/producto_10-02_800x1120.webp",
                "../assets/productos/large/webp/producto_10-03_800x1120.webp",
            ],
            rebajas: false,
            novedades: true,
            exitos: false
        },
        {
            id: 11,
            nombre: 'Top Crochet Lavanda',
            descripcion: 'Un top a crochet suave y delicado en color lavanda.',
            precio: 34.00,
            small_imgs_jpeg: [
                "../assets/productos/small/jpeg/producto_11-01_300x420.jpeg",
                "../assets/productos/small/jpeg/producto_11-02_300x420.jpeg",
                "../assets/productos/small/jpeg/producto_11-03_300x420.jpeg",
            ],
            small_imgs_webp: [
                "../assets/productos/small/webp/producto_11-01_300x420.webp",
                "../assets/productos/small/webp/producto_11-02_300x420.webp",
                "../assets/productos/small/webp/producto_11-03_300x420.webp",
            ],
            medium_imgs_jpeg: [
                "../assets/productos/medium/jpeg/producto_11-01_600x840.jpeg",
                "../assets/productos/medium/jpeg/producto_11-02_600x840.jpeg",
                "../assets/productos/medium/jpeg/producto_11-03_600x840.jpeg",
            ],
            medium_imgs_webp: [
                "../assets/productos/medium/webp/producto_11-01_600x840.webp",
                "../assets/productos/medium/webp/producto_11-02_600x840.webp",
                "../assets/productos/medium/webp/producto_11-03_600x840.webp",
            ],
            large_imgs_jpeg: [
                "../assets/productos/large/jpeg/producto_11-01_800x1120.jpeg",
                "../assets/productos/large/jpeg/producto_11-02_800x1120.jpeg",
                "../assets/productos/large/jpeg/producto_11-03_800x1120.jpeg",
            ],
            large_imgs_webp: [
                "../assets/productos/large/webp/producto_11-01_800x1120.webp",
                "../assets/productos/large/webp/producto_11-02_800x1120.webp",
                "../assets/productos/large/webp/producto_11-03_800x1120.webp",
            ],
            rebajas: false,
            novedades: true,
            exitos: false
        },
        {
            id: 12,
            nombre: 'Top Crochet Esmeralda',
            descripcion: 'Top a crochet en color esmeralda, vibrante y llamativo.',
            precio: 36.00,
            small_imgs_jpeg: [
                "../assets/productos/small/jpeg/producto_12-01_300x420.jpeg",
                "../assets/productos/small/jpeg/producto_12-02_300x420.jpeg",
                "../assets/productos/small/jpeg/producto_12-03_300x420.jpeg",
            ],
            small_imgs_webp: [
                "../assets/productos/small/webp/producto_12-01_300x420.webp",
                "../assets/productos/small/webp/producto_12-02_300x420.webp",
                "../assets/productos/small/webp/producto_12-03_300x420.webp",
            ],
            medium_imgs_jpeg: [
                "../assets/productos/medium/jpeg/producto_12-01_600x840.jpeg",
                "../assets/productos/medium/jpeg/producto_12-02_600x840.jpeg",
                "../assets/productos/medium/jpeg/producto_12-03_600x840.jpeg",
            ],
            medium_imgs_webp: [
                "../assets/productos/medium/webp/producto_12-01_600x840.webp",
                "../assets/productos/medium/webp/producto_12-02_600x840.webp",
                "../assets/productos/medium/webp/producto_12-03_600x840.webp",
            ],
            large_imgs_jpeg: [
                "../assets/productos/large/jpeg/producto_12-01_800x1120.jpeg",
                "../assets/productos/large/jpeg/producto_12-02_800x1120.jpeg",
                "../assets/productos/large/jpeg/producto_12-03_800x1120.jpeg",
            ],
            large_imgs_webp: [
                "../assets/productos/large/webp/producto_12-01_800x1120.webp",
                "../assets/productos/large/webp/producto_12-02_800x1120.webp",
                "../assets/productos/large/webp/producto_12-03_800x1120.webp",
            ],
            rebajas: false,
            novedades: true,
            exitos: false
        }
    ]
    
    // Obtener el id del producto desde la URL
    const urlParams = new URLSearchParams(window.location.search)
    const productIdString = urlParams.get('id')
    const productId = parseInt(productIdString, 10)

    const article = document.querySelector('.Article')

    const imgsNavSmallWebp = article.querySelectorAll('.Carrusel-source--smallSmallWebp')
    const imgsNavSmallJpeg = article.querySelectorAll('.Carrusel-img--smallSmallJpeg')
    

    const imgsSmallJpeg = article.querySelectorAll('.Carrusel-source--bigSmallJpeg')
    const imgsSmallWebp = article.querySelectorAll('.Carrusel-source--bigSmallWebp')

    const imgsMediumJpeg = article.querySelectorAll('.Carrusel-source--bigMediumJpeg')
    const imgsMediumWebp = article.querySelectorAll('.Carrusel-source--bigMediumWebp')

    const imgsLargeJpeg = article.querySelectorAll('.Carrusel-img--bigLargeJpeg')
    const imgsLargeWebp = article.querySelectorAll('.Carrusel-source--bigLargeWebp')

    const product = products_list.find(product => product.id === productId)

    // Actualizar nombre, precio y descripción
    document.getElementById('product-name').textContent = product.nombre
    document.getElementById('product-description').textContent = product.descripcion
    document.getElementById('product-price').textContent = `${product.precio.toFixed(2)} €`

    // Acttualizar pictures de navegación


    // Acttualizar pictures grandes
    product.small_imgs_jpeg.forEach((imgSrc, index) => {
        imgsSmallJpeg[index].srcset = imgSrc
        imgsSmallJpeg[index].alt = product.nombre

        imgsNavSmallJpeg[index].src = imgSrc
        imgsNavSmallJpeg[index].alt = product.nombre
    })

    product.small_imgs_webp.forEach((imgSrc, index) => {
        imgsSmallWebp[index].srcset = imgSrc
        imgsSmallWebp[index].alt = product.nombre

        imgsNavSmallWebp[index].srcset = imgSrc
        imgsNavSmallWebp[index].alt = product.nombre
    })

    product.medium_imgs_jpeg.forEach((imgSrc, index) => {
        imgsMediumJpeg[index].srcset = imgSrc
        imgsMediumJpeg[index].alt = product.nombre
    })

    product.medium_imgs_webp.forEach((imgSrc, index) => {
        imgsMediumWebp[index].srcset = imgSrc
        imgsMediumWebp[index].alt = product.nombre
    })

    product.large_imgs_jpeg.forEach((imgSrc, index) => {
        imgsLargeJpeg[index].src = imgSrc
        imgsLargeJpeg[index].alt = product.nombre
    })

    product.large_imgs_webp.forEach((imgSrc, index) => {
        imgsLargeWebp[index].srcset = imgSrc
        imgsLargeWebp[index].alt = product.nombre
    })

})();


/* 
    Carrusel de imágenes:
    Al hacer click en alguna .Carrusel-picture--small:
        1. remove .isActive del resto de .Carrusel-picture--small
        2. add .isActive al .Carrusel-picture--small en cuestión
        3. .Carrusel-content translateY imgHeight * posicion de .Carrusel-picture--small en cuestión
 */
(() => {

    // Constantes
    const carousel = document.querySelector('.Carrusel')
    const carouselContent = carousel.querySelector('.Carrusel-content')
    const carruselSmall = carousel.querySelectorAll('.Carrusel-picture--small')

    let imgHeight = 100/3

    // Función handler
    const handleClick = (index) => () => {
        
        carouselContent.style.transform = `translateY(-${imgHeight * index}%)`

        carruselSmall.forEach(carrusel =>{
            carrusel != carruselSmall[index] 
            ? carrusel.classList.remove('isActive') 
            : carruselSmall[index].classList.add('isActive')
        })
    }

    // Eventos
    carruselSmall.forEach((img, index) =>{
        img.addEventListener('click', handleClick(index))
    })

})();


/* 
    Elegir un color:
    Al hacer click en algún .Select-color:
        1. remove .isActive del resto de .Select-color
        2. add .isActive al .Select-color en cuestión
 */
(() => {

    // Constante
    const colors = document.querySelectorAll('.Select-color')


    // Funciones Handler
    const handleClickColor = (index) => () => {
        colors.forEach(color => {
            color != colors[index] 
            ? color.classList.remove('isActive') 
            : colors[index].classList.add('isActive')
        })
    }

    // Eventos
    colors.forEach((color, index) =>{
        color.addEventListener('click', handleClickColor(index))
    })
})();


/* 
    Elegir una talla:
    Al hacer click en algún .Select-size:
        1. remove .isActive del resto de .Select-size
        2. toggle .isActive al .Select-color en cuestión
 */
(() => {
        // Constante
        const sizes = document.querySelectorAll('.Select-size')


        // Funciones Handler
        const handleClickSize = (index) => () => {
            sizes.forEach(size => {
                size != sizes[index] 
                ? size.classList.remove('isActive') 
                : sizes[index].classList.toggle('isActive')
            })
        }
    
        // Eventos
        sizes.forEach((size, index) =>{
            size.addEventListener('click', handleClickSize(index))
        })
})();


/* 
    Abrir guia de tallas:
    Al hacer click en .Select-button--sizes:
        1. add .isVisible a .Lightbox
    Al hacer click en .Lightbox-button:
        2. remove .isVisible a .Lightbox
 */
(() => {

    const buttonSize = document.querySelector('.Select-button--sizes')
    const lightbox = document.querySelector('.Lightbox')
    const close = lightbox.querySelector('.Lightbox-button')

    const handleClick = () => {
        lightbox.classList.add('isVisible')
    }

    const handleClose = () => {
        lightbox.classList.remove('isVisible')
    }

    buttonSize.addEventListener('click', handleClick)
    close.addEventListener('click', handleClose)

})();


/* 
    Acordeón:
    Al hacer click en algún .Item-h2:
        1. toggle .isActive a su .More-content
        2. toggle .isActive a su .More-svg
 */
(() => {
    // Constantes
    const container = document.querySelector(`.More`)

    const itemH2 = container.querySelectorAll(`.More-title`)
    const itemP = container.querySelectorAll(`.More-content`)
    const svgs = container.querySelectorAll('.More-svg')

    // Funciones Handler
    const handleClick = (index_h2) => () => {
            itemP[index_h2].classList.toggle('isActive')
            svgs[index_h2].classList.toggle('isActive')
    }

    // Eventos
    itemH2.forEach((element_h2, index_h2) => {
        element_h2.addEventListener('click', handleClick(index_h2))
    })
})();