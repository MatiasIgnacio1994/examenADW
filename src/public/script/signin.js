const formRegistro = document.getElementById('registro')
const btnRegistrarse = document.getElementById('registrarse')

btnRegistrarse.addEventListener('click', (event) => {
    event.preventDefault()
    const datosFormulario = {      
        'email': document.getElementById('email').value,
        'password': document.getElementById('password').value
    }

    datosJson=JSON.stringify(datosFormulario)
    fetch('http://localhost:3000/signin/',
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'  
            },       
   
            body: datosJson
        })
        .then(response => response.json())
        .then(usuarioLogueado=>{ 
            const existeUsuario=usuarioLogueado.existeUsuario

            
            if(existeUsuario){
                Swal.fire({
                    title: "¡No Registrado!",
                    text: "Este usuario ya ha sido registrado.",
                    icon: "error",
                }).then(()=>{
                    location.reload()
                })
                
                }
            else{
                Swal.fire({
                    title: "¡Registrado!",
                    text: "Te has registrado exitosamente.",
                    icon: "success",
                }).then(
                    ()=>{location.href="/login"}
                )
            }
  
        }
    )

})
