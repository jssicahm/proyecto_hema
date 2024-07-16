// SLIDER

(() => {
    console.log('iniciando slider')

    // Constantes
    const slider = document.querySelector('.Slider')
    const sliderContent = slider.querySelector('.Slider-content')
    const sliderbuttonUp = slider.querySelector('.Slider-button--up')
    const sliderbuttonDown = slider.querySelector('.Slider-button--down')
    const sliderDiv = slider.querySelectorAll('.Slider-div')

    // Variables
    let cantDiv = sliderDiv.length
    let divHeight = 100/cantDiv
    let cont = 0

    const previous = () => {
        
        console.log('previous')
        cont--
        if (cont >= 0) {
            console.log(`${cont} >=  ${0}`)
            sliderContent.style.transform = `translateY(-${divHeight * cont}%)`
            sliderbuttonDown.classList.add('isVisible')
        }

        if (cont - 0 == 1) {
            sliderbuttonUp.classList.remove('isVisible')
        }
        
    }

    const next = () => {
        cont++

        if (cont < cantDiv) {
            console.log(`${cont} <  ${cantDiv}`)
            sliderContent.style.transform = `translateY(-${divHeight * cont}%)`
            sliderbuttonUp.classList.add('isVisible')
        } 

        if (cantDiv - cont == 1) {
            cont++
            sliderbuttonDown.classList.remove('isVisible')
        }
        
    }

    // Eventos
    sliderbuttonUp.addEventListener('click', previous)
    sliderbuttonDown.addEventListener('click', next)
    
})();