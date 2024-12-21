import { logout } from '../controllers/logoutController.js'
import express from 'express'
const routerLogout =express.Router();

routerLogout.get('/',logout)

export {routerLogout}