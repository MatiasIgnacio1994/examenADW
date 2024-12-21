import { agregarProd, tiendaPage } from "../controllers/tiendaController.js"

import express from 'express'
const routerTienda =express.Router();
routerTienda.get('/',tiendaPage)
routerTienda.post('/',agregarProd)
export {routerTienda}
