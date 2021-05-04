import {Entity, PrimaryGeneratedColumn, CreateDateColumn,
        UpdateDateColumn, Column} from 'typeorm';

enum Status {
    OPENED = 1,
    IN_PROGRESS = 2,
    FINISHED = 3,
    CANCELED = 4,
}

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