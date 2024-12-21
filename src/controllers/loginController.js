import RegistroModel from "../models/modelRegistroUser.js"
let usuarioLogueado =false
let estado=[false]
const verificarLogin = async (email,password) => {
    const usuario = await RegistroModel.findOne({ where: {email, password} })

    return usuario !== null;
}

const Loguear = async (req, res) => {
    try {
        const mensaje = await req.body;
        console.log("mensaje",mensaje)
        estado[0] = await verificarLogin(mensaje.email,mensaje.password)  

        console.log("logueado",estado[0])
        res.send(JSON.stringify({logueado: estado[0]}))
      
    } catch (error) {
        console.log("Error:", error.message);
    }
}
const loginPage = (req, res) => {
    res.render('pages/login', {
        cont: "Login",
        ruta: "/login",        
    })
}

export {estado,usuarioLogueado, loginPage, Loguear}







