import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TeacherModule } from './teacher/teacher.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), TeacherModule, StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly configService: ConfigService) {}
  onModuleInit() {
    console.log('AppModule initialized');
    console.log(`Server listen on http://127.0.0.1:${this.configService.get('port')}`);
  }
}
