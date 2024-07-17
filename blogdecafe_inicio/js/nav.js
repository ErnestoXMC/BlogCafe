const menu = document.querySelector('.mobile-menu');
const nav = document.querySelector('.navegacion');

menu.addEventListener('click', mostrarNavegacion);

function mostrarNavegacion(e){
    e.preventDefault();
    if(nav.classList.contains('mostrar')){
        nav.classList.remove('mostrar');
    }else{
        nav.classList.add('mostrar');
    }
}
















