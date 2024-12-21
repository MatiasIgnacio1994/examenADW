import { indexPage } from "../controllers/indexController.js"
import express from 'express'
const routerIndex =express.Router()
routerIndex.get('/',indexPage)

export {routerIndex}
