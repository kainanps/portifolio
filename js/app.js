const menuItems = document.querySelectorAll('.menu a[href^="#"]')
const corpo = document.body

document.addEventListener('scroll', e => {
    marcarItemMenu(idElementoVisivel())
})

menuItems.forEach(item =>{
    item.addEventListener('click', scrollToId)
})

function scrollToId(e){
    e.preventDefault()
    const id = e.target.getAttribute('href')
    const to = document.querySelector(id).offsetTop
    window.scroll({
          top: to,
          behavior: "smooth",
    });
}

function idElementoVisivel(){
    const y = document.querySelector('.home').clientHeight + 120
    return document.elementFromPoint(2,y/2).id
}

function marcarItemMenu(idItem){
    item = document.querySelector(`.menu a[href^="#${idItem}"]`)
    const itemMarcado = retornaItemMarcado()
    if(itemMarcado != item){
        desmarcarItemMenu(itemMarcado)
        item.classList.add('itemChecked')
    }
}

function retornaItemMarcado(){
    let itemMarcado = ''
    menuItems.forEach(item => {
        if(item.className == 'itemChecked'){
            itemMarcado = item
        }
    })
    return itemMarcado
}

function desmarcarItemMenu(item){
    item.classList.remove('itemChecked')
}