import { carritoPage, ActualizarTransacciones, EnviarTransacciones } from "../controllers/carritoController.js"
import express from 'express'

const routerCarrito = express.Router()

routerCarrito.get('/', carritoPage)

routerCarrito.get('/transacciones', EnviarTransacciones);
routerCarrito.post('/', ActualizarTransacciones);

export { routerCarrito };


