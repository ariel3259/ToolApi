import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllersModule } from './controllers/controllers.module';
import { ServicesModule } from './services/services.module';
import { ModelModule } from './model/model.module';
import { DtoModule } from './dto/dto.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import Tool from './model/tool.model';
import FavoriteTool from './model/favorite-tool.model';
import KindEnterprise from './model/kind-enterprise.model';
import KindTool from './model/kind-tool.model';
import ResourceTool from './model/resourse-tool.model';
import SectionTool from './model/section-tool.model';

@Module({
  imports: [
    ControllersModule,
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
      models: [
        Tool,
        FavoriteTool,
        KindEnterprise,
        KindTool,
        ResourceTool,
        SectionTool,
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
