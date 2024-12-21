import ContactoModel from '../models/modelContacto.js'
import { estado } from '../controllers/loginController.js'

const createMessage = async (req, res) => {
    try {
        const mensaje = await req.body
        ContactoModel.create(mensaje)
        res.redirect('/');
    } catch (error) {

        res.json({ error: error.message })
    }
}
const contactoPage = (req, res) => {

    if (!estado[0]) {

        res.render("pages/contacto", { cont: "Login", ruta: "/login" })
    } else {

        res.render("pages/contacto", { cont: "Logout", ruta: "/logout" })
    }
}
export { createMessage, contactoPage }



