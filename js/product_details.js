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
                "../assets/products/small/product_01_01.jpeg",
                "../assets/products/small/product_01_02.jpeg",
                "../assets/products/small/product_01_03.jpeg"
            ],
            small_imgs_webp: [
                "../assets/products/small/product_01_01.webp",
                "../assets/products/small/product_01_02.webp",
                "../assets/products/small/product_01_03.webp"
            ],
            medium_imgs_jpeg: [
                "../assets/products/medium/product_01_01.jpeg",
                "../assets/products/medium/product_01_02.jpeg",
                "../assets/products/medium/product_01_03.jpeg"
            ],
            medium_imgs_webp: [
                "../assets/products/medium/product_01_01.webp",
                "../assets/products/medium/product_01_02.webp",
                "../assets/products/medium/product_01_03.webp"
            ],
            large_imgs_jpeg: [
                "../assets/products/large/product_01_01.jpeg",
                "../assets/products/large/product_01_02.jpeg",
                "../assets/products/large/product_01_03.jpeg"
            ],
            large_imgs_webp: [
                "../assets/products/large/product_01_01.webp",
                "../assets/products/large/product_01_02.webp",
                "../assets/products/large/product_01_03.webp"
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
                "../assets/products/small/product_02_01.jpeg",
                "../assets/products/small/product_02_02.jpeg",
                "../assets/products/small/product_02_03.jpeg"
            ],
            small_imgs_webp: [
                "../assets/products/small/product_02_01.webp",
                "../assets/products/small/product_02_02.webp",
                "../assets/products/small/product_02_03.webp"
            ],
            medium_imgs_jpeg: [
                "../assets/products/medium/product_02_01.jpeg",
                "../assets/products/medium/product_02_02.jpeg",
                "../assets/products/medium/product_02_03.jpeg"
            ],
            medium_imgs_webp: [
                "../assets/products/medium/product_02_01.webp",
                "../assets/products/medium/product_02_02.webp",
                "../assets/products/medium/product_02_03.webp"
            ],
            large_imgs_jpeg: [
                "../assets/products/large/product_02_01.jpeg",
                "../assets/products/large/product_02_02.jpeg",
                "../assets/products/large/product_02_03.jpeg"
            ],
            large_imgs_webp: [
                "../assets/products/large/product_02_01.webp",
                "../assets/products/large/product_02_02.webp",
                "../assets/products/large/product_02_03.webp"
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
                "../assets/products/small/product_03_01.jpeg",
                "../assets/products/small/product_03_02.jpeg",
                "../assets/products/small/product_03_03.jpeg"
            ],
            small_imgs_webp: [
                "../assets/products/small/product_03_01.webp",
                "../assets/products/small/product_03_02.webp",
                "../assets/products/small/product_03_03.webp"
            ],
            medium_imgs_jpeg: [
                "../assets/products/medium/product_03_01.jpeg",
                "../assets/products/medium/product_03_02.jpeg",
                "../assets/products/medium/product_03_03.jpeg"
            ],
            medium_imgs_webp: [
                "../assets/products/medium/product_03_01.webp",
                "../assets/products/medium/product_03_02.webp",
                "../assets/products/medium/product_03_03.webp"
            ],
            large_imgs_jpeg: [
                "../assets/products/large/product_03_01.jpeg",
                "../assets/products/large/product_03_02.jpeg",
                "../assets/products/large/product_03_03.jpeg"
            ],
            large_imgs_webp: [
                "../assets/products/large/product_03_01.webp",
                "../assets/products/large/product_03_02.webp",
                "../assets/products/large/product_03_03.webp"
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
                "../assets/products/small/product_04_01.jpeg",
                "../assets/products/small/product_04_02.jpeg",
                "../assets/products/small/product_04_03.jpeg"
            ],
            small_imgs_webp: [
                "../assets/products/small/product_04_01.webp",
                "../assets/products/small/product_04_02.webp",
                "../assets/products/small/product_04_03.webp"
            ],
            medium_imgs_jpeg: [
                "../assets/products/medium/product_04_01.jpeg",
                "../assets/products/medium/product_04_02.jpeg",
                "../assets/products/medium/product_04_03.jpeg"
            ],
            medium_imgs_webp: [
                "../assets/products/medium/product_04_01.webp",
                "../assets/products/medium/product_04_02.webp",
                "../assets/products/medium/product_04_03.webp"
            ],
            large_imgs_jpeg: [
                "../assets/products/large/product_04_01.jpeg",
                "../assets/products/large/product_04_02.jpeg",
                "../assets/products/large/product_04_03.jpeg"
            ],
            large_imgs_webp: [
                "../assets/products/large/product_04_01.webp",
                "../assets/products/large/product_04_02.webp",
                "../assets/products/large/product_04_03.webp"
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
                "../assets/products/small/product_05_01.jpeg",
                "../assets/products/small/product_05_02.jpeg",
                "../assets/products/small/product_05_03.jpeg"
            ],
            small_imgs_webp: [
                "../assets/products/small/product_05_01.webp",
                "../assets/products/small/product_05_02.webp",
                "../assets/products/small/product_05_03.webp"
            ],
            medium_imgs_jpeg: [
                "../assets/products/medium/product_05_01.jpeg",
                "../assets/products/medium/product_05_02.jpeg",
                "../assets/products/medium/product_05_03.jpeg"
            ],
            medium_imgs_webp: [
                "../assets/products/medium/product_05_01.webp",
                "../assets/products/medium/product_05_02.webp",
                "../assets/products/medium/product_05_03.webp"
            ],
            large_imgs_jpeg: [
                "../assets/products/large/product_05_01.jpeg",
                "../assets/products/large/product_05_02.jpeg",
                "../assets/products/large/product_05_03.jpeg"
            ],
            large_imgs_webp: [
                "../assets/products/large/product_05_01.webp",
                "../assets/products/large/product_05_02.webp",
                "../assets/products/large/product_05_03.webp"
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
                "../assets/products/small/product_06_01.jpeg",
                "../assets/products/small/product_06_02.jpeg",
                "../assets/products/small/product_06_03.jpeg"
            ],
            small_imgs_webp: [
                "../assets/products/small/product_06_01.webp",
                "../assets/products/small/product_06_02.webp",
                "../assets/products/small/product_06_03.webp"
            ],
            medium_imgs_jpeg: [
                "../assets/products/medium/product_06_01.jpeg",
                "../assets/products/medium/product_06_02.jpeg",
                "../assets/products/medium/product_06_03.jpeg"
            ],
            medium_imgs_webp: [
                "../assets/products/medium/product_06_01.webp",
                "../assets/products/medium/product_06_02.webp",
                "../assets/products/medium/product_06_03.webp"
            ],
            large_imgs_jpeg: [
                "../assets/products/large/product_06_01.jpeg",
                "../assets/products/large/product_06_02.jpeg",
                "../assets/products/large/product_06_03.jpeg"
            ],
            large_imgs_webp: [
                "../assets/products/large/product_06_01.webp",
                "../assets/products/large/product_06_02.webp",
                "../assets/products/large/product_06_03.webp"
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
                "../assets/products/small/product_07_01.jpeg",
                "../assets/products/small/product_07_02.jpeg",
                "../assets/products/small/product_07_03.jpeg"
            ],
            small_imgs_webp: [
                "../assets/products/small/product_07_01.webp",
                "../assets/products/small/product_07_02.webp",
                "../assets/products/small/product_07_03.webp"
            ],
            medium_imgs_jpeg: [
                "../assets/products/medium/product_07_01.jpeg",
                "../assets/products/medium/product_07_02.jpeg",
                "../assets/products/medium/product_07_03.jpeg"
            ],
            medium_imgs_webp: [
                "../assets/products/medium/product_07_01.webp",
                "../assets/products/medium/product_07_02.webp",
                "../assets/products/medium/product_07_03.webp"
            ],
            large_imgs_jpeg: [
                "../assets/products/large/product_07_01.jpeg",
                "../assets/products/large/product_07_02.jpeg",
                "../assets/products/large/product_07_03.jpeg"
            ],
            large_imgs_webp: [
                "../assets/products/large/product_07_01.webp",
                "../assets/products/large/product_07_02.webp",
                "../assets/products/large/product_07_03.webp"
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
                "../assets/products/small/product_08_01.jpeg",
                "../assets/products/small/product_08_02.jpeg",
                "../assets/products/small/product_08_03.jpeg"
            ],
            small_imgs_webp: [
                "../assets/products/small/product_08_01.webp",
                "../assets/products/small/product_08_02.webp",
                "../assets/products/small/product_08_03.webp"
            ],
            medium_imgs_jpeg: [
                "../assets/products/medium/product_08_01.jpeg",
                "../assets/products/medium/product_08_02.jpeg",
                "../assets/products/medium/product_08_03.jpeg"
            ],
            medium_imgs_webp: [
                "../assets/products/medium/product_08_01.webp",
                "../assets/products/medium/product_08_02.webp",
                "../assets/products/medium/product_08_03.webp"
            ],
            large_imgs_jpeg: [
                "../assets/products/large/product_08_01.jpeg",
                "../assets/products/large/product_08_02.jpeg",
                "../assets/products/large/product_08_03.jpeg"
            ],
            large_imgs_webp: [
                "../assets/products/large/product_08_01.webp",
                "../assets/products/large/product_08_02.webp",
                "../assets/products/large/product_08_03.webp"
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
                "../assets/products/small/product_09_01.jpeg",
                "../assets/products/small/product_09_02.jpeg",
                "../assets/products/small/product_09_03.jpeg"
            ],
            small_imgs_webp: [
                "../assets/products/small/product_09_01.webp",
                "../assets/products/small/product_09_02.webp",
                "../assets/products/small/product_09_03.webp"
            ],
            medium_imgs_jpeg: [
                "../assets/products/medium/product_09_01.jpeg",
                "../assets/products/medium/product_09_02.jpeg",
                "../assets/products/medium/product_09_03.jpeg"
            ],
            medium_imgs_webp: [
                "../assets/products/medium/product_09_01.webp",
                "../assets/products/medium/product_09_02.webp",
                "../assets/products/medium/product_09_03.webp"
            ],
            large_imgs_jpeg: [
                "../assets/products/large/product_09_01.jpeg",
                "../assets/products/large/product_09_02.jpeg",
                "../assets/products/large/product_09_03.jpeg"
            ],
            large_imgs_webp: [
                "../assets/products/large/product_09_01.webp",
                "../assets/products/large/product_09_02.webp",
                "../assets/products/large/product_09_03.webp"
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
                "../assets/products/small/product_10_01.jpeg",
                "../assets/products/small/product_10_02.jpeg",
                "../assets/products/small/product_10_03.jpeg"
            ],
            small_imgs_webp: [
                "../assets/products/small/product_10_01.webp",
                "../assets/products/small/product_10_02.webp",
                "../assets/products/small/product_10_03.webp"
            ],
            medium_imgs_jpeg: [
                "../assets/products/medium/product_10_01.jpeg",
                "../assets/products/medium/product_10_02.jpeg",
                "../assets/products/medium/product_10_03.jpeg"
            ],
            medium_imgs_webp: [
                "../assets/products/medium/product_10_01.webp",
                "../assets/products/medium/product_10_02.webp",
                "../assets/products/medium/product_10_03.webp"
            ],
            large_imgs_jpeg: [
                "../assets/products/large/product_10_01.jpeg",
                "../assets/products/large/product_10_02.jpeg",
                "../assets/products/large/product_10_03.jpeg"
            ],
            large_imgs_webp: [
                "../assets/products/large/product_10_01.webp",
                "../assets/products/large/product_10_02.webp",
                "../assets/products/large/product_10_03.webp"
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
                "../assets/products/small/product_11_01.jpeg",
                "../assets/products/small/product_11_02.jpeg",
                "../assets/products/small/product_11_03.jpeg"
            ],
            small_imgs_webp: [
                "../assets/products/small/product_11_01.webp",
                "../assets/products/small/product_11_02.webp",
                "../assets/products/small/product_11_03.webp"
            ],
            medium_imgs_jpeg: [
                "../assets/products/medium/product_11_01.jpeg",
                "../assets/products/medium/product_11_02.jpeg",
                "../assets/products/medium/product_11_03.jpeg"
            ],
            medium_imgs_webp: [
                "../assets/products/medium/product_11_01.webp",
                "../assets/products/medium/product_11_02.webp",
                "../assets/products/medium/product_11_03.webp"
            ],
            large_imgs_jpeg: [
                "../assets/products/large/product_11_01.jpeg",
                "../assets/products/large/product_11_02.jpeg",
                "../assets/products/large/product_11_03.jpeg"
            ],
            large_imgs_webp: [
                "../assets/products/large/product_11_01.webp",
                "../assets/products/large/product_11_02.webp",
                "../assets/products/large/product_11_03.webp"
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
                "../assets/products/small/product_12_01.jpeg",
                "../assets/products/small/product_12_02.jpeg",
                "../assets/products/small/product_12_03.jpeg"
            ],
            small_imgs_webp: [
                "../assets/products/small/product_12_01.webp",
                "../assets/products/small/product_12_02.webp",
                "../assets/products/small/product_12_03.webp"
            ],
            medium_imgs_jpeg: [
                "../assets/products/medium/product_12_01.jpeg",
                "../assets/products/medium/product_12_02.jpeg",
                "../assets/products/medium/product_12_03.jpeg"
            ],
            medium_imgs_webp: [
                "../assets/products/medium/product_12_01.webp",
                "../assets/products/medium/product_12_02.webp",
                "../assets/products/medium/product_12_03.webp"
            ],
            large_imgs_jpeg: [
                "../assets/products/large/product_12_01.jpeg",
                "../assets/products/large/product_12_02.jpeg",
                "../assets/products/large/product_12_03.jpeg"
            ],
            large_imgs_webp: [
                "../assets/products/large/product_12_01.webp",
                "../assets/products/large/product_12_02.webp",
                "../assets/products/large/product_12_03.webp"
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

    // Obtener el producto a partir del id
    const product = products_list.find(product => product.id === productId)

    // Etiquetas html
    const article = document.querySelector('.Article')

    const imgsNavSmallWebp = article.querySelectorAll('.Carrusel-source--smallWebp')
    const imgsNavSmallJpeg = article.querySelectorAll('.Carrusel-img--smallJpeg')

    const imgsMediumJpeg = article.querySelectorAll('.Slider-source--mediumJpeg')
    const imgsMediumWebp = article.querySelectorAll('.Slider-source--mediumWebp')

    const imgsLargeJpeg = article.querySelectorAll('.Slider-img--largeJpeg')
    const imgsLargeWebp = article.querySelectorAll('.Slider-source--largeWebp')

    const button = article.querySelector('.Button-buy')

    // Actualizar value del botón
    button.setAttribute('value', `${product.id}`)

    // Actualizar nombre, precio y descripción
    document.getElementById('product-name').textContent = product.nombre
    document.getElementById('product-description').textContent = product.descripcion
    document.getElementById('product-price').textContent = `${product.precio.toFixed(2)}`

    // Acttualizar pictures de navegación

    product.small_imgs_jpeg.forEach((imgSrc, index) => {
        imgsNavSmallJpeg[index].src = imgSrc
        imgsNavSmallJpeg[index].alt = product.nombre
    })

    product.small_imgs_webp.forEach((imgSrc, index) => {
        imgsNavSmallWebp[index].srcset = imgSrc
        imgsNavSmallWebp[index].alt = product.nombre
    })

    // Acttualizar pictures grandes

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
    Al hacer click en alguna .Carrusel-picture:
        1. remove .isActive del resto de .Carrusel-picture
        2. add .isActive al .Carrusel-picture en cuestión
        3. .Content-slider' translateY imgHeight * posicion de .Carrusel-picture--small en cuestión
 */
(() => {

    // Constantes
    const carousel = document.querySelector('.Carrusel')
    const carouselContent = carousel.querySelector('.Content-slider')
    const carruselSmall = carousel.querySelectorAll('.Carrusel-picture')

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
    Carrusel de imágenes:
    Al hacer click en Content-button--up:
        1. .Content-slider' translateY anterior
    Al hacer click en Content-button--down:
        1. .Content-slider' translateY siguiente
 */
(() => {

    // Constantes
    const carousel = document.querySelector('.Carrusel')
    const carouselContent = carousel.querySelector('.Content-slider')

    const buttonUp = carousel.querySelector('.Content-button--up')
    const buttonDown = carousel.querySelector('.Content-button--down')

    // Variables
    let imgHeight = 100/3
    let pos = 0

    buttonUp.classList.add('isNotVisible')

    const previous = () => {
        if (buttonDown.classList.contains('isNotVisible')) {
            buttonDown.classList.remove('isNotVisible')
        }
        pos--
        if (pos >= 0) {
            carouselContent.style.transform = `translateY(-${imgHeight * pos}%)`
        } 
        
        if (pos == 0) {
            buttonUp.classList.add('isNotVisible')
        }
    }

    const next = () => {
        if (buttonUp.classList.contains('isNotVisible')) {
            buttonUp.classList.remove('isNotVisible')
        }

        pos++
        if (pos < 3) {
            carouselContent.style.transform = `translateY(-${imgHeight * pos}%)`
        }
        if (3 - pos == 1) {
            buttonDown.classList.add('isNotVisible')
        }
    }

    // Eventos
    buttonUp.addEventListener('click', previous)
    buttonDown.addEventListener('click', next)

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