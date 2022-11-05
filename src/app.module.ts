import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllersModule } from './controllers/controllers.module';
import { RepositoriesModule } from './repositories/repositories.module';
import { ServicesModule } from './services/services.module';
import { ModelModule } from './model/model.module';
import { DtoModule } from './dto/dto.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    ControllersModule,
    RepositoriesModule,
    ServicesModule,
    ModelModule,
    DtoModule,
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.HOST,
      username: process.env.USERNAME_DB,
      password: process.env.PASSWORD,
      port: parseInt(process.env.PORT_DB),
      database: process.env.DATABASE,
      models: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
