import { Model, Column, Table } from 'sequelize-typescript';

@Table
export default class SectionTool extends Model {
  @Column
  section: string;

  @Column
  adminId: string;

  @Column({ defaultValue: true })
  state: boolean;
}
