import { signinPage, createUser} from "../controllers/signinController.js"
import express from 'express'
const routerSignin=express.Router()

routerSignin.post('/',createUser)
routerSignin.get('/',signinPage)



export {routerSignin}