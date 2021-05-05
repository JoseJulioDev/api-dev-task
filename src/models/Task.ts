import {Entity, PrimaryGeneratedColumn, CreateDateColumn,
        UpdateDateColumn, Column} from 'typeorm';

import Status from './Status';

@Entity('tasks')
class Task {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    title: string;

    description: string;

    @Column('int')
    status: Status;

    @CreateDateColumn()
    create_at: Date;

    @UpdateDateColumn()
    update_at: Date;

}

export default Task;