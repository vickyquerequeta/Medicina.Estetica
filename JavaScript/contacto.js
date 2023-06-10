// botonFormulario
const boton = document.getElementById('botonFormulario')
boton.addEventListener('click', saludar)

function saludar() {
    console.log("¡Respuesta enviada correctamente!");
}

// Alerta al boton Formulario
document.getElementById('botonFormulario').onclick = function() {
    alert('¡Muchas gracias! Su consulta fue enviada correctamente.');
}
