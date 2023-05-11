
// https://www.youtube.com/watch?v=qtH8PLuy1Ck TUTORIAL

const form = document.querySelector('#form');

// Esuchamos el evento submit del formulario
form.addEventListener('submit', handleSubmit);

async function handleSubmit (event){
    event.preventDefault();  // Para que no recargue con la informacion
    const form = new FormData(this) //Guardamos la informacion del formulario

    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers:  {
            'Accept': 'application/json'
        }
    })

    if (response.ok) { // Se pone .ok, porque el response tiene un campo donde viene tru o false
        this.reset();// Para limpiar el formulario
        alert('Mensaje enviado ok');
    }
}