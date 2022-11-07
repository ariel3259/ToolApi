import {
  Body,
  Controller,
  Get,
  Query,
  Res,
  Post,
  Put,
  Delete,
  Param,
  HttpCode,
} from '@nestjs/common';
import ToolDto from 'src/dto/tool.dto';
import ToolService from 'src/services/tool.service';
import { Response } from 'express';
import Page from 'src/dto/Page.dto';
import Tool from 'src/model/tool.model';

@Controller('api/tool')
export default class ToolController {
  constructor(private readonly toolService: ToolService) {}

  @Get()
  async getAll(
    @Query('offset') offset: number,
    @Query('limit') limit: number,
    @Res() res: Response,
  ): Promise<ToolDto[]> {
    const toolPaginated: Page<Tool> = await this.toolService.getAll(
      offset,
      limit,
    );
    const toolResponse: ToolDto[] = toolPaginated.elements.map((element) => ({
      id: element.id,
      name: element.name,
      sectionId: element.sectionId,
      typeId: element.typeId,
      enterpriseId: element.enterpriseId,
      adminId: null,
    }));
    res.set({
      'x-total-count': toolPaginated.totalItems,
    });
    return toolResponse;
  }

  @Post()
  async save(@Body() tool: ToolDto): Promise<ToolDto> {
    const toolSaved: Tool = await this.toolService.save(tool);
    return {
      id: toolSaved.id,
      name: toolSaved.name,
      sectionId: toolSaved.sectionId,
      typeId: toolSaved.typeId,
      enterpriseId: toolSaved.enterpriseId,
      adminId: null,
    };
  }

  @Put(':id')
  async update(
    @Body() tool: ToolDto,
    @Param('id') id: number,
  ): Promise<ToolDto> {
    const toolModified: Tool = await this.toolService.update(tool, id);
    return {
      id: toolModified.id,
      name: toolModified.name,
      sectionId: toolModified.sectionId,
      typeId: toolModified.typeId,
      enterpriseId: toolModified.enterpriseId,
      adminId: null,
    };
  }

  @Delete(':id/admin/:adminId')
  @HttpCode(205)
  async delete(
    @Param('id') id: number,
    @Param('adminId') adminId: string,
  ): Promise<null> {
    await this.delete(id, adminId);
    return null;
  }
}
