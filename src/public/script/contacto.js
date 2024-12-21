const btnEnviar = document.getElementById('enviar')
const formContacto = document.getElementById('contactar')

formContacto.addEventListener('submit', (evento) => {
    evento.preventDefault()

    // Captura de campos del formulario
    let campoNombre = document.getElementById('nombre').value;
    let campoCorreo = document.getElementById('email').value;
    let campoMensaje = document.getElementById('mensaje').value;

    // Crear objeto JSON
    let datos = { "nombre": campoNombre, "correo": campoCorreo, "mensaje": campoMensaje }
    let datosJson = JSON.stringify(datos);

    fetch('http://localhost:3000/contacto', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: datosJson
    })
    .then((response) => {
        if (response.ok) {
            return Swal.fire({
                title: "¡Mensaje enviado!",
                text: "Tu mensaje ha sido enviado exitosamente.",
                icon: "success"
            }).then(() => {
                location.href = "/"
            });
        } else {
            Swal.fire({
                title: "Error",
                text: "No se pudo enviar tu mensaje. Por favor, intente nuevamente.",
                icon: "error"
            })
        }
    })
})
