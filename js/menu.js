// programa que esconde y muestra todo el rato el menu segun el scroll, 
// si es hacia abajo lo esconde y si es hacia arriba lo muestra

let barraNavegacion = document.querySelector('.cabecera--navegar');

let ubicacion = 0;

// evento de rueda del raton

document.addEventListener('scroll', () => {

    if (window.scrollY > ubicacion) {
        barraNavegacion.style.animation = 'ocultarMenu 0.5s';
        barraNavegacion.style.animationFillMode = 'forwards';
      } else {
        barraNavegacion.style.animation = 'mostrarMenu 0.5s';
      }

      ubicacion = window.scrollY;

});

