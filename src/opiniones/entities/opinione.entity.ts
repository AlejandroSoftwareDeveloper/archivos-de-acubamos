import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Opinione {

@PrimaryGeneratedColumn()
    id: number;

@Column({ type: 'varchar', length: 30 })
    fullname?: string;

@Column({ type: 'varchar', length: 50 })
    workarea?: string;

@Column({ type: 'varchar',length: 255})
    comments?: string;
}
