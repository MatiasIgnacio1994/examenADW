const button = document.getElementById("checkout")
let Items = document.querySelectorAll('.nombreProd')

let arregloItems = [] 

async function obtenerTransacciones() {
    const res = await fetch("/carrito/transacciones", { method: "GET" })
        const data = await res.json() 
        console.log("soy data:", data)
        arregloItems = data
        actualizarUIInicial() 
    
}


function actualizarUIInicial() {
    arregloItems.forEach((item, i) => {
        const cantidadElemento = document.getElementById(`cantidad-${i}`)
        if (cantidadElemento) {
            cantidadElemento.textContent = item.cantidad 
        }
    })
}


async function sumar(i) {
    arregloItems[i].cantidad += 1 
    actualizarUI(i) 
    await enviarActualizacion(arregloItems) 
}


async function restar(i) {
    if (arregloItems[i].cantidad > 0) { 
        arregloItems[i].cantidad -= 1
    }
    actualizarUI(i) 
    await enviarActualizacion(arregloItems) 
}


function actualizarUI(i) {
    const cantidadElemento = document.getElementById(`cantidad-${i}`)
    if (cantidadElemento) {
        cantidadElemento.textContent = arregloItems[i].cantidad 
    }
}


async function enviarActualizacion(arreglo) {
    try {
        const res = await fetch("/carrito", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(arreglo) 
        })

        const data = await res.json()

        if (!data.success) { 
            Swal.fire({
                title: "Error",
                text: "No se pudo actualizar el carrito.",
                icon: "error",
            })
        }
    } catch (error) {
        console.error("Error al enviar actualización:", error)
    }
}


document.querySelectorAll('.sumar').forEach(boton => {
    let i =boton.getAttribute('data-role')
    boton.addEventListener('click', async (evento) => {
        evento.preventDefault()
        await sumar(i) 
    })
})


document.querySelectorAll('.restar').forEach(boton => {
    let i =boton.getAttribute('data-role')
    boton.addEventListener('click', async (evento) => {
        evento.preventDefault()
        await restar(i) 
    })
})


button.addEventListener("click", async () => {
    try {
        const res = await fetch("/create-checkout-session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })

        const data = await res.json()

        if (data.url) {
            window.location.href = data.url 
        } else {
            Swal.fire({
                title: "Error",
                text: "Hubo un problema al iniciar el pago. Inténtalo nuevamente.",
                icon: "error",
            })
        }
    } catch (error) {
        console.error("Error en el checkout:", error)
    }
})

obtenerTransacciones()
