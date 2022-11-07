import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import SectionTool from 'src/model/section-tool.model';
import Page from 'src/dto/Page.dto';
import SectionToolDto from 'src/dto/section-tool.dto';

@Injectable()
export default class SectionToolService {
  constructor(
    @InjectModel(SectionTool) private sectionTool: typeof SectionTool,
  ) {}

  async getAll(offset: number, limit: number): Promise<Page<SectionTool>> {
    const sectionsTool: SectionTool[] = await this.sectionTool.findAll({
      offset,
      limit,
      where: { state: true },
    });
    const totalItems: number = await this.sectionTool.count({
      where: { state: true },
    });
    return {
      elements: sectionsTool,
      totalItems,
    };
  }

  async save(sectionTool: SectionToolDto): Promise<SectionTool> {
    const sectionToolSaved: SectionTool = await this.sectionTool.create({
      ...sectionTool,
    });
    return sectionToolSaved;
  }

  async update(sectionTool: SectionToolDto, id: number): Promise<SectionTool> {
    await this.sectionTool.update(
      {
        ...sectionTool,
      },
      {
        where: {
          id,
          state: true,
        },
      },
    );
    const sectionToolModified: SectionTool = await this.sectionTool.findOne({
      where: {
        id,
        state: true,
      },
    });
    return sectionToolModified;
  }

  async delete(id: number, adminId: string): Promise<void> {
    await this.sectionTool.update(
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
