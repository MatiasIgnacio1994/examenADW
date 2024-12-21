import { crearPago } from "../controllers/stripeController.js"

import express from 'express'
const routerStripe =express.Router();

routerStripe.post('/',crearPago)
export {routerStripe}