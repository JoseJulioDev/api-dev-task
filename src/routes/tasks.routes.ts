import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateTaskService from '../services/CreateTaskService';
import Task from '../models/Task';

const tasksRouter = Router();

tasksRouter.get('/', async (request, response) => {
    const tasksRepository = getRepository(Task);
    const tasks = await tasksRepository.find();

    return response.json(tasks);
});

tasksRouter.post('/', async (request, response) => {
    const {title, description} = request.body;

    const createTask = new CreateTaskService();

    const task = await createTask.execute({title, description});

    return response.json(task);
});

export default tasksRouter;