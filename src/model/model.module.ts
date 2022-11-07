import { Module } from '@nestjs/common';
import Tool from './tool.model';
import KindTool from './kind-tool.model';
import SectionTool from './section-tool.model';

@Module({
  exports: [Tool, KindTool, SectionTool],
})
export class ModelModule {}
