import { Module } from '@nestjs/common';
import Tool from './tool.model';
import FavoriteTool from './favorite-tool.model';
import KindEnterprise from './kind-enterprise.model';
import KindTool from './kind-tool.model';
import ResourceTool from './resourse-tool.model';
import SectionTool from './section-tool.model';

@Module({
  exports: [
    Tool,
    FavoriteTool,
    KindEnterprise,
    KindTool,
    ResourceTool,
    SectionTool,
  ],
})
export class ModelModule {}
