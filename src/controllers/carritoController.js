import { transacciones } from "../controllers/tiendaController.js"
import { estado } from '../controllers/loginController.js'

const carritoPage=async (req,res)=> {
    if (!estado[0]) {
        
        res.render("pages/carrito", { cont: "Login", ruta: "/login" })
    } else {
       
        res.render("pages/carrito", { cont: "Logout", ruta: "/logout", transacciones: transacciones })
    }
}

const ActualizarTransacciones=async (req,res)=>{
    let datos = await req.body

    for(let i=0; i<transacciones.length;i++){

        let cant= datos[i].cantidad
    
        transacciones[i].cantidad=cant

    }

}


const EnviarTransacciones=async (req,res)=>{
    res.json(transacciones);
}

export {carritoPage,ActualizarTransacciones, EnviarTransacciones}






