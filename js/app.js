const menuItems = document.querySelectorAll('.menu a[href^="#"]')
const corpo = document.body
const comandos = [
    'console.log(\"hello world!\");',
    'var n1 = 3;',
    'if(true){ document.write(n1); }',
    'for(let i = 0; i < array.length; i++){',
    'while(true){break}',
    'alert(cont);',
    'const PI = Math.PI;',
    'switch(op){',
    'do(j){',
    'setInterval(function(){',
    'const document.body.onload = e =>{'
]
const codigos = [
    document.querySelector("span.c1"),
    document.querySelector("span.c2"),
    document.querySelector("span.c3"),
    document.querySelector("span.c4"),
    document.querySelector("span.c5"),
    document.querySelector("span.c6"),
    document.querySelector("span.c7"),
    document.querySelector("span.c8")
]

//Evento para marcar item menu
document.addEventListener('scroll', e => {
    marcarItemMenu(idElementoVisivel())
})

//Evento para fazer scroll suave
menuItems.forEach(item => {
    item.addEventListener('click', scrollToId)
})

//Intervalo ara gerar codigos em posições aleatórias;
setInterval(function () {
    posicionarCodigo(codigos[0])
    posicionarCodigo(codigos[1])
    posicionarCodigo(codigos[2])
    posicionarCodigo(codigos[3])
    posicionarCodigo(codigos[4])
    posicionarCodigo(codigos[5])
    posicionarCodigo(codigos[6])
    posicionarCodigo(codigos[7])
    posicionarCodigo(codigos[8])
}, 2000)

//<========================================
//função scroll suave
function scrollToId(e) {
    e.preventDefault()
    const id = e.target.getAttribute('href')
    const to = document.querySelector(id).offsetTop
    window.scroll({
        top: to,
        behavior: "smooth",
    });
}
//========================================>


//<========================================
//funções para marcar item menu
function idElementoVisivel() {
    const y = document.querySelector('.home').clientHeight + 120
    return document.elementFromPoint(2, y / 2).id
}

function marcarItemMenu(idItem) {
    item = document.querySelector(`.menu a[href^="#${idItem}"]`)
    const itemMarcado = retornaItemMarcado()
    if (itemMarcado != item) {
        desmarcarItemMenu(itemMarcado)
        item.classList.add('itemChecked')
    }
}

function retornaItemMarcado() {
    let itemMarcado = ''
    menuItems.forEach(item => {
        if (item.className == 'itemChecked') {
            itemMarcado = item
        }
    })
    return itemMarcado
}

function desmarcarItemMenu(item) {
    item.classList.remove('itemChecked')
}
//========================================>


//<========================================
//funções para gerar códigos em posições aleatórias
function rand(min = 0, max = 1000) {
    if (min > max) [min, max] = [max, min]

    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

function posicionarCodigo(item) {
    const divHome = document.querySelector('div.home')
    const left = rand(0, divHome.clientWidth - 200)
    const top = rand(120, divHome.clientHeight - 10)
    const comando = comandos[rand(0, 10)]

    item.style.top = top + "px"
    item.style.left = left + "px"
    item.innerText = comando
    item.animate([
        // keyframes
        { opacity: 0 },
        { opacity: .4 }
    ], {
        // timing options
        duration: 2000,
        iterations: Infinity
    });
}
//=========================================>