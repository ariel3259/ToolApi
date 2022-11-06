import { Module } from '@nestjs/common';
import SectionToolService from './section-tool.service';
import { SequelizeModule } from '@nestjs/sequelize';
import SectionTool from 'src/model/section-tool.model';

@Module({
  imports: [SequelizeModule.forFeature([SectionTool])],
  exports: [SectionToolService],
})
export class ServicesModule {}
