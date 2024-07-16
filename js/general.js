/*
    En general.js se encuentra:
        - interacciones en el header
        - interacciones en el footer
*/

// HEADER

/*
    Al hacer 'click' en el .Header-button--open:
        1. Aparece el .Nav--clothes
        2. Desaparece el .Header-button--open
        3. Aparece el .Header-button--close

    Y al hacer 'click' en .Header-button--close:
        1. Desaparece el .Nav--clothes
        2. Desaparece el .Header-button--close
        3. Aparece el .Header-button--open
*/
(() => {
    // Constantes
    const header = document.querySelector('.Header')
    const main = document.querySelector('.Main')
    const navClothes = header.querySelector('.Nav--clothes')
    const headerButtonOpen = header.querySelector('.Header-button--open')
    const headerButtonClose = header.querySelector('.Header-button--close')

    // Funciones Handler
    const handleVisibleNav = () => {
        navClothes.classList.add('isVisible')
        headerButtonOpen.classList.remove('isVisible')
        headerButtonClose.classList.add('isVisible')
    }
    const handleNoVisibleNav = () => {
        navClothes.classList.remove('isVisible')
        headerButtonClose.classList.remove('isVisible')
        headerButtonOpen.classList.add('isVisible')
    }

    // Eventos
    headerButtonOpen.addEventListener(`click`, handleVisibleNav)
    headerButtonClose.addEventListener(`click`, handleNoVisibleNav)
    main.addEventListener(`click`, handleNoVisibleNav)
})();