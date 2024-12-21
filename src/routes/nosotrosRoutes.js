import { nosotrosPage } from "../controllers/nosotrosController.js"
import express from 'express'
const routerNosotros=express.Router()
routerNosotros.get('/',nosotrosPage)
export {routerNosotros}