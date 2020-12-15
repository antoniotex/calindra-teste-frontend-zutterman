const btShowMenu = document.getElementById('showMenu')
const menu = document.getElementById('menu')

btShowMenu.addEventListener('click', function(){
    if(menu.classList.contains('menu-closed')){
        menu.classList.remove('menu-closed')
    }else{
        menu.classList.add('menu-closed')
    }
}, false)