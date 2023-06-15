import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', unique: true, length: 50, nullable: false })
  name: string;
  
  @Column({ name: 'email', unique: true, length: 70, nullable: false })
  email: string;
  
  @Column({ name: 'password', unique: true, length: 255, nullable: false })
  password: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: string;
  
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: string;
  
  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
  deletedAt: string;
}
