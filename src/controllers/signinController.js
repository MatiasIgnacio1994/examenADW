let usuarioExistente =false

import RegistroModel from "../models/modelRegistroUser.js"
const verificarUsuarioExistente = async (email) => {
    const usuario = await RegistroModel.findOne({ where: { email } })
    return usuario !== null
};
const createUser = async (req, res) => {
    try {
        const mensaje = await req.body

        usuarioExistente = await verificarUsuarioExistente(mensaje.email)
        console.log("mensaje:", mensaje)
        console.log("usuarioexiste", usuarioExistente)
        if(!usuarioExistente)
            {
                RegistroModel.create(mensaje)

            }
            res.send(JSON.stringify({existeUsuario: usuarioExistente}))
      
    } catch (error) {
        console.log("Error:", error.message);
    }
}
const signinPage = (req, res) => {
    res.render('pages/signin', {
        cont: "Login",
        ruta: "/login",
        existeUsuario: usuarioExistente, 
    })
}
export {usuarioExistente, signinPage, createUser}