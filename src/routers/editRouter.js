import express from 'express';
import { edit, patchEdit } from '../controller/editController';
const editRouter = express.Router();

editRouter.get('/:id',edit);

editRouter.patch('/:id',patchEdit);

export default editRouter;
