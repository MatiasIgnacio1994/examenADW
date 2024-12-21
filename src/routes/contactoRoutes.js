import express from 'express'
import { contactoPage, createMessage } from '../controllers/contactoController.js'
const routerContactos = express.Router()

routerContactos.get('/', contactoPage)
routerContactos.post('/', createMessage)

export { routerContactos }



