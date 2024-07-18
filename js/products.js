/* 
    En products.js se encuentra:
        - todo lo referente a products.html
 */

/* 
    Cuando el ancho de la venatna sea menor que 768px (ya sea cuando se cargue o cuando se redimensione):
        1. display: none a los .Titles-a que no tengan la clase isActive
 */
(() => {

    // Constantes
    const titles = document.querySelector('.Titles')
    const titlesLinks = titles.querySelectorAll('.Titles-a')

    // Función Handler
    const handleResize = () => {
        if (window.innerWidth <= 768) {
            titlesLinks.forEach(link => {
                !link.classList.contains('isActive') && (link.style.display = 'none')
            })
        } else {
            titlesLinks.forEach(link => {
                link.style.display = ''
            })
        }
    }

    // Eventos
    window.addEventListener('resize', handleResize)
    window.addEventListener('load', handleResize)
})();

/* 
    Añadir dinamicamente los productos a las pestañas correspondientes, para ello:
        1. se recorre la products_list que es una lista de objetos
        2. se crea el .Article que se insertará en .Grid--sales, .Grid--news, .Grid--hits o .Grid--all
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

    const containerContent = document.querySelector('.Container-content')

    const gridSales = containerContent.querySelector('.Grid--sales')
    const gridNews = containerContent.querySelector('.Grid--news')
    const gridHits = containerContent.querySelector('.Grid--hits')
    const gridAll = containerContent.querySelector('.Grid--all')

    // forEach
    products_list.forEach(product => {
        const article = document.createElement('article')
        article.className = 'Grid-article Article'

        // .Article-img se le añade loading="lazy" luego
        // porque la altura de .Container-content se calcula dinámicamente 
        // ajustándola a su contenido, por lo que se necesita que las imágenes estén cargadas.

        article.innerHTML = `
            <div class="Article-description Description p-absolute p-absolute-bottom">
                <h3 class="Description-h3">
                    ${product.nombre}
                </h3>
                <p class="Description-p">
                    ${product.precio} €
                </p>
                <button class="Description-button Button Button-buy u-button-style" title="Añadir al carrito" value = ${product.id}>
                    Añadir
                </button>
            </div>

            <a href="product_details.html?id=${product.id}" class="Article-a" title="Ir a detalles del producto">
                <picture class="Grid-picture">
                    <source srcset="${product.small_imgs_webp}" type="image/webp" media="(max-width:650px)">
                    <source srcset="${product.small_imgs_jpeg}" type="image/jpeg" media="(max-width:650px)">
                    
                    <source srcset="${product.medium_imgs_webp}" type="image/webp">
                    <img src="${product.medium_imgs_jpeg}" width="600" height="840" alt="${product.nombre}" class="Article-img">
                </picture>
            </a>
        `

        if (product.rebajas) {
            gridSales.appendChild(article.cloneNode(true))
            
        } else if (product.novedades) {
            gridNews.appendChild(article.cloneNode(true))
        }

        product.exitos && gridHits.appendChild(article.cloneNode(true))

        gridAll.appendChild(article)

        // Añadirle loading="lazy" a todas las .Article-img
        const images = document.querySelectorAll('.Article-img')
        images.forEach(img => img.setAttribute('loading', 'lazy'))

    })

})();

/* 
    Ir a la pestaña correspondiente (Rebajas, Novedades, Lo más vendido y Todo) 
    teniendo en cuenta el name de la URL, para ello:
        1. Obtener el name de la URL
        2. Buscar ese name en el objeto positions (clave: valor)
        3. Quitarle la clase .isActive a todos los .Titles-a
        4. Quitarle la clase .isVisible a todos los .Grid
        5. Añadirle la clase .isActive al .Titles-a correspondiente
        6. Añadirle la clase .isVisible al .Grid correspondiente
 */
(() => {
    // Constantes
    const container = document.querySelector(`.Container`)

    const titles = container.querySelectorAll(`.Titles-a`)
    const grids = container.querySelectorAll(`.Grid`)

    const urlParams = new URLSearchParams(window.location.search)
    const articleName = urlParams.get('name')

    const positions = {
        'rebajas': 0,
        'novedades': 1,
        'exitos': 2,
        'todo': 3
    }

    const position = positions[articleName]

    grids.forEach((grid, indexGrids) =>{
        titles[indexGrids].classList.remove('isActive')
        grid.classList.remove('isVisible')
    })

    titles[position].classList.add('isActive')
    grids[position].classList.add('isVisible')

})();

/* 
    Buscar el .Grid con clase .isVisible 
    y ajustar la altura de .Container-content por la altura de ese .Grid
 */
(() => {

    // Constantes
    const container = document.querySelector('.Container-content')
    const grids = container.querySelectorAll('.Grid')

    // Variables
    let gridVisible = grids[0]

    // Función handler
    const handleHeight = () => {

        grids.forEach(grid => {
            if (grid.classList.contains('isVisible')) {
                gridVisible = grid
            }
        })

        container.style.height = `${gridVisible.offsetHeight}px`
    }

    // Evento
    window.addEventListener('load', handleHeight)
})();
 
/* 
    Cuando hago clic en .Titles-a[index]:
        1. se elimina la clase .isVisible a  todos .Grid[index]
        2. se añade la clase .isVisible a .Grid[index]
        3. y ajustar la altura de .Container-content a .Grid[index]
 */
(() => {
    // Constantes
    const container = document.querySelector(`.Container`)

    const titles = container.querySelectorAll(`.Titles-a`)
    const content = container.querySelector('.Container-content')
    const grids = container.querySelectorAll(`.Grid`)

    // Funciones Handler
    const handleClick = (indexTitles) => () => {
        grids.forEach((grid, indexGrids) =>{
            titles[indexGrids].classList.remove('isActive')
            grid.classList.remove('isVisible')
        })

        titles[indexTitles].classList.add('isActive')
        grids[indexTitles].classList.add('isVisible')
        content.style.height = `${grids[indexTitles].offsetHeight}px`
    }

    // Eventos
    titles.forEach((title, index) =>{
        title.addEventListener('click', handleClick(index))
    })
})();