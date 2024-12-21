import { estado } from '../controllers/loginController.js'

const nosotrosPage=async (req,res)=> {

    if (!estado[0]) {
        
        res.render("pages/nosotros", { cont: "Login", ruta: "/login" })
    } else {
       
        res.render("pages/nosotros", { cont: "Logout", ruta: "/logout" })
    }
}

export {nosotrosPage}






