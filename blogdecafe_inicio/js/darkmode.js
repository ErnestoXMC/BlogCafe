document.addEventListener('DOMContentLoaded', ()=>{
    const dark = document.querySelector('#dark');
    const body = document.querySelector('.body')

    if(sessionStorage.getItem('dark-mode') === 'habilitado'){
        body.classList.add('dark-mode');
    }else{
        body.classList.remove('dark-mode');
    }
    dark.addEventListener('click', (e)=>{
        e.preventDefault();
        if(body.classList.contains('dark-mode')){
            body.classList.remove('dark-mode');
            sessionStorage.setItem('dark-mode', 'deshabilitado');
        }else{
            body.classList.add('dark-mode');
            sessionStorage.setItem('dark-mode', 'habilitado');
        }
    });
})












