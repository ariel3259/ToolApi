import { Module } from '@nestjs/common';
import ToolService from 'src/services/tool.service';
import ToolController from './tool.controller';

@Module({
  imports: [ToolService],
  providers: [ToolService],
  controllers: [ToolController],
})
export class ControllersModule {}
