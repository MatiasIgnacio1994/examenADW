import { estado } from '../controllers/loginController.js'

const logout= async(req, res) => {
    
    estado[0]=false
    console.log("soy el estado de logout:", estado[0])
    await res.render('pages/index', { cont: "Login", ruta: "/login" })
    }


    export {logout}