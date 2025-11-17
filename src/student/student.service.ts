import { Inject, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {
  constructor(
    @Inject('MYSQL_DATA_SOURCE')
    private mysqlDataSource: DataSource,
    @Inject('POSTGRESQL_DATA_SOURCE')
    private postgresqlDataSource: DataSource,
  ) {}

  async create(createStudentDto: CreateStudentDto) {
    // Ejemplo usando MySQL
    const queryRunner = this.mysqlDataSource.createQueryRunner();
    try {
      // Aquí puedes ejecutar queries usando MySQL
      // const result = await queryRunner.query('INSERT INTO students ...');
      return 'Student created successfully';
    } finally {
      await queryRunner.release();
    }
  }

  async findAll() {
    // Ejemplo usando PostgreSQL
    const queryRunner = this.postgresqlDataSource.createQueryRunner();
    try {
      // Aquí puedes ejecutar queries usando PostgreSQL
      // const students = await queryRunner.query('SELECT * FROM students');
      return 'All students retrieved successfully';
    } finally {
      await queryRunner.release();
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
