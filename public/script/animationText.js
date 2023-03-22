
function typeWriter(element){
    const textArray = element.innerHTML.split('');
    element.innerHTML = ''
    textArray.forEach((letra,i)=> {
        setTimeout(()=>{
            element.innerHTML += letra;
        }, 25 * i)
    });
}

let p = document.querySelector('p')
p.style.display = 'none'
let h = document.querySelector('.h1')

typeWriter(h)

setTimeout(()=>{
    p.style.display = 'block'
    typeWriter(p)
},1500)

