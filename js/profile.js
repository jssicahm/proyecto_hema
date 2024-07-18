/* 
    Ir a la pestaña correspondiente (Perfil, Favoritos y Carrito) 
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
    const divs = container.querySelectorAll(`.Div`)

    const urlParams = new URLSearchParams(window.location.search)
    const articleName = urlParams.get('name')

    const positions = {
        'profile': 0,
        'bag': 1
    }

    const position = positions[articleName]

    divs.forEach((div, indexGrids) =>{
        titles[indexGrids].classList.remove('isActive')
        div.classList.remove('isVisible')
    })

    titles[position].classList.add('isActive')
    divs[position].classList.add('isVisible')

})();

/* 
    Buscar el .Div con clase .isVisible 
    y ajustar la altura de .Container-content por la altura de ese .Div
 */
(() => {

    // Constantes
    const container = document.querySelector('.Container-content')
    const divs = container.querySelectorAll('.Div')

    // Variables
    let divVisible = divs[0]

    const urlParams = new URLSearchParams(window.location.search)
    const name = urlParams.get('name')

    // Función handler
    const handleHeight = () => {

        divs.forEach(div => {
            if (div.classList.contains('isVisible')) {
                divVisible = div
            }
        })

        container.style.height = `${divVisible.offsetHeight}px`
    }

    // Evento
    window.addEventListener('load', handleHeight)
})();

/* 
    Mostrar los productos en el carrito
    PD: me apoyé en documentacion de Internet para hacerlo usando localStorage
 */
(() => {
    const grid = document.querySelector('.Grid--shop')
    const bag = JSON.parse(localStorage.getItem('bag')) || []
  
    // Mostrar los productos en el carrito
    bag.forEach(product => {
        const article = document.createElement('article')
        article.className = 'Grid-article Article'
        article.innerHTML = `
            <!-- Img del artículo que te lleva a los detalles de la prenda -->
            <a href="product_details.html?id=${product.id}" class="Article-a">
                <picture class="Article-picture">
                <source srcset="${product.small_imgs_webp}" type="image/webp" media="(max-width:650px)">
                <source srcset="${product.small_imgs_jpeg}" type="image/jpeg" media="(max-width:650px)">
                
                <source srcset="${product.medium_imgs_webp}" type="image/webp">
                <img src="${product.medium_imgs_jpeg}" width="600" height="840" alt="${product.nombre}" class="Article-img">
            </picture>
            </a>
        
            <!-- Toda la información -->
            <div class="Article-content">
        
                <!-- Precio -->
                <span class="Article-span">
                    <span class="Article-price">
                        ${product.precio}
                    </span>
                    <span class="Article-euro">
                        €
                    </span>
                </span>
                
                <!-- Eliminar artículo -->
                <button class="Article-button Article-button--delete u-button-style" title="Añadir al carrito">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="Article-svg" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </button>
        
            </div>
        `
        grid.appendChild(article)
    })
})();

/* 
    Calcular total del carrito
 */
(() => {

    // Constantes
    
    const bag = document.querySelector('.Div--bag')
    const prices = bag.querySelectorAll('.Article-price')
    console.log(prices)

    // Variables
    let totalPrice = 0

    prices.forEach(price =>{
        const priceNum = parseInt(price.innerText, 10)
        totalPrice = totalPrice + priceNum
    })

    document.getElementById('total-price').textContent = `${totalPrice}`

})();

/* 
    Eliminar productos del carrito cuando click en .Article-button--delete:
        1. se remove el .Article correspondiente
        2. se actualiza el precio total
 */
(() => {

    // Constantes
    const articles = document.querySelectorAll('.Article')
    const buttonsDelete = document.querySelectorAll('.Article-button--delete')
    const totalPrice = document.querySelector('.Comprar-price')

    // Variables
    let totalPriceNum = parseInt(totalPrice.innerText, 10)

    // Función Handler
    const handleClick = (index) => () => {
        const article = articles[index]

        // Actualizar el precio total
        const price = article.querySelector('.Article-price')
        const priceNum = parseInt(price.innerText, 10)
        totalPriceNum = totalPriceNum - priceNum
        document.getElementById('total-price').textContent = `${totalPriceNum}`

        // Eliminar el artículo del localStorage
        let bag = JSON.parse(localStorage.getItem('bag')) || []
        bag.splice(index, 1) // Elimina el artículo del array
        localStorage.setItem('bag', JSON.stringify(bag)) // Actualiza el localStorage

        article.remove()
    }

    // Eventos
    buttonsDelete.forEach((buttonDelete, index) =>{
        buttonDelete.addEventListener('click', handleClick(index))
    })
    
})();

