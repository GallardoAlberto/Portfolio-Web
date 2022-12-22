let iconoAud = document.querySelector('.musica');
let audio = document.querySelector('.audio');

let contClickAud = 0;
iconoAud.addEventListener('click', () => {
    if(contClickAud % 2 == 0){
        audio.play();
        iconoAud.classList.remove('fa-play');
        iconoAud.classList.add('fa-pause');
    }else{
        audio.pause();
        iconoAud.classList.remove('fa-pause');
        iconoAud.classList.add('fa-play');
    }

    contClickAud++;
});

document.addEventListener('scroll', () => {

    console.log(window.scrollY);
    
    if (window.scrollY >= 100) {
        iconoAud.style.backgroundColor = '#fca311';
      }else{
        iconoAud.style.backgroundColor = 'transparent';
        iconoAud.style.color = 'white';

      }
    })