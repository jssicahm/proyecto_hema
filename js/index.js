/* 
    En index.js se encuentra:
        - todo lo referente a index.html
 */

/*
    Al hacer 'mousemove' sobre .Article--primary:
        1. Obtener la posición del ratón relativa a 'imgs'
        2. Determinar en qué columna se encuentra el ratón
        3. Eliminar la clase 'isVisible' de todas las imágenes,
           excepto de la img que corresponde a la columna donde se encuentra el ratón
        4. Añadir la clase 'isVisible' a la imagen que corresponde a la columna donde 
           se encuentra el ratón imgsArray[columnNumber]
*/
(() => {
    // Constantes
    const articleSales = document.querySelector('.Article--primary')
    const imgs = articleSales.querySelector('.Images')
    const imgsArray = articleSales.querySelectorAll('.Images-img')
    const pictureArray = articleSales.querySelectorAll('.Images-picture')

    // Variables
    let articleSalesWidth = articleSales.offsetWidth    // Ancho de articleSales
    let contColumns = pictureArray.length                  // Cantidad de columnas
    let columnWidth = articleSalesWidth / contColumns   // Ancho de cada columna

    // Funcion Handler
    const handleImgIsVisible = (event) => {
        
        let mouseX = event.clientX - imgs.getBoundingClientRect().left  // Posición del ratón
        let columnNumber = Math.floor(mouseX / columnWidth)             // Número de la columna donde se encuentra el ratón

        pictureArray.forEach((img, index) => {
            index != columnNumber 
            ? imgsArray[index].classList.remove('isVisible') 
            : imgsArray[columnNumber].classList.add('isVisible')

        })
    }

    // Eventos
    articleSales.addEventListener('mousemove', handleImgIsVisible)
})();

/*
    Se añade la clase .isVisible a los .Article-title 
    a medida que van apareciendo en pantalla.
 */
(() => {

    // Constante
    const titlesSecondary = document.querySelectorAll('.Article-title')

    // Función Handler
    const handleShowTitle = () => {
        const innerHeightWindows = window.innerHeight

        titlesSecondary.forEach(title => {
            const titleTop = title.getBoundingClientRect().top
            titleTop < innerHeightWindows && title.classList.add('isVisible')
        })
    }

    // Evento
    window.addEventListener('scroll', handleShowTitle)
        
})();


/*
    Se le añade la clase .isVisible a .Section-p
    a medida que aparecen en pantalla.
 */
(() => {

        // Constante
        const articleContent = document.querySelector('.Article-content')
        const paragraphs = articleContent.querySelectorAll('.Section-p')

        // Función Handler
        const handleShowSection = () => {
            const innerHeightWindows = window.innerHeight

            paragraphs.forEach((paragraph, index) => {
                const paragraphTop = paragraph.getBoundingClientRect().top
                
                if (paragraphTop < innerHeightWindows) {
                    paragraphs[index].classList.add('isVisible')
                }

            })
        }
    
        // Evento
        window.addEventListener('scroll', handleShowSection)
})();
