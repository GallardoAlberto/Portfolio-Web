// programa que esconde y muestra todo el rato el menu segun el scroll, 
// si es hacia abajo lo esconde y si es hacia arriba lo muestra

let barraNavegacion = document.querySelector('.cabecera--navegar');

let ubicacion = 0;

// evento de rueda del raton

document.addEventListener('scroll', () => {

  let ancho = parseInt(window.innerWidth);

  if(ancho > 1050){
    if (window.scrollY > ubicacion) {
      barraNavegacion.style.animation = 'ocultarMenu 0.5s';
      barraNavegacion.style.animationFillMode = 'forwards';
    } else {
      barraNavegacion.style.animation = 'mostrarMenu 0.5s';
    }

    ubicacion = window.scrollY;
  }

  // para cuando sea movil

  if(ancho < 1050){
    if (window.scrollY > ubicacion && window.scrollY != 0) {
      barraNavegacion.style.animation = 'ocultarMenuMovil 0.6s linear';
      barraNavegacion.style.animationFillMode = 'forwards';
    } else {
      barraNavegacion.style.animation = 'mostrarMenuMovil 0.6s linear';
    }

    ubicacion = window.scrollY;

  }


});

//menu adaptado a movil, icono en funcionamiento

let iconoMenu = document.querySelector('.cabecera--navegar--icono');
let opcionesMenu = iconoMenu.getElementsByTagName('li');
let contClickMenu = 0;

iconoMenu.addEventListener('click', () =>{
  
  if(contClickMenu % 2 == 0){

    iconoMenu.classList.remove('fa-bars');
    iconoMenu.classList.add('fa-xmark');
    
    let cont = 0;

      for (let i = 0; i < opcionesMenu.length; i++) {
      opcionesMenu[i].style.display = 'flex';
      opcionesMenu[i].style.animation = 'aparecer 1s';
      opcionesMenu[i].style.animationFillMode = 'forwards';
      opcionesMenu[i].style.animationDelay = cont + 's';
      cont = cont + 0.4;
    }
    contClickMenu++;
  }else{
    iconoMenu.classList.remove('fa-xmark');
    iconoMenu.classList.add('fa-bars');

    for (let i = 0; i < opcionesMenu.length; i++) {
      opcionesMenu[i].style.animation = 'desaparecer 1s';
      opcionesMenu[i].style.animationFillMode = 'forwards';
    }

    contClickMenu++;

  }
})