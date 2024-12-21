import { estado } from '../controllers/loginController.js'

const indexPage = async (req, res) => {
    

    if (!estado[0]) {
        
        res.render("pages/index", { cont: "Login", ruta: "/login" })
    } else {
        
        res.render("pages/index", { cont: "Logout", ruta: "/logout" })
    }
};

export { indexPage }



