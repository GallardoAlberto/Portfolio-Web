let iconoAud = document.querySelector('.musica');
let audio = document.querySelector('.audio');

let contClickAud = 0;
iconoAud.addEventListener('click', () => {
  if (contClickAud % 2 == 0) {
    audio.play();
    iconoAud.classList.remove('fa-play');
    iconoAud.classList.add('fa-pause');
  } else {
    audio.pause();
    iconoAud.classList.remove('fa-pause');
    iconoAud.classList.add('fa-play');
  }

  contClickAud++;
});


document.addEventListener('scroll', () => {

  if (window.scrollY >= 100) {
    iconoAud.style.right = '115px';
    iconoAud.style.backgroundColor = '#fca311';
    iconoAud.style.boxShadow = '0px 0px 3px 0px black';

    iconoAud.addEventListener('mouseenter', ()=>{
      iconoAud.style.backgroundColor = '#fc8211';
    })

    iconoAud.addEventListener('mouseleave', ()=>{
      iconoAud.style.backgroundColor = '#fca311';
    })

  } else {
    iconoAud.style.right = '50px';
    iconoAud.style.boxShadow = '0px 0px 3px 0px white';
    iconoAud.style.backgroundColor = 'transparent';

    iconoAud.addEventListener('mouseenter', ()=>{
      iconoAud.style.backgroundColor = '#fca311';
    })

    iconoAud.addEventListener('mouseleave', ()=>{
      iconoAud.style.backgroundColor = 'transparent';
    })
  }
});



