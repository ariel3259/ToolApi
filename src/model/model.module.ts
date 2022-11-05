import { Module } from '@nestjs/common';
import Tool from './Tool.model';
import FavoriteTool from './FavoriteTool.model';

@Module({
  exports: [Tool, FavoriteTool],
})
export class ModelModule {}
