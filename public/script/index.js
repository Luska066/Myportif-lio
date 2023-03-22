let menu = document.querySelector('.menu_mobile');
let imageMobile = document.getElementById('iconResponsiveContainer');
let navigation = document.querySelector('#navigation')


setInterval((time) => {
    if (window.innerWidth >= 1130) {
        menu.style.display = 'none';
    } else {}

   
}, 200);





function mostrar() {

    menu.style.animation = 'Open .3s ease-in-out'
    menu.style.display = 'block';
    menu.style.position = 'absolute';
    menu.style.left = '50%'
    menu.style.width = '50%';
    menu.style.transition = 'all .3s';


}

imageMobile.addEventListener('dblclick', () => {

    menu.style.animation = 'Back .3s ease-in-out';
    menu.style.left = 'calc(100% + 40px)';
    setTimeout(() => {
        menu.style.display = 'none';
    }, 1000)

})

imageMobile.addEventListener('touchstart', (env) => {
    menu.style.animation = 'Open .6s ease-in-out'
    menu.style.display = 'block';
    menu.style.position = 'relative';
    menu.style.left = '50%'
    menu.style.width = '50%';
    menu.style.transition = 'all .6s';
  

})

let body = document.querySelector('body')
body.addEventListener('touchmove', (evn) => {
    menu.style.animation = 'Back .6s ease-in-out';
    menu.style.left = 'calc(100% + 40px)';
    setTimeout(() => {
        menu.style.display = 'none';
    }, 1000)

})