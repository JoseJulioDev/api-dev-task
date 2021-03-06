import { Router } from 'express';

import homeRouter from './home.routes';
import tasksRouter from './tasks.routes';

const routes = Router();

routes.use('/', homeRouter);
routes.use('/tasks', tasksRouter);

export default routes;
