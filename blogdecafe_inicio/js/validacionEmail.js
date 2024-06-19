document.addEventListener('DOMContentLoaded', ()=>{

    //Atributos
    const nombre = document.querySelector('#nombre');
    const email = document.querySelector('#email');
    const asunto = document.querySelector('#asunto');
    const telefono = document.querySelector('#telefono');
    const mensaje = document.querySelector('#mensaje');
    const btnEnviar = document.querySelector('.enviar');
    const btnReset = document.querySelector('.reset');
    const formulario = document.querySelector('#formulario');
    console.log(btnEnviar)
    //Objeto
    const contacto = {
        nombre: '',
        email: '',
        asunto: '',
        telefono: '',
        mensaje: ''
    }

    //Eventos
    nombre.addEventListener('blur', validarCampos);
    email.addEventListener('blur', validarCampos);
    asunto.addEventListener('blur', validarCampos);
    telefono.addEventListener('blur', validarCampos);
    mensaje.addEventListener('blur', validarCampos);
    btnEnviar.addEventListener('click', (e)=>{
        e.preventDefault();

        const spinner = document.querySelector('.spinner');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.add('hidden');

            resetearFormulario();

            mensajeExito = document.createElement('P');
            mensajeExito.textContent = 'Formulario enviado exitosamente';
            mensajeExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
            formulario.appendChild(mensajeExito);

            setTimeout(() => {
                formulario.removeChild(mensajeExito);
                console.log(contacto)
            }, 2000);
        }, 3000);
    })
    btnReset.addEventListener('click', ()=>{
        resetearFormulario();
    })


    function validarCampos(e){
        const mensaje = `El campo ${e.target.name} es obligatorio`;
        const campo = e.target.parentElement.parentElement;
        if(e.target.value.trim() === ''){
            mostrarAlerta(mensaje, campo);
            contacto[e.target.name] = '';
            habilitarBotonEnviar(contacto);
            return;
        }
        if(!validarEmail(e.target.value) && e.target.id === 'email'){
            mostrarAlerta('El email no es valido', campo);
            contacto[e.target.name] = '';
            habilitarBotonEnviar(contacto);
            return;
        }
        if(!validarTelefono(e.target.value) && e.target.id === 'telefono'){
            mostrarAlerta('El telefono no es valido', campo);
            contacto[e.target.name] = '';
            habilitarBotonEnviar(contacto);
            return;
        }
        limpiarAlerta(campo);
        //Almacenando los datos en el objeto
        contacto[e.target.name] = e.target.value.trim().toLowerCase();
        habilitarBotonEnviar(contacto);
        console.log(contacto);
        
    }
    function mostrarAlerta(mensaje, campo){
        limpiarAlerta(campo);
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'text-center', 'p-2', 'rounded-lg', 'alerta', 'mg')
        campo.appendChild(error);
    }
    function limpiarAlerta(campo){
        const alerta = campo.querySelector('.alerta');
        if(alerta !== null){
            alerta.remove();
        }
    }
    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        const resultado = regex.test(email);
        return resultado;
    }
    function validarTelefono(telefono){
        const regex = /^9\d{8}$/
        const resultado = regex.test(telefono);
        return resultado;
    }
    function habilitarBotonEnviar(contacto){
        if(Object.values(contacto).includes('')){
            btnEnviar.classList.add('opacity-50');
            btnEnviar.classList.remove('cursor');
            btnEnviar.disabled = true;
            return;
        }
            btnEnviar.classList.add('cursor');
            btnEnviar.classList.remove('opacity-50');
            btnEnviar.disabled = false;
    }
    function resetearFormulario(){
        formulario.reset()

        contacto.nombre = ''
        contacto.email = ''
        contacto.asunto = ''
        contacto.telefono = ''
        contacto.mensaje = ''
        habilitarBotonEnviar(contacto);
    }









});























































