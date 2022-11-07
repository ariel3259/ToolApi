import { Injectable } from '@nestjs/common';
import Page from 'src/dto/Page.dto';
import KindTool from 'src/model/kind-tool.model';
import { InjectModel } from '@nestjs/sequelize';
import KindToolDto from 'src/dto/kind-tool.dto';

@Injectable()
export default class KindToolService {
  constructor(@InjectModel(KindTool) private kindTool: typeof KindTool) {}

  async getAll(offset: number, limit: number): Promise<Page<KindTool>> {
    const kindTools: KindTool[] = await this.kindTool.findAll({
      offset,
      limit,
      where: {
        state: true,
      },
    });
    const totalItems: number = await this.kindTool.count({
      where: {
        state: true,
      },
    });
    return {
      elements: kindTools,
      totalItems,
    };
  }

  async save(kindTool: KindToolDto): Promise<KindTool> {
    const kindToolSaved: KindTool = await this.kindTool.create({ ...kindTool });
    return kindToolSaved;
  }

  async update(kindTool: KindToolDto, id: number): Promise<KindTool> {
    await this.kindTool.update(
      { ...kindTool },
      {
        where: {
          id,
          state: true,
        },
      },
    );
    const kindToolModified: KindTool = await this.kindTool.findOne({
      where: {
        id,
        state: true,
      },
    });
    return kindToolModified;
  }

  async delete(id: number, adminId: string): Promise<void> {
    await this.kindTool.update(
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
