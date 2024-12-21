import { successPage } from '../controllers/successController.js';
import express from 'express';
const routerSuccess = express.Router();

routerSuccess.get('/', successPage);
export { routerSuccess };