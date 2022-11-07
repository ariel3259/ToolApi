import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Tool from 'src/model/tool.model';
import Page from 'src/dto/Page.dto';
import ToolDto from 'src/dto/tool.dto';

@Injectable()
export default class ToolService {
  constructor(@InjectModel(Tool) private tool: typeof Tool) {}

  async getAll(offset: number, limit: number): Promise<Page<Tool>> {
    const tools: Tool[] = await this.tool.findAll({
      offset,
      limit,
      where: {
        state: true,
      },
    });
    const totalItems: number = await this.tool.count({
      where: {
        state: true,
      },
    });
    return {
      elements: tools,
      totalItems,
    };
  }

  async getOne(id: number): Promise<Tool> {
    const tool: Tool = await this.tool.findOne({
      where: {
        id,
        state: true,
      },
    });
    return tool;
  }

  async save(tool: ToolDto): Promise<Tool> {
    const toolSaved: Tool = await this.tool.create({ ...tool });
    return toolSaved;
  }

  async update(tool: ToolDto, id: number): Promise<Tool> {
    await this.tool.update(
      { ...tool },
      {
        where: {
          id,
          state: true,
        },
      },
    );
    const toolModified: Tool = await this.tool.findOne({
      where: {
        id,
        state: true,
      },
    });
    return toolModified;
  }

  async delete(id: number, adminId: string): Promise<void> {
    await this.tool.update(
      {
        state: false,
        adminId,
      },
      {
        where: {
          id,
          state: true,
        },
      },
    );
  }
}
