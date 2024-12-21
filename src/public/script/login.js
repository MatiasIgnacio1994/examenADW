const formRegistro = document.getElementById('ingreso')
const btnRegistrarse = document.getElementById('ingresar')

btnRegistrarse.addEventListener('click', (event) => {
    event.preventDefault()
    const datosFormulario = {      
        'email': document.getElementById('email').value,
        'password': document.getElementById('password').value
    }

    console.log("email:",document.getElementById('email').value )
    console.log("password:",document.getElementById('password').value)


    datosJson=JSON.stringify(datosFormulario)
    fetch('http://localhost:3000/login/',
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json' 
            },       
   
            body: datosJson
        })
        .then(response => response.json())
        .then(usuarioRegistrado=>{ 
            const logueado=usuarioRegistrado.logueado

            console.log("logueado:",logueado)
            if(!logueado){
                Swal.fire({
                    title: "¡Usuario o contraseña incorrecta!",
                    text: "Ingresa correctamente tus credenciales.",
                    icon: "error",
                }).then(()=>{
                    location.reload()
                })
                
                }
            else{
                Swal.fire({
                    title: "¡Logueado!",
                    text: "Te has logueado exitosamente.",
                    icon: "success",
                }).then(
                    ()=>{location.href="/tienda"}
                )
            }
  
        }
        )

})
