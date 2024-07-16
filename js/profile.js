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
        'favorites': 1,
        'bag': 2
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