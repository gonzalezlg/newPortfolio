let botonesAbrirModalTelecom = document.querySelector('#expTelecom');
let botonesAbrirModalVeritran = document.querySelector('#expVeritran');
let modaltelecom = document.getElementById("mi-modal-telecom");
let modalveritran = document.getElementById("mi-modal-veritran");
let botonesCerrarModal = document.querySelectorAll('.closed');
console.log(modaltelecom);
console.log(modalveritran);


/* PARA LA EXPERIENCIA EN TELECOM*/

botonesAbrirModalTelecom.addEventListener('click', ()=> {
        modaltelecom.style.display = "block";
});

botonesAbrirModalVeritran.addEventListener('click', ()=> {
    modalveritran.style.display = "block";
});

botonesCerrarModal.forEach(boton => {
    boton.addEventListener('click', () => {
        modaltelecom.style.display = "none";
        modalveritran.style.display = "none";
    });
  });