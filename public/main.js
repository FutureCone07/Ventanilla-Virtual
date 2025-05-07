//Código para guardar la información del formulario en formato JSON

const formulario = document.querySelector('main');


const procesaTodo = (event) => {
    //Para una accion predeterminada del evento
    event.prevenDefault();

    //Constructor que crea un objeto en tipo FormData
    const datos = new FormData(event.target);

    const datosCompletos = Object.fromEntries(datos.entries());
    
    console.log(datosCompletos);




    
}