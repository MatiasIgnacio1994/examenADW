import { loginPage, Loguear } from '../controllers/loginController.js'
import express from 'express';
const routerLogin =express.Router();


routerLogin.post('/',Loguear)
routerLogin.get('/',loginPage)

export {routerLogin}
