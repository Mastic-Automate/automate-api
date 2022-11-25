import {Router} from 'express';
import { handleCreateAutomateUser, handleDeleteAutomateUser, handleUpdateAutomateUserName, handleUpdateAutomateUserPlantId } from '../handlers/userAutomateHandlers.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const plantsRoutes = Router();

plantsRoutes.post(
  '/automate/create',
  [verifyToken],
  handleCreateAutomateUser
);
plantsRoutes.delete(
  '/automate/delete',
  [verifyToken],
  handleDeleteAutomateUser
);
plantsRoutes.post(
  '/automate/update/name',
  [verifyToken],
  handleUpdateAutomateUserName
);
plantsRoutes.post(
  '/automate/update/id',
  [verifyToken],
  handleUpdateAutomateUserPlantId
);

export {plantsRoutes}