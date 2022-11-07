import { Module } from '@nestjs/common';
import SectionToolService from './section-tool.service';
import { SequelizeModule } from '@nestjs/sequelize';
import SectionTool from 'src/model/section-tool.model';
import Tool from 'src/model/tool.model';
import ToolService from './tool.service';
import KindTool from 'src/model/kind-tool.model';
import KindToolService from './kind-tool.service';

@Module({
  imports: [SequelizeModule.forFeature([SectionTool, Tool, KindTool])],
  exports: [SectionToolService, ToolService, KindToolService],
})
export class ServicesModule {}
