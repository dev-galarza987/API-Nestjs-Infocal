import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class User {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;

    @Column({ type: "int", name: "code", unique: true, nullable: false })
    code: number;

    @Column({ type: "varchar", name: "name", length: 100, nullable: false })
    name: string;

    @Column({ type: "varchar", name: "lastname", length: 100, nullable: false })
    lastname: string;

    @Column({ type: "varchar", name: "email", length: 100, nullable: false })
    email: string;

    @Column({ type: "varchar", name: "password", length: 100, nullable: false })
    password: string;

    @CreateDateColumn({ type: "timestamp", name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp", name: "updated_at" })
    updatedAt: Date;
}