import { getRepository } from 'typeorm';

import Task from '../models/Task';
import Status from '../models/Status';

interface Request {
    title: string;
    description: string;
}

class CreateTaskService {

    public async execute({title, description}: Request): Promise<Task> {
        const tasksRepository = getRepository(Task);
       
        const task = tasksRepository.create({
            title,
            description,
            status: Status.OPENED
        });

        await tasksRepository.save(task);

        return task;
    }
}

export default CreateTaskService;