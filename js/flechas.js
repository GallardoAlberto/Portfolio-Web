// Los iconos con flechas tienen la accion de subir y bajar de sitio en el que se encuentra el usuario

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
    window.location.href = "#contacto";
})
