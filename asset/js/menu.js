let btnMenu = document.querySelector('#btnMenu');
let menu = document.querySelector('#menu');
let botonesMenu = document.querySelectorAll('#menu .optionMenu');
/* console.log(botonesMenu); */

//AL PRESIONAR EL BOTON DE MENU APARECE Y DESAPARECE
btnMenu.addEventListener('click', ()=> {

if(menu.style.display === 'none') {
    menu.style.display = 'block';
    btnMenu.style.background = 'white';
    btnMenu.style.border = '2px solid rgb(27, 115, 216)';
    menu.classList.add('menu');
    
} else {
    menu.style.display = 'none';
    btnMenu.style.background = 'var(--color-primary)';
    
}
})

/* AL PRESIONAR CUALQUIER OPCION DEL MENU, SE CIERRA EL MENU Y REDIRIGE A LA SECCION
 Controlando que sea una pantalla menor a 1000px de ancho, ya que no tiene el mismo
comportamiento */

botonesMenu.forEach( enlace => {

    if (window.innerWidth < 1000) {
        enlace.addEventListener ('click', ()=> {
            menu.style.display = 'none';
            btnMenu.style.background = 'rgb(27, 115, 216)';
        })
    }
});



