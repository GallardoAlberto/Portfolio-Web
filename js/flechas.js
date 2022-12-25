// Los iconos con flechas tienen la accion de subir y bajar de sitio en el que se encuentra el usuario

// subir al inicio

let flechaInicio = document.querySelector('.inicio--up');

document.addEventListener('scroll', () => {

    if (window.scrollY >= 100) {
        flechaInicio.style.right = '50px';

        flechaInicio.addEventListener('mouseenter', () => {
            flechaInicio.style.backgroundColor = '#fc8211';
        })

        flechaInicio.addEventListener('mouseleave', () => {
            flechaInicio.style.backgroundColor = '#fca311';
        })

        flechaInicio.addEventListener('click', () => {
            window.location.href = "#inicio";
        })
    }
    else {
        flechaInicio.style.right = '-150px';
    }
})
// cabecera

let flecha1 = document.querySelector('.cabecera--img--flecha');

flecha1.addEventListener('click', () => {
    window.location.href = "#sobreMi";
})

// sobreMi

let flecha2 = document.querySelector('.sobreMi--flechaUp');

flecha2.addEventListener('click', () => {
    window.location.href = "#inicio";
})

let flecha3 = document.querySelector('.sobreMi--flechaDown');

flecha3.addEventListener('click', () => {
    window.location.href = "#habilidades";
})

let flecha4 = document.querySelector('.habilidades--flechaUp');

flecha4.addEventListener('click', () => {
    window.location.href = "#sobreMi";
})

let flecha5 = document.querySelector('.habilidades--flechaDown');

flecha5.addEventListener('click', () => {
    window.location.href = "#contacto";
})

let flecha6 = document.querySelector('.contacto--flechaUp');

flecha6.addEventListener('click', () => {
    window.location.href = "#habilidades";
})