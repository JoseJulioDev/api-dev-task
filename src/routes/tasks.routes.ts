import { Router } from 'express';

const tasksRouter = Router();

tasksRouter.get('/', async (request, response) => {
    return response.json("products");
});

export default tasksRouter;
