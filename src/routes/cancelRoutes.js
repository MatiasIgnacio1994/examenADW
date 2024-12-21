import { cancelPage } from '../controllers/cancelController.js';
import express from 'express';
const routerCancel = express.Router();

routerCancel.get('/', cancelPage);
export { routerCancel };